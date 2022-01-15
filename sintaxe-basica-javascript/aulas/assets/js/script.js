
// boolean 
let isActive = true;
console.log(isActive, typeof isActive); // true, boolean

// number
let age = 30;
console.log(age, typeof age); // 30, number

// string
let username = 'john.doe';
console.log(username, typeof username); // john.doe, string

// Undefined
let undefinedVariable;
console.log(undefinedVariable, typeof undefinedVariable); // undefined, undefined

// null
let nullVariable = null;
console.log(nullVariable, typeof nullVariable); // null, object


const result = 10 % 3; 
console.log(result); // 1

console.log(4 > 3); // true

console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(!true && true); // false

// Arrays
const array = ['cow', 'horse', 'cat', 'dog', 'snake'];
console.log(array[3]); // dog

// Foreach
array.forEach(function(item, index) {
    console.log(`Item ${item} - Index ${index}`);
}
);

array.push('lion');
console.log(array); // [1, 2, 3, 4, 5, 6]

console.log(array.indexOf('horse')); // 1

console.log(array.includes('cow')); // true

let person = {
    name: 'John',
    surname: 'Doe',
    address: {
        street: 'Street 1',
        number: 123
    },
    isMarried: false
};

console.log(person);
console.log(person.address.street); // Street 1

let { name, surname } = person;
console.log(name, surname); // John Doe

const { address, ...personWithoutAddress } = person;

console.log(address) // { street: 'Street 1', number: 123 }
console.log(personWithoutAddress); // { name: 'John', surname: 'Doe', isMarried: false }