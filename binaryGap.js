// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends
// in the binary representation of N.
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
// The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// The number 20 has binary representation 10100 and contains one binary gap of length 1.
// The number 15 has binary representation 1111 and has no binary gaps.
// The number 32 has binary representation 100000 and has no binary gaps.

const binaryGap = (n) => {
  // convert n to a binary value

  let decimalN = n.toString(2);
  let regex = /(?!1)(0+)(?=1)/g;
  let result = decimalN.match(regex);
  let gap;
  if (result) {
    let len = result[0].length;
    for (let i = 0; i < result.length; i++) {
      if (result[i].length > len) {
        len = result[i].length;
      }
    }
    return len;
  }
  return 0;
};

//tests
console.log(binaryGap(9));
console.log(binaryGap(20));
console.log(binaryGap(15));
console.log(binaryGap(32));
