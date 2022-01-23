<div align="center">
  <img src="images/logo.png" alt="Logo do curso Variáveis e Tipos" style="width: 200px" /> 
</div>

# Coleções

## Map

 - Map é uma coleção de arrays no formato de chave/valor.
 - Pode ser iterado com um loop `for...of`.

```javascript
const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);

myMap.get('name'); // John
myMap.get('age'); // 30

myMap.size; // 2

myMap.has('name'); // true
myMap.has('lastName'); // false

myMap.delete('name');
myMap.size; // 1
myMap.has('name'); // false
myMap.get('name'); // undefined

myMap.clear();
myMap.size; // 0
```

### Map vs Object
 - Maps podem ter chaves de qualquer tipo;
 - Maps são mais fáceis de iterar;
 - Utilizado quando o valor das chaves é desconhecido;
 - Os valores tem o mesmo tipo

## Set

Sets são estruturfas que armazenam apenas **valores únicos**

### Métodos

```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(3);
mySet.add(5);

mySet.has(1); // true
mySet.has(4); // false

mySet.delete(1);
mySet.has(1); // false
mySet.size; // 2

mySet.clear();
mySet.size; // 0
```

## Atividades Práticas

### Atividade 1 - Maps

Criar uma função que retorna o nome dos membros de um Map que tem o papel `ADMIN` no sistema.

1. Crie uma função getAdmins que recebe um `Map` como parâmetro.
2. Crie um Map e popule-o com nomes de usuários e seus papéis no sistema.
3. Dentro de getAdmins, utilize o loop `for ...of`para retornar uma lista com os nomes dos usuários que possuem o papel `ADMIN`.

```javascript
const users = new Map();

users.set('john', 'ADMIN');
users.set('jone', 'USER');
users.set('bob', 'USER');
users.set('mary', 'ADMIN');

function getAdmins(maps) {
  let admins = [];
  for(const [key, value] of maps) {
    if (value === 'ADMIN') {
      admins.push(key);
    }
  }
  return admins
}
const admins = getAdmins(users);

console.log(admins); // ['john', 'mary']
```


### Atividade 2 - Sets

Dado o array [30, 30, 40, 5, 223, 2049, 3134, 5], retorno outro array apenas com valores únicos.

```javascript
const myArray = [30, 30, 40, 5, 223, 2049, 3134, 5];

function getUnique(arr) {
  const unique = new Set(arr);
  return [...unique];
}

const unique = getUnique(myArray);

console.log(unique); // [30, 40, 5, 223, 2049, 3134]
```