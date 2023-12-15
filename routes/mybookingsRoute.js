const express = require('express')
const mybookings = require('../modals/mybookings')
const router = express.Router();

// -- Post API --

router.post('/',async (req,res)=>{
    let data = new mybookings (req.body);
    let result = await data.save()
    console.log(req.body)
    res.send(result)
});

// -- Get API --

router.get('/', async (req,res)=>{
    let data = await mybookings.find()
    // console.log(data)
    res.send(data)

})

module.exports = router