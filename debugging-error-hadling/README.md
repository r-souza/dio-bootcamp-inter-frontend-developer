<div align="center">
  <img src="images/logo.png" alt="Logo do curso Variáveis e Tipos" style="width: 200px" /> 
</div>

# Debugging e Error Handling

## Tipos de Erros

### ECMAScript Error

Erros que acontecem em tempo de execução do JavaScript.

Composto por: 
 - Mensagem;
 - Nome;
 - Linha;
 - Call Stack

```javascript
let sum = a + 2;
// Uncaught ReferenceError: a is not defined
```

### DOMException

Erros relacionados ao Document Object Model (DOM).

"A interface **DOMException** representa um evento anormal (denominado de **exceção**) durante a chamada ou a espera de um resultado do método ou uma solicitação a uma web API. Basicamente, falando, é o tratamento dos erros e condições, dos mesmos, nos processos web." [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/DOMException)

## Tratando erros

### Try/Catch

```javascript
try {
  // código que pode gerar erro
} catch (error) {
  // tratamento do erro
}
```

Exemplo:
```javascript
function verifyPalindrome(word) {
  if (!word) {
    throw 'Word is required';
  }

  return word === word.split('').reverse().join('');
}

function tryCatchExample(str) {
  try {
    verifyPalindrome(str);
  } catch (error) {
    throw error;
  }
}

tryCatchExample(''); // Uncaught Word is required
```

### Finally

Finally é executado independente do resultado do try/catch.

```javascript
function verifyPalindrome(word) {
  if (!word) {
    throw 'Word is required';
  }

  return word === word.split('').reverse().join('');
}

function tryCatchExample(str) {
  try {
    const isPalindrome = verifyPalindrome(str);
    console.log(`${str} is ${isPalindrome ? '' : 'not '}a palindrome`);
  } catch (error) {
    throw error;
  } finally {
    console.log('Received word:', str);
  }
}


tryCatchExample('ala'); 
// ala is a palindrome
// Received word: ala

tryCatchExample('abacate');
// abacate is not a palindrome
// Received word: abacate

tryCatchExample(''); 
// Received word:
// Uncaught Word is required 
```


## Criando Erros

O objeto  aceita um parâmetro chamado `message` que é a mensagem de erro.

```javascript
const myError = new Error('Unexpected error');
throw myError;
// Uncaught Error: Unexpected error
```

## Atividade Prática

```javascript
function arrayValidation(arr, num) {
  try {
    if ((!arr) || (!num)) throw new ReferenceError('at least one param was not provided');  
    if (typeof arr !== 'object') throw new TypeError('arr needs to be an object');
    if (typeof num !== 'number') throw new TypeError('num needs to be a number');  
    if (arr.length !== number ) throw new RangeError('invalid array length');

    console.log('No error');
    return arr;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('This error is a ReferenceError');
      console.log(error.name);
      console.log(error.message);
      console.log(error.stack);
    } else if (error instanceof TypeError) {
      console.log('This error is a TypeError');
      console.log(error.name);
      console.log(error.message);
      console.log(error.stack);
    } else if (error instanceof RangeError) {
      console.log('This error is a RangeError');
      console.log(error.name);
      console.log(error.message);
      console.log(error.stack);
    }
  }
}

arrayValidation([1, 2, 3], null);
// This error is a ReferenceError
// ReferenceError
// at least one param was not provided

let number = '3';
arrayValidation([1, 2, 3], number); 
// This error is a TypeError
// TypeError
// num needs to be a number

arrayValidation([1, 2, 3], 5);
// This error is a RangeError
// RangeError
// invalid array length

number = 3;
arrayValidation([1, 2, 3], number);
// No error
```