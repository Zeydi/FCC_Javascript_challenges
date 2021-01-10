// An array A consisting of N different integers is given.
// The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.
// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

const missingElet = (A) => {
  let missElt;

  switch (A.length) {
    case 0:
      missElt = 1;
      break;
    case 1:
      if (A[0] == 1) {
        missElt = 2;
      } else missElt = 1;
      break;
    default:
      const arr = A;
      const sortedArr = arr.sort();
      if (sortedArr[0] != 1) {
        missElt = 1;
      } else if (sortedArr[A.length - 1] != A.length + 1) {
        missElt = A.length + 1;
      } else {
        for (let i = 0; i < sortedArr.length; i++) {
          const thisElt = sortedArr[i];
          const nextElt = sortedArr[i + 1];
          if (nextElt - thisElt == 1) {
            continue;
          } else {
            missElt = thisElt + 1;
            break;
          }
        }
      }
  }

  return missElt;
};

let startTime1 = new Date();
console.log(missingElet([]));
let endTime1 = new Date();
let runTime1 = endTime1 - startTime1;
console.log('runtime 1:', runTime1);

// performance 100%

const solution = (A) => {
  let sum = ((A.length + 1) * (A.length + 2)) / 2;
  let sumA = 0;
  for (let i = 0; i < A.length; i++) {
    sumA += A[i];
  }
  return sum - sumA;
};

let startTime2 = new Date();
console.log(solution([]));
let endTime2 = new Date();
let runTime2 = endTime2 - startTime2;
console.log('runtime 2:', runTime2);
