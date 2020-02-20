let input = [];

$('.simon-button.green').on('click', function() {
  input.push(0);
  alert(`Input is now ${input}`);
});

$('.simon-button.red').on('click', function() {
  input.push(1);
  alert(`Input is now ${input}`);
});

$('.simon-button.yellow').on('click', function() {
  input.push(2);
  alert(`Input is now ${input}`);
});

$('.simon-button.blue').on('click', function() {
  input.push(3);
  alert(`Input is now ${input}`);
});

module.exports = input;
