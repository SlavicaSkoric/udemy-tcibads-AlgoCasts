// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1

/* function reverse(str) {
  return str.split('').reverse().join('');
} */

// SOLUTION 2a

/* function reverse(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
} */

// SOLUTION 2b
// ES2015 ES6 for of syntax - used to iterate over the elements of an array - iterable object

/* function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
} */

// temporary variable redeclared on every iteration of the loop

// SOLUTION 3
// use a complicated/advanced array helper - reduce - take all the different values within an array and condense them down to one singular value
// second argument - starting initital value for our function (for the first argument - callback)
// whenever reduce runs, it's going to take the starting argument (value), it's going to pass it into the arrow function as the first argument, and then whatever gets returned from that inner function will be then used as the starting argument for every successive run of the function
// in total, the function runs one time for every element of an array

function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

// rev - reversed string
// char - character of the str that we're operating on right now

module.exports = reverse;
