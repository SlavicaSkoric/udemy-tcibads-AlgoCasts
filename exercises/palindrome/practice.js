function palindrome1(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(palindrome1('abba'));
console.log(palindrome1('abcde'));

console.log(palindrome2('abba'));
console.log(palindrome2('abcde'));
