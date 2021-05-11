function someImplement(arr, doFunc) {
  for (let elem of arr) {
    if (doFunc(elem)) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}
//

function isBigEnough(element, index, array) {
  return element >= 10;
}

console.log(someImplement([2, 5, 6], isBigEnough));
