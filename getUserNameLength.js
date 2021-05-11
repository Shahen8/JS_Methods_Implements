function getUserNameLength(arr){
    return arr.map((elem) =>{
        return elem.username.length
    })
}

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },]

    console.log(getUserNameLength(users))