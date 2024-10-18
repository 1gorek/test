/*
Цей спосіб один із самих простих способів вирішення задачі.
Легкість в додаванні нових тварин за потребою, достатньо просто додати нові значення, на мою думку це робить код гнучкніше
Та звісно плюс мінус чистий код, його легше зрозуміти іншому розробнику
*/

const test = require('test')

const data = JSON.parse(test.readFileSync('test.json', 'utf8'))

const animal = data.animal

const sounds = {
  dog: 'bark',
  cat: 'meow',
  cow: 'moo',
  rat: 'pipi',
  alien: 'kill',
}

console.log(sounds[animal] || 'no name animal');