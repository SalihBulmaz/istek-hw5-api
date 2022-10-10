# from bs4 import BeautifulSoup 
# import json
# import requests

# hackernews = list()
# idx = 0
# for i in range(1, 30):
#     url = f'https://news.ycombinator.com/news?p={i}'
#     response = requests.get(url)
#     soup = BeautifulSoup(response.content, 'html.parser')
    
#     for el in soup.find_all('span', class_='titleline'):
#         hackernews.append(dict())
#         hackernews[idx]['title'] = el.text
#         idx+=1

#     idx -= 30
#     for el in soup.find_all('td', class_='subtext'):
#         words = el.text.split(' ')
#         hackernews[idx]['votes'] = int(words[0].strip())
#         hackernews[idx]['username'] = words[3]
#         hackernews[idx]['time'] = words[4]
#         idx+=1

# with open('data.json', 'w') as f:
#     f.write(json.dumps(hackernews))


import json
with open('data.json', 'r') as f:
    data = json.loads(f.read())
    print(len(data))