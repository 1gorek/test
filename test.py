# простий метод вирішення задачі, можливо ще викорстати функції, але я гадаю що для такой задачі, оптімальний варіант виглядає так

import json
from pprint import pprint

with open ('test.json', 'r') as file:
  data = json.load(file)

animal = data.get('animal', '')

sounds = {
  'dog': 'bark',
  'cat': 'meow',
  'cow': 'moo',
  'rat': 'pipi',
  'alien': 'KILL'

}

pprint(sounds.get(animal, 'Unknow animal'))
