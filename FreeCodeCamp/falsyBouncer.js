// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

const bouncer = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(bouncer([7, 'ate', '', false, 9]));
