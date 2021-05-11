function sumOfOver18(arr) {
  return arr.reduce((acc, value) => {
    if (value >= 18) {
      return acc + value;
    } else {
      return acc;
    }
  }, 0);
}
console.log(sumOfOver18([1, 2, 3, 4, 18]));
