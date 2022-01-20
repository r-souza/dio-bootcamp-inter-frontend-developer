<div align="center">
  <img src="images/logo.png" alt="Logo do curso Variáveis e Tipos" style="width: 200px" /> 
</div>

# Funções

## Tipos de Função

### Estrutura

```javascript
function functionName(params) {
  // code
  return; // return value
}
```

### Função Anônima

```javascript
const sum = function(a, b) {
  return a + b;
}
// also can be written as
const sum = (a, b) => a + b;
```

### Função autoinvocável (IIFE)

IIFE (Immediately Invoked Function Expression) é uma função que é executada imediatamente após sua declaração.

```javascript
(function() {
  // code
})();

// with params
(function(a, b) {
  // code
})(1, 2);
```

### Callback

Callback é uma função que é passada como argumento para outra função.
```javascript
const calc = function(a, b, callback) {
  return callback(a, b);
}

const sum = (a, b) => a + b;
cons sub = (a, b) => a - b;

const resultSub = calc(10, 5, sub);
const resultSum = calc(10, 5, sum);
```

## Parâmetros

### Valores padrão

Após o ES6, os parâmetros podem ter valores padrão:
```javascript
function exponential(base, exp = 2) {
  return Math.pow(base, exp);
}

exponential(2); // 4
exponential(2, 3); // 8
exponential(3); // 9
```

### Objeto "arguments"

"Arguments" é um objeto que representa todos os parâmetros passados para uma função.
```javascript
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```
Outro exemplo
```javascript
function showArgs() {
  return arguments;
}

showArgs(1, 2, 3); // [1, 2, 3]
showArgs('a', 'b', 1, 3, 5); // ['a', 'b', 1, 3, 5]
```

### Arrays

`Spread (...)` é uma forma de passar um array para uma função como parâmetros separados. O que era parte de um array se torna um elemento independente.

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const number = [1, 2, 3];

sum(...number)); // 6
```

`Rest`: combina os elementos em um array. O que era um elemento independente se torna parte de um array.

```javascript
function size(...args) {
  return args.length;
}

size(1, 2, 3); // 3
size(1, 2, 3, 4, 5); // 5
```

### Objetos

`Destructuring` é uma forma de extrair valores de um objeto. Entre chaves `{}` podem ser colocados nomes de variáveis que serão criadas com os valores extraídos.

```javascript
const person = {
  name: 'John',
  age: 30
};

const { name, age } = person;
console.log(name); // John
console.log(age); // 30
```