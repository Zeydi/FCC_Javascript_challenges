function diffArray(arr1, arr2) {
  // cona=cat the two arrays to have one array with all elements
  const allArray = arr1.concat(arr2);
  var newArr = [];
  // check for each element how many times it appear in the array
  for (let i = 0; i < allArray.length; i++) {
    const eltAppear = allArray.filter((elt) => elt == allArray[i]).length;
    if (eltAppear == 1) newArr.push(allArray[i]);
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
