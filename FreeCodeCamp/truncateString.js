// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  let res = str.length > num ? str.substr(0, num) + '...' : str;
  return res;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
);
