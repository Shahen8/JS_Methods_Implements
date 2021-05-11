function ownSlice(arr, startIndex, endIndex = arr.length) {
  newArr = [];
  for (let elem in arr) {
    if (elem >= startIndex && elem < endIndex) {
      newArr.push(arr[elem]);
    }
  }
  return newArr;
}

let someArr = ["a", "b", "c", "d", "e", "f"];

console.log(ownSlice(someArr, 1, 4));

console.log(someArr.slice(1, 4));
