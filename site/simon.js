// This file contains the game logic.
// All the event-listening should happen in buttons.js
let arr = [];
let toCheck = require('./buttons.js');

function pattern() {
  let randNum = Math.floor(Math.random() * 4);
  return arr.push(randNum);
}

function gameCheck() {
  if (arr === toCheck) {
    pattern()
  }
  else {
    console.log('You lost!')
  }
}
gameCheck()
