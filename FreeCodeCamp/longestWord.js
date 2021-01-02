//Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
  let strArr = str.split(' ');
  return strArr.reduce(function (elt, nextElt) {
    return elt.length > nextElt.length ? elt : nextElt;
  }).length;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
