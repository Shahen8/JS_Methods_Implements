function everyImplement(arr, doFunc) {
  for (let elem of arr) {
    if (doFunc(elem)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
//

function isBigEnough(element, index, array) {
  return element >= 10;
}

console.log(everyImplement([20, 12, 32], isBigEnough));
