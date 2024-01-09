const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    userName:String,
    password:String

})

const Login = mongoose.model("logins",LoginSchema);
module.exports = Login