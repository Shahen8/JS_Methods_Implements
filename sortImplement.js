function sortImplement(arr, str) {
  if (str === "Asc") {
    return arr.sort((a, b) => {
      return a - b;
    });
  } else if (str === "Desc") {
    return arr.sort((a, b) => {
      return b - a;
    });
  }
}

console.log(sortImplement([4, 6, 7, 1], "Desc"));
