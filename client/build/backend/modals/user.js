const mongoose = require('mongoose')

// -- Schema -- 
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

// -- Modal --
const userModal = mongoose.model('user',userSchema)
module.exports = userModal