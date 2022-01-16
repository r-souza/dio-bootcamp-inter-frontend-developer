function compareNumbers(number1, number2) {
  const sum = number1 + number2;

  let message = number1 === number2 ? 
    `The numbers ${number1} and ${number2} are equal.` : 
    `The numbers ${number1} and ${number2} are not equal.`; 
    
  message += ` The sum is ${sum}`;
  
  message += sum < 10 ? 
    ', which is less than 10' :
    ', which is greater than 10';   
  
  message += sum < 20 ? ' and less than 20' : ' and greater than 20';

  return message;
}

const result = compareNumbers(4, 8);

console.log(result); 
// The numbers 4 and 8 are not equal. The sum is 12, which is greater than 10 and less than 20