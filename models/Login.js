const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    userName:{
       type: String
    },
    password:{
       type: String
    },

})

const Login = mongoose.model("logins",LoginSchema);
module.exports = Login