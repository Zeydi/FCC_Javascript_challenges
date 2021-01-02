//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let leng = target.length;
  let last = str.substring(str.length - leng, str.length);
  return last === target;
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('He has to give me a new name', 'name'));
