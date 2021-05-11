function forEachImplement(arr, doFn) {
  for (let i in arr) {
    doFn(arr[i], (index = i));
  }
  return undefined;
}

forEachImplement([1, 2, 3, 4], (elem) => console.log(elem));
