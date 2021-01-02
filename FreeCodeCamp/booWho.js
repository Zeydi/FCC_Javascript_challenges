//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

console.log(booWho(null));
console.log(booWho(1));
console.log(booWho(false));
