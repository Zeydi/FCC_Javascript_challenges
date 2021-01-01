function palindrome(str) {
  // Removing non-alphanumeric chars and convert string to lowercase letters
  const newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Inversing strig by converting it to array and reverse()
  const inverse = newStr.split('').reverse().join('');

  // Compare str with inverse
  console.log(newStr == inverse);
  return newStr == inverse;
}

palindrome('eye'); //true
palindrome('_eye'); //true
palindrome('race car'); //true
palindrome('not a palindrome'); //false
palindrome('A man, a plan, a canal. Panama'); //true
palindrome('My age is 0, 0 si ega ym.'); //true
