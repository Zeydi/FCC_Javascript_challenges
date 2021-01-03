// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

// approach with splice

function frankenSplice(arr1, arr2, n) {
  let arr = [];
  arr.push(...arr2);
  arr.splice(n, 0, ...arr1);
  return arr;
}
// approach with slice
function frankenSlice(arr1, arr2, n) {
  let arr = [];
  arr.push(...arr2.slice(0, n));
  arr.push(...arr1);
  arr.push(...arr2.slice(n, arr2.length));
  return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSlice([1, 2, 3], [4, 5, 6], 1));
