// A small frog wants to get to the other side of the road.
// The frog is currently located at position X and wants to get to a position greater than or equal to Y.
// The small frog always jumps a fixed distance, D.
// Having three integers X, Y and D, Count the minimal number of jumps that the small frog must perform to reach its target,
// the minimal number of jumps from position X to a position equal to or greater than Y.
// For example, given
//   X = 10
//   Y = 85
//   D = 30
// the function should return 3, because the frog will be positioned as follows:
// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100

const frogJump = (X, Y, D) => {
  let jump = 0;
  while (X < Y) {
    X += D;
    jump += 1;
  }
  return jump;
};

// test performance
let startTime1 = new Date();
console.log(frogJump(3, 999111321, 7));
let endTime1 = new Date();
let runTime1 = endTime1 - startTime1;
console.log('runtime :', runTime1);

// performance 100%
const solution = (X, Y, D) => {
  return Math.ceil((Y - X) / D);
};

// test performance
let startTime2 = new Date();
console.log(solution(3, 999111321, 7));
let endTime2 = new Date();
let runTime2 = endTime2 - startTime2;
console.log('runtime :', runTime2);
