const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    userName:{
       type: String
    },
    password:{
       type: String
    },

})

const Login = mongoose.model("login",LoginSchema);
module.exports = Login