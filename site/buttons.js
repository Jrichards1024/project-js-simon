let input = [];
let arr = [];
let arrSlice = [];
let inputSlice = [];
let count = 0;
let arrStr = '';
let inputStr = '';
let arrSliceStr = '';

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
  checkGame()
});
$('.simon-button.red').on('click', function() {
  input.push('red');
  console.log(`Input is now ${input}`);
  checkGame()
});
$('.simon-button.yellow').on('click', function() {
  input.push('yellow');
  console.log(`Input is now ${input}`);
  checkGame()
});
$('.simon-button.blue').on('click', function() {
  input.push('blue');
  console.log(`Input is now ${input}`);
  checkGame()
});
  emptyArray(input)
}

function isDone(color) {
  return $(`.simon-button.${color}`).css({opacity: 100})
}

function processColors(colors) {
  if (colors.length === 0) {
    return
  }
  let nextColor = colors.shift();
  $(`.simon-button.${nextColor}`).animate({
  opacity: .25,
  },500, function() {
  isDone(nextColor)
  });
  setTimeout(() => {
    processColors(colors);
  }, 500);
}

function emptyArray(array) {
  array = [];
}
function emptyString(string) {
  console.log('here we are in the empty string!')
  console.log(string)
  string = ''
  console.log(string)
}

function createPattern() {
  let randNum = Math.floor(Math.random() * 4);

  if (randNum === 0) {
    arr.push('green');
    console.log(`The generated array is ${arr}`);
    emptyArray(arr)
  }
  else if (randNum === 1) {
    arr.push('red');
    console.log(`The generated array is ${arr}`);
    emptyArray(arr)
  }
  else if (randNum === 2) {
    arr.push('yellow');
    console.log(`The generated array is ${arr}`);
    emptyArray(arr)
  }
  else if (randNum === 3) {
    arr.push('blue');
    console.log(`The generated array is ${arr}`);
    emptyArray(arr)
  }
}

function pushStep() {
  let indexCounter;
  if (indexCounter === 0) {
    arrSlice.push(arr[indexCounter]);
    inputSlice.push(input[indexCounter]);
    indexCounter++;
    console.log('arrSlice is ' + arrSlice);
  }
  else {
    indexCounter++
    arrSlice.push(arr[indexCounter]);
  }
}

function checkGame() {
  arrStr = arr.toString('');
  inputStr = input.toString('');
  if (inputStr === arrStr) {
    createPattern();
    count += 1
    indexCounter = 0
    emptyString(input)
    return
  }
  else if (arrStr.length === inputStr.length) {
    console.log("----else if-----")
    createPattern()
    if (arrStr[indexCounter] === inputStr) {
      console.log("---if statement inside else if")
      indexCounter++
      // createPattern()
      // emptyString(arrStr)
    }
  }
//   else {
//     alert(`You lost after ${count} turns!`);}
}

// createPattern();
checkGame();
buttonPress();
