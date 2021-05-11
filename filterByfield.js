function filterByField(arr, field) {
  return arr.filter((elem) => {
    return !!elem[field];
  });
}

console.log(filterByField(users, "isAstronaut"));
