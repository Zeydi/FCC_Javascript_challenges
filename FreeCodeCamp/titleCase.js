// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let strArr = str.toLowerCase().split(' ');
  let arr = strArr.map((elt) => elt[0].toUpperCase() + elt.slice(1));
  return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
