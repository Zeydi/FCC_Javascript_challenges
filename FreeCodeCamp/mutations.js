// Return true if the string in the first element of the array contains all
// of the letters of the string in the second element of the array.

function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  let result = false;
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      return false;
    }
  }
  return true;
}

console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
