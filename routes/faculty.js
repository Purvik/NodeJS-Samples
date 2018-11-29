const express = require('express')
const router = express.Router()
const facultyModel = require('../models/faculty')

//Default Route Home
router.get('/',(req,res)=>{
    res.send('Faculty Home Page')
});

//Add Faculty API
router.post('/add',(req,res)=>{
    console.log("adding faculty entry with" + req.body);
    
    //create new entity using model by passing Body Params
    newFaculty = new facultyModel(req.body)

    //Perform `save` call
    newFaculty.save((error,facultyDTO)=>{
        if (error) {
            res.send({status:false, mesg:'Something Wrong happen',errorCode: 101})
        } else {
            //respond with status, mesg and stored details if no error
            res.send({status:true, mesg:'New Faculty Added to Database',facultyDetails: facultyDTO})
        }
    });

});

//Get All Stored Faculty API
router.get('/getAll',(req,res)=>{

    //find call on database
    facultyModel.find((error,result)=>{
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });
});

//export router so this routes can be use in app
module.exports = router;