const mongoose = require('mongoose')

// -- Schema -- 
const mybookingsSchema = new mongoose.Schema({
    from:String,
    to:String,
    bustype:String,
    traveller:String,
    arrival:String,
    departure:String,
    fare:Number,
    currentseats:Array,
    passengerdetails:Array,
    username:String,
    email:String,
    date:String
});

// -- Modal --
const mybookingsModal = mongoose.model('mybookings',mybookingsSchema)
module.exports = mybookingsModal