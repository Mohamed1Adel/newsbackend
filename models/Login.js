const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    userName:String,
    password:String

})

const Login = mongoose.model("login",LoginSchema);
module.exports = Login