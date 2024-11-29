from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from urllib.parse import urlparse, parse_qs
import time

options = Options()

options.add_argument("--headless")
 
service = Service(executable_path="./chromedriver")
driver = webdriver.Chrome(options=options,service=service)

driver.get("https://www.roblox.com/charts#/sortName/Top_Earning_L7RS_V4?country=all&device=all")

last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    time.sleep(5)

    new_height = driver.execute_script("return document.body.scrollHeight")

    if new_height == last_height:
        break

    last_height = new_height
cards = driver.find_elements(By.CLASS_NAME, "game-card-link")
extracted_data = []
for card in cards:
    title = card.find_element(By.CLASS_NAME, "game-card-name").text
    link = card.get_attribute("href")
    parsed_link = urlparse(link)
    query_params = parse_qs(parsed_link.query)
    placeId = query_params.get("placeId", [None])[0]
    universeId = query_params.get("universeId", [None])[0] 
    extracted_data.append({"title": title, "placeId": placeId, "universeId": universeId})

print(len(extracted_data))
print(extracted_data)

driver.quit()
