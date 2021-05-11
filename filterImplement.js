function filterImplement(arr) {
  let newArr = [];
  arr.forEach((elem) => {
    if (elem) {
      newArr.push(elem);
    }
  });
  return newArr;
}

console.log(filterImplement([null, true, {}, { name: "Elon" }, "", NaN, 0]));
