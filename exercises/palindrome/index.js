// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// FIRST SOLUTION

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

/*   if (str === reversed) {
    return true;
  } else {
    return false;
  } */

// a Boolean statement:
//   return str === reversed;
// }

// ALTERNATE SOLUTION

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// first argument - character we are currently iterating over in the array
// second argument - i - index of that current element

module.exports = palindrome;
