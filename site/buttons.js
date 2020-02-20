let input = [];

function buttonPress() {
$('.simon-button.green').on('click', function() {
  input.push(0);
  console.log(`Input is now ${input}`);
  gameCheck()
});

$('.simon-button.red').on('click', function() {
  input.push(1);
  console.log(`Input is now ${input}`);
  gameCheck()
});

$('.simon-button.yellow').on('click', function() {
  input.push(2);
  console.log(`Input is now ${input}`);
  gameCheck()
});

$('.simon-button.blue').on('click', function() {
  input.push(3);
  console.log(`Input is now ${input}`);
  gameCheck()
});

}

let arr = [];
let count = 0;

function pattern() {
  let randNum = Math.floor(Math.random() * 4);
  arr.push(randNum);
  console.log(`The generated array is ${arr}`);
}

let arrStr = '';
let inputStr = '';

function gameCheck() {
  arrStr = arr.toString('');
  inputStr = input.toString('');
  if (arrStr === inputStr) {
    pattern();
    count += 1;
  }
  else {
    console.log(`You lost after ${count} turns!`);
  }
}
pattern();
buttonPress();
