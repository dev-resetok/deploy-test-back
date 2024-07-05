import connect from "./connect/connect.js"
import User from "./schemas/user.js"

// 더미 데이터 넣기용
connect();

const user_inserted = await User.create(
    {
        email : "746aa1357@gmail.com",
        name : "양승민",
        age : 24,
    },
    {
        email : "andy4172@naver.com",
        name : "이주원",
        age : 23,
    }
)

const users = await User.find();
console.log(users);
