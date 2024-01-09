const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    userName:{
       type: String,
        required:true
    },
    password:{
       type: String,
        required:true
    },

})

const Login = mongoose.model("login",LoginSchema);
module.exports = Login