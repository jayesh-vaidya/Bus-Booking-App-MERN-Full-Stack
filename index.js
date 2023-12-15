const express = require('express')
const mongoose = require('./config')
const cors = require('cors')
require('dotenv').config()
const path = require('path')
const userRoute = require('./routes/userRoute')
const busdetailsRoute = require('./routes/busdetailsRoute')
const mybookingsRoute = require('./routes/mybookingsRoute')





const app = express();
app.use(express.json())
app.use(cors())

// -- User Route File --
app.use('/user',userRoute)

// -- Busdetails Route File --
app.use('/busdetails',busdetailsRoute)

// -- Busdetails Route File --
app.use('/mybookings',mybookingsRoute)



//static files
app.use(express.static(path.join(__dirname, './client/build')))
console.log(__dirname)

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, './client/build/index.html'))

});

app.listen(process.env.port,()=>{
    console.log('Server Started')
})