console.log('testing');

document.getElementById('decrement').addEventListener('click', decrement);
document.getElementById('increment').addEventListener('click', increment);

function getCurrentNumberElement() {
  return document.getElementById('currentNumber');
}

function getCurrentNumber() {
  let element = getCurrentNumberElement();
  return parseInt(element.innerHTML);
}

function setCurrentNumber(number) {
  let element = getCurrentNumberElement();
  element.innerHTML = number;
}

function increment() {
  let currentNumber = getCurrentNumber();
  currentNumber++;

  number = currentNumber > 10 ? 10 : currentNumber;

  setCurrentNumber(currentNumber);
}

function decrement() {
  let currentNumber = getCurrentNumber();
  currentNumber--;

  number = currentNumber < 0 ? 0 : currentNumber;

  setCurrentNumber(number);
}
