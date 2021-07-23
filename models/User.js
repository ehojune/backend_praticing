const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role: {
        type: Number,
        default: 0
    },

    image: String,

    //유효성 관리
    token:{
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//스키마를 모델로 감쌈
const User = mongoose.model('User', userSchema)
//모듈을 다른 파일에서 쓸 수 있게 함
module.exports = { User }