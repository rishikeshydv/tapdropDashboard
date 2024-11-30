from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from urllib.parse import urlparse, parse_qs
import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore
import time
import requests

class RobloxTopEarningGamesETL:
    def __init__(self):
        self.options = Options()
        self.options.add_argument("--headless")
        self.service = Service(executable_path="./chromedriver")
        self.driver = webdriver.Chrome(options=self.options,service=self.service)
        self.extracted_data = []
        self.visited_links = set()

        #database init
        self.cred = credentials.Certificate("./firebaseKey.json")
        firebase_admin.initialize_app(self.cred)
        self.store = firestore.client()

    def pushToDB(self,gameInfo):
        #gameInfo has {'placeId': 'test', 'visits': 'test', 'playing': 'test', 'link': 'test', 'title': 'test', 'universeId': 'test', 'favoritedCount': 'test', 'genre': 'test'}
        universeId = gameInfo['universeId']
        doc_ref = self.store.collection(u'topEarning').document(universeId)
        try:
            doc_ref.set(gameInfo)
            print(f"Data successfully written with documentId: {universeId}")
        except google.cloud.exceptions.NotFound:
            print(u'Error pushing data.')

    def popFromDB(self):
        doc_ref = self.store.collection(u'topEarning')
        docs = doc_ref.stream()
        try:
            for doc in docs:
                print(f"Deleting document {doc.id}")
                doc.reference.delete()
        except google.cloud.exceptions.NotFound:
            print(u'Error deleting data.')

    def initial_extract(self):
        self.driver.get("https://www.roblox.com/charts#/sortName/Top_Earning_L7RS_V4?country=all&device=all")
        last_height = self.driver.execute_script("return document.body.scrollHeight")
        while True:
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(5)
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height
        cards = self.driver.find_elements(By.CLASS_NAME, "game-card-link")
        
        for card in cards:
            try:
                title = card.find_element(By.CLASS_NAME, "game-card-name").text
                rating = card.find_element(By.CLASS_NAME, "vote-percentage-label").text
                link = card.get_attribute("href")
                parsed_link = urlparse(link)
                query_params = parse_qs(parsed_link.query)
                placeId = query_params.get("placeId", [None])[0]
                universeId = query_params.get("universeId", [None])[0]
                if placeId and placeId not in self.visited_links:
                    genre_,visits_,playing_,favoritedCount_,creator_,createdDate_ = self.getInfo(universeId)
                    self.extracted_data.append({
                    "title": title,
                    "link": link,
                    "rating": rating,
                    "placeId": placeId,
                    "universeId": universeId,
                    "genre": genre_,
                    "visits": visits_,
                    "playing": playing_,
                    "favoritedCount": favoritedCount_,
                    "creator": creator_,
                    "createdDate": createdDate_
                })
            except Exception as e:
                print(f"Error in processing: {e}")

        #self.driver.quit()
        return self.extracted_data
    
    def getInfo(self,universeId):
        url = f"https://games.roblox.com/v1/games?universeIds={universeId}"
        res = requests.get(url)
        data = res.json()
        genre = data['data'][0]['genre']
        visits = data['data'][0]['visits']
        playing = data['data'][0]['playing']
        favoritedCount = data['data'][0]['favoritedCount']
        creator = data['data'][0]['creator']['name']
        createdDate = data['data'][0]['created'][:10]
        return genre,visits,playing,favoritedCount, creator, createdDate  
    
    def linkCrawl(self,url):
        print("Total Games Extracted",len(self.extracted_data))
        self.driver.get(url)
        time.sleep(2)
        new_games = []
        try:
            cards = self.driver.find_elements(By.CLASS_NAME, "game-card-link")
        except Exception as e:
            print(f"Retrying due to error: {e}")
            time.sleep(2)

        for i in range(len(cards)):
            try:
                cards = self.driver.find_elements(By.CLASS_NAME, "game-card-link")
                card = cards[i]
                title = card.find_element(By.CLASS_NAME, "game-card-name").text
                rating = card.find_element(By.CLASS_NAME, "vote-percentage-label").text
                link = card.get_attribute("href")
                parsed_link = urlparse(link)
                query_params = parse_qs(parsed_link.query)
                placeId = query_params.get("placeId", [None])[0]
                universeId = query_params.get("universeId", [None])[0]

                if placeId not in self.visited_links:
                    self.visited_links.add(placeId)
                    genre_,visits_,playing_,favoritedCount_,creator_,createdDate_ = self.getInfo(universeId)
                    new_games.append({
                    "title": title,
                    "link": link,
                    "rating": rating,
                    "placeId": placeId,
                    "universeId": universeId,
                    "genre": genre_,
                    "visits": visits_,
                    "playing": playing_,
                    "favoritedCount": favoritedCount_,
                    "creator": creator_,
                    "createdDate": createdDate_
                    })
                    self.linkCrawl(link)
            except Exception as e:
                print(f"Error in processing: {e}")

        self.extracted_data.extend(new_games)

    def deep_extract(self):
        for data in self.extracted_data:
            self.linkCrawl(data['link'])
        return self.extracted_data

if __name__ == "__main__":
    etl = RobloxTopEarningGamesETL()
    extracted_data = etl.initial_extract()
    print(f"Total games extracted: {len(extracted_data)}")

    print("Extracting deep data")
    deep_extracted_data = etl.deep_extract()
    print("Total Games Extracted: ",len(extracted_data))
    for game in etl.extracted_data:
        print(game['title'])
    print("Popping data from firestore")
    etl.popFromDB()
    print("Pushing data to firestore")
    for game in etl.extracted_data:
        etl.pushToDB(game)
    print("Data pushed successfully")

    
