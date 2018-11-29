const express = require('express')
const router = express.Router()
const studentModel = require('../models/student')

//Default Route Home
router.get('/',(req,res)=>{
    res.send("Student Home Page");
});

//Add Student API
router.post('/addStudent',(req, res)=>{

    console.log("Adding Student Entry with :"+req.body);

    //create new entity using model by passing Body Params
    newStudent = new studentModel(eq.body)

    //Perform `save` call
    newStudent.save((error,studentDT)=>{
        if (error) {
            res.send(error);
        } else {
            //respond with status, mesg and stored details if no error
            res.json({status:true, mesg: "Student Details Added", studentDetails:studentDT});
        }
    });

});

//Get All Stored Faculty API
router.get('/getAll',(req,res)=>{

    //find call on database
    studentModel.find((error,result)=>{
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    });

});

//export router so this routes can be use in app
module.exports = router;