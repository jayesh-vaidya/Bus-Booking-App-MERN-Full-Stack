const express = require('express')
const busdetails = require('../modals/busdetails')
const router = express.Router();

// -- Post API --

router.post('/',async (req,res)=>{
    let data = new busdetails (req.body);
    let result = await data.save()
    console.log(req.body)
    res.send(result)
});

// -- Get API --

router.get('/', async (req,res)=>{
    let data = await busdetails.find()
    // console.log(data)
    res.send(data)

})

router.put("/:id", async (req, res) => {

    let data = await busdetails.updateOne(
      // req.params, // Condition (Incoming - As an Object -- So no curly brackets)
      {_id:req.body._id},
      {
        $set: req.body // Updated Data
      }
    );
  
    res.send(data);
    console.log(req.body)
  
  });

module.exports = router