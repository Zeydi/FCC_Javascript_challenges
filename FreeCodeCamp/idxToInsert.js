function getIndexToIns(arr, num) {
  let idx;
  if (arr.length > 0) {
    const result = arr.sort((a, b) => a - b);
    const closest = result.reduce((a, b) => {
      return Math.abs(b - num) < Math.abs(a - num) ? b : a;
    });
    const clsIdx = result.indexOf(closest);
    if (closest < num) {
      idx = clsIdx + 1;
    } else {
      idx = clsIdx;
    }
  } else idx = 0;
  return idx;
}

let startTime1 = new Date();
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
let endTime1 = new Date();
let runTime1 = endTime1 - startTime1;
console.log('runtime 1:', runTime1);

const solution = (arr, num) => {
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (num > sortedArr[i - 1] && num <= sortedArr[i]) {
      return i;
    }
  }
  if (num > sortedArr[sortedArr.length - 1]) {
    return sortedArr.length;
  }
  return 0;
};

let startTime2 = new Date();
console.log(solution([10, 20, 30, 40, 50], 30));
let endTime2 = new Date();
let runTime2 = endTime2 - startTime2;
console.log('runtime 2:', runTime2);
