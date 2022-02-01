// Question: How would you reverse a string in JavaScript?
// Answer: I can loop through the string and concatenate letters to a new string

function reverse(str) {
  var rtnStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    rtnStr += str[i];
  }
  return rtnStr;
}

console.log(reverse('Mohamad Syazwan Shafei'));


// recursive way
function reverse(str) {
  if (str === '') {
    return '';
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverse('Mohamad Syazwan Shafei'));


// use built in method
function reverse(str) {
  if (!str || str.length < 2) return str;

  return str.split('').reverse().join('');
}
console.log(reverse('Mohamad Syazwan Shafei'));


// reverse words in a sentence using built in method
function reverseWords(str) {
  return str.split(' ').reverse();
}
console.log(reverseWords('Mohamad Syazwan Shafei'));


// both string reverse and word reverse
function reverseInPlace(str) {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(reverseInPlace('Mohamad Syazwan Shafei'));
