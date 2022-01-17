function prepareString(str) {
  return str.toLowerCase().replace(/\s/g, '');
}
  

function isPalindrome(str) {
  if(!str) return false;
  str = prepareString(str);

  return str.split('').reverse().join('') === str.replace(/\s/g, '');
}

console.log(isPalindrome('arara')); // true
console.log(isPalindrome('ovo')); // true
console.log(isPalindrome('banana')); // false
console.log(isPalindrome('Roma me tem amor')); // true

console.log('now using for loop version');

function isPalindromeForVersion(str) {
  if(!str) return false;
  str = prepareString(str);

  for (let i = 0; i < str.length /2; i++) {
    if(str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;  
}

console.log(isPalindromeForVersion('arara')); // true
console.log(isPalindromeForVersion('ovo')); // true
console.log(isPalindromeForVersion('banana')); // false
console.log(isPalindromeForVersion('Roma me tem amor')); // true