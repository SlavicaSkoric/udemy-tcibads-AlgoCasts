function reverse1(str) {
  return str.split('').reverse().join('');
}

function reverse2a(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

function reverse2b(str) {
  let reversed = '';

  for (char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverse3(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

const hello = reverse1('hello');
const hiThere = reverse2a('hiThere');
const bye = reverse2b('bye');
const howAreYou = reverse3('howAreYou');

console.log(hello, hiThere, bye, howAreYou);
