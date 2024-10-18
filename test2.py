# Спосіб використання матч-кейса 
# це новий і більш чистий спосіб, він надаж структорований спосіб реалізації умов і чистий код
# Мінуси лише що старі версії питона не зможуть підтримувати


import json

with open ('test.json', 'r') as file:
  data = json.load(file)

animal = data.get('animal', '')

match animal:
    case 'dog':
      print('bark')
    case 'cat':
      print('meow')
    case 'cow':
      print('moo')
    case 'rat':
      print('pipi') 
    case 'alien':
      print('kill')                 
