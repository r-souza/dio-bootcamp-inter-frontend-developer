function getOperation() {
  const operation = prompt('Digite a operação desejada: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão');

  return parseInt(operation);
}

const operation = getOperation();

let number1 = parseInt(prompt('Digite o primeiro número'));
let number2 = parseInt(prompt('Digite o segundo número'));

function sum() {
  result = number1 + number2;
  alert(`A soma dos números ${number1} e ${number2} é ${result}`);
  return result;  
}

function subtraction() {
  result = number1 - number2;
  alert(`A subtração dos números ${number1} e ${number2} é ${result}`);
  return result;
}

function multiplication() {
  result = number1 * number2;
  alert(`A multiplicação dos números ${number1} e ${number2} é ${result}`);
  return result;
}

function division() {
  result = number1 / number2;
  alert(`A divisão dos números ${number1} e ${number2} é ${result}`);
  return result;
}

switch (operation) {
  case 1:
    sum();  
    break;
  case 2:
    subtraction();  
    break;
  case 3:
    multiplication();  
    break;
  case 4:
    division();  
    break;
  
  default:
    alert('Operação inválida');
    break;
}





