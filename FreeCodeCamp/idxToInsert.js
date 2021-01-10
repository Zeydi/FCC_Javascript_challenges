function getIndexToIns(arr, num) {
  let idx;
  if (arr.length > 0) {
    let result = arr.sort((a, b) => a - b);
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

console.log(getIndexToIns([20, 3, 5], 19));
