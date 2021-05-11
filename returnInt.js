function returnInt(arr) {
  return arr.map((elem) => {
    if (!Number.isNaN(elem)) {
      return parseInt(elem);
    } else {
      return "null";
    }
  });
}
console.log(returnInt(["1", "28px", "2323"]));
