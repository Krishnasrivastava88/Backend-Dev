function capitalize(str) {
  return str.toUpperCase();
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = { capitalize, reverse, countVowels };
