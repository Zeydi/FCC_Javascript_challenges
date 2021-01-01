// An array A consisting of N integers is given.
//Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place.
//For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]
//(elements are shifted right by one index and 6 is moved to the first place).
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

// For example, given
//     A = [3, 8, 9, 7, 6]
//     K = 3
//Three rotations were made:
//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

const solution = (A, K) => {
  if (K == 0 || A.length == 0) {
    return A;
  } else {
    for (let i = 0; i < K; i++) {
      let last = A[A.length - 1];
      A.pop();
      A.unshift(last);
    }
    return A;
  }
};

console.log(solution([1, 2, 3, 4], 3));
console.log(solution([3, 8, 9, 7, 6], 3));
