function getUsersName(arr) {
  return arr.map((obj) => {
    return obj.username;
  });
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

console.log(getUsersName(users));
