const mongoose = require('mongoose')

// -- Schema -- 
const busdetailsSchema = new mongoose.Schema({
    from:String,
    to:String,
    bustype:String,
    traveller:String,
    arrival:String,
    departure:String,
    fare:Number,
    bookedseats:Object,
    passengerdetails:Array
});

// -- Modal --
const busdetailsModal = mongoose.model('busdetail',busdetailsSchema)
module.exports = busdetailsModal