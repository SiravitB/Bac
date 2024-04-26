const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel