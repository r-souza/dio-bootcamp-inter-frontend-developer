function returnEvenValues(numbers) {  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      numbers.splice(i, 1);
    }
  }
  
  return numbers;
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(returnEvenValues(numbers));