let input = [];
let arr = [];
let arrSlice = [];
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

function playAudio(sound) {
  let audio = new Audio();
  audio.src = sound;
  sound.once('unlock', function() {
    audio.play();
  });
};
for (color of arr) {
  if (color === 'yellow') {
    playAudio('yellowButton.mp3');
  }
  else if (color === 'red') {
    playAudio('redButton.mp3');
  }
  else if (color === 'green') {
    playAudio('greenButton.mp3');
  }
  else if (color === 'blue') {
    playAudio('blueButton.mp3');
  }
}

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
  gameCheck()
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

let colors = arr;
function process() {
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

function pattern() {
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
  arrSlice = [];
  input = [];
  j = 0;
  step();
  console.log(`The generated array is ${arr}`);
}

let j = 0;
function step() {
  if (j === 0) {
    arrSlice.push(arr[j])
    j++
    console.log('arrSlice is ' + arrSlice);
  }
  else {
    j++
    arrSlice.push(arr[j]);
  }
}

function gameCheck() {
  arrStr = arr.toString('');
  inputStr = input.toString('');
  arrSliceStr = arrSlice.toString('');
  if (arrStr === inputStr) {
    pattern();
    count += 1;
    console.log('I entered if')
  }
  else if (arrSliceStr === inputStr) {
    step()
  }
  else {
    alert(`You lost after ${count} turns!`);
  };
}

$('.play-button').on('click', function() {
  playAudio()
  })

pattern();
process();
buttonPress();
