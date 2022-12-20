const db = require("./model/db");
const User = db.user;

User.create({
  login: "login1",
  password: "PWD1",
  name: "Adem Cholahaev",
  department_id: 1,
  status: "A",
  comments: "argh kgh gkjd hfzjf lhljf hkdlfg hdghwurgheruig jgh a",
  //   createtime: Date.now(),
  //   updatetime: Date.now(),
})
  .then((result) => {
    consol.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
