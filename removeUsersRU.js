function removeUsersRU(arr) {
  return arr.filter((elem) => {
    return elem.lang !== "ru";
  });
}

console.log(
  removeUsersRU([
    {
      username: "Yuri Gagarin",
      lang: "ru",
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
    },
  ])
);
