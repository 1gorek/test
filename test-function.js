/*
Вирішення задачі за допомогую функції може зробити код більш модульним за потребою 
та підходе якщо кожен звук буде більш зі складною логікою
Також легке додавання нової тварини
Але ж все таки для простої задачі, цей метод буде зайвим.
*/

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('test.json', 'utf8'));

function bark() {
  console.log('bark');
}

function meow() {
  console.log('meow');
}

function moo() {
  console.log('moo');
}

function pipi() {
  console.log('pipi');
}

function kill() {
  console.log('KILL');
}

const animal = data.animal;

const soundFunctions = {
  dog: bark,
  cat: meow,
  cow: moo,
  rat: pipi,
  alien: kill
};

(soundFunctions[animal] || (() => console.log('Unknown animal')))();