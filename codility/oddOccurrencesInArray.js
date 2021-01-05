// A non-empty array A consisting of N integers is given.
// The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value,
// except for one element that is left unpaired.

// For example, in array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.

//this approach is not much performant with big size array

const solution = (arr) => {
  // write your code in JavaScript (Node.js 8.9.4)
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((item) => item == arr[i]).length < 2) return arr[i];
  }
};
let startTime1 = new Date();
console.log(solution([1, 15, 47, 67, 47, 1, 89, 15, 67]));
let endTime1 = new Date();
let runTime1 = endTime1 - startTime1;
console.log('runtime :', runTime1);

//this approach is much performant with big size array

const newSolution = (A) => {
  const arr = A;
  const sortedArr = arr.sort();

  let oddElement;

  for (let i = 0; i < sortedArr.length; i++) {
    const thisElement = sortedArr[i];
    const elementAhead = sortedArr[i + 1];

    if (thisElement === elementAhead) {
      // if it's the same value skip the next element.
      i++;
    } else {
      oddElement = thisElement;
    }
  }
  return oddElement;
};

let startTime2 = new Date();
console.log(newSolution([1, 15, 47, 67, 47, 1, 89, 15, 67]));
let endTime2 = new Date();
let runTime2 = endTime2 - startTime2;
console.log('runtime :', runTime2);
