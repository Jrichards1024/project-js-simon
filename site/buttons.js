let input = [];
let arr = [];
let arrSlice = [];
let inputSlice = [];
let count = 0;
let arrStr = '';
let inputStr = '';
let arrSliceStr = '';
let inputSliceStr = '';
let indexCounter = 0;
let arrCopy = [];

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
  //inputStr = inputStr + 'green';
  console.log(`Input is now ${input}`);
  gameCheck()
});
$('.simon-button.red').on('click', function() {
  input.push('red');
  //inputStr = inputStr + 'red';
  console.log(`Input is now ${input}`);
  gameCheck()
});
$('.simon-button.yellow').on('click', function() {
  input.push('yellow');
  //inputStr = inputStr + 'yellow';
  console.log(`Input is now ${input}`);
  gameCheck();
});
$('.simon-button.blue').on('click', function() {
  input.push('blue');
  //inputStr = inputStr + 'blue';
  console.log(`Input is now ${input}`);
  gameCheck()
});
}
function isDone(color) {
  return $(`.simon-button.${color}`).css({opacity: 100})
}
function process() {
  let colors = arrCopy;
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
    process(colors);
  }, 500);
}
function createPattern() {
  let randNum = Math.floor(Math.random() * 4);
  if (randNum === 0) {
    arr.push('green');
    arrCopy.push('green');
  }
  else if (randNum === 1) {
    arr.push('red');
    arrCopy.push('red');
  }
  else if (randNum === 2) {
    arr.push('yellow');
    arrCopy.push('yellow');
  }
  else if (randNum === 3) {
    arr.push('blue');
    arrCopy.push('blue');
  }
  //playAudio()
  arrSlice = [];
  input = [];
  inputSlice = [];
  indexCounter = 0;
  //step();
  console.log(`The generated array is ${arr}`);
}

function gameCheck() {
  arrStr = arr.toString('');
  inputStr = input.toString('');
  console.log(arr);
  console.log(input);
  if (inputStr === arrStr) {
    createPattern();
    count += 1;
    indexCounter = 0;
    arrCopy = arr;
    return
  }
  else if (arr[indexCounter].toString('') === input[indexCounter].toString('')) {
    indexCounter++;
    arrCopy = arr;
  }
  else {
    alert(`You lost after ${count} turns!`);}
}
//   console.log("before if")
//   console.log('inputStr is ' + inputStr);
//   arrSliceStr = arrSlice.toString('');
//   inputSliceStr = inputSlice.toString('');
//   step()
//   console.log(`inputSliceStr ${inputSliceStr}`)
//   if (arrStr === inputStr) {
//     //console.log("----if----")
//     pattern();
//     count += 1;
//     process(arr);
//     // console.log('arrSlice is ' + arrSlice);
//     // console.log('arrSliceStr is ' + arrSliceStr);
//     // console.log('inputStr is ' + inputStr);
//     // console.log('this is inputSlice', inputSlice)
//     // console.log('inputSliceStr is ' + inputSliceStr);
//   }
//   else if (arrSliceStr === inputStr) {
//     console.log("else if ")
//     step();
//     console.log('arrSlice is ' + arrSlice);
//     console.log('arrSliceStr is ' + arrSliceStr);
//     console.log('inputStr is ' + inputStr);
//     console.log('inputSliceStr is ' + inputSliceStr);
//   }
//   else {
//     alert(`You lost after ${count} turns!`);
//   };
// }
$('.play-button').on('click', function() {
  playAudio();
  })
createPattern();
process();
buttonPress();
