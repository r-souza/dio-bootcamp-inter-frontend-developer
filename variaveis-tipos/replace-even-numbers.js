function replaceEvenNumbers(array) {
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i] = 0;
    }
  }

  return array;
}

let array = [1, 3, 4, 6, 80, 22, 23, 90, 0];

console.log(replaceEvenNumbers(array)); // [ 1, 3, 0, 0, 0, 0, 23, 0, 0]
console.log(replaceEvenNumbers([])); // -1