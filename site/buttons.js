let input = [];
let arr = [];
let inputSlice = [];
let count = 0;
let indexCounter = 0;
let lightupIndexCounter = 0;
let inputStr = '';
let arrStr = '';

function playSound(color) {
  let selector = $(`.simon-button.${color}`);
  let audio = new Audio();
  audio.src = `${color}Button.mp3`;
  audio.play();
  $(selector).addClass('flash');
}

function makeMove(color, sound) {
  let selector = $(`.simon-button.${color}`);
  let audio = new Audio();
  audio.src = sound;
  audio.play();
  $(selector).addClass('flash');
}
$('.simon-button.green').on('mousedown', function() {
  makeMove('green', 'greenButton.mp3');
});
$('.simon-button.blue').on('mousedown', function() {
  makeMove('blue', 'blueButton.mp3');
});
$('.simon-button.yellow').on('mousedown', function() {
  makeMove('yellow', 'yellowButton.mp3');
});
$('.simon-button.red').on('mousedown', function() {
  makeMove('red', 'redButton.mp3');
});
function buttonPress() {
$('.simon-button.green').on('click', function() {
  input.push('green');
 console.log(`Input is now ${input}`);
  gameCheck()
});
$('.simon-button.red').on('click', function() {
  input.push('red');
  console.log(`Input is now ${input}`);
  gameCheck()
});
$('.simon-button.yellow').on('click', function() {
  input.push('yellow');
  console.log(`Input is now ${input}`);
  gameCheck();
});
$('.simon-button.blue').on('click', function() {
  input.push('blue');
  console.log(`Input is now ${input}`);
  gameCheck()
});
}
function isDone(color) {
  return $(`.simon-button.${color}`).css({opacity: 100})
}
function process(colors) {

  if (lightupIndexCounter === colors.length  ) {
    return
  }
  let nextColor = colors[lightupIndexCounter];
  $(`.simon-button.${nextColor}`).animate({
  opacity: .5,
  },500,function() {
  isDone(nextColor),playSound(nextColor)
  });
  setTimeout(() => {
    process(colors);
  }, 500,lightupIndexCounter++);
}
function createPattern() {
  let randNum = Math.floor(Math.random() * 4);
  if (randNum === 0) {
    arr.push('green');
  }
  else if (randNum === 1) {
    arr.push('red');
  }
  else if (randNum === 2) {
    arr.push('yellow');
  }
  else if (randNum === 3) {
    arr.push('blue');
  }
  //playAudio()
  input = [];
  inputSlice = [];
  indexCounter = 0;
  lightupIndexCounter = 0
  //console.log(`The generated array is ${arr}`);
  process(arr)
}

function gameCheck() {
  arrStr = arr.toString('');
  inputStr = input.toString('');
  //console.log(`this is arr in game check ${arr}`)
  if (inputStr === arrStr) {
    createPattern();
    count += 1;
    indexCounter = 0;
    return
  }
  else if (arr[indexCounter].toString('') === input[indexCounter].toString('')) {
    indexCounter++;
  }
  else {
    alert(`You lost after ${count} turns!`);}
}

function emptyEverything() {
  arr = [];
  input = [];
  inputSlice = [];
  count = 0;
  indexCounter = 0;
  lightupIndexCounter = 0;
  inputStr = '';
  arrStr = '';
  colors = [];
  nextColor = [];
}

$('.play-button').on('click', function() {
  arr = [];
  input = [];
  inputSlice = [];
  count = 0;
  indexCounter = 0;
  lightupIndexCounter = 0;
  inputStr = '';
  arrStr = '';
  colors = [];
  nextColor = [];
  createPattern();
  buttonPress();
});
