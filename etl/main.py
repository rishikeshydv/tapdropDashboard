from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from urllib.parse import urlparse, parse_qs
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
                link = card.get_attribute("href")
                parsed_link = urlparse(link)
                query_params = parse_qs(parsed_link.query)
                placeId = query_params.get("placeId", [None])[0]
                universeId = query_params.get("universeId", [None])[0]
                if placeId and placeId not in self.visited_links:
                    genre_,visits_,playing_,favoritedCount_ = self.getInfo(universeId)
                    self.extracted_data.append({
                    "title": title,
                    "link": link,
                    "placeId": placeId,
                    "universeId": universeId,
                    "genre": genre_,
                    "visits": visits_,
                    "playing": playing_,
                    "favoritedCount": favoritedCount_
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
        return genre,visits,playing,favoritedCount
    
    
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
                link = card.get_attribute("href")
                parsed_link = urlparse(link)
                query_params = parse_qs(parsed_link.query)
                placeId = query_params.get("placeId", [None])[0]
                universeId = query_params.get("universeId", [None])[0]

                if placeId not in self.visited_links:
                    self.visited_links.add(placeId)
                    genre_,visits_,playing_,favoritedCount_ = self.getInfo(universeId)
                    new_games.append({
                        "title": title,
                        "link": link,
                        "placeId": placeId,
                        "universeId": universeId,
                        "genre": genre_,
                        "visits": visits_,
                        "playing": playing_,
                        "favoritedCount": favoritedCount_
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
    for game in etl.extracted_data:
        print(game['title'])
    print(f"Total games extracted: {len(extracted_data)}")
    print("Extracting deep data")
    deep_extracted_data = etl.deep_extract()
    print("Total Games Extracted: ",len(extracted_data))
    for game in etl.extracted_data:
        print(game['title'])

    
