const express = require('express')
const router = express.Router()
const studentModel = require('../models/student.model')

//Default Route Home
router.get('/',(req,res)=>{
    res.send("Student Home Page");
});

//Add Student API
router.post('/add',(req, res)=>{
    //console.log("Adding Student Entry with :" + req.body);
    //create new entity using model by passing Body Params
    newStudent = new studentModel(req.body)

    //Perform `save` call
    newStudent.save((error,studentDT)=>{
        if (error) {
            res.send(error);
        } else {
            //respond with status, mesg and stored details if no error
            res.json({status:true, mesg: "Student Details Added", studentDetails:studentDT});
            console.log("Student Details Added.");
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

//Update a Single Student Entry
router.put('/update',(req,res) => {
    
    studentModel.updateOne(
        { eno : req.body.eno},
        {
            $set :{
                name : req.body.name,
                class: req.body.class
            }
        }, 
        (err, result) => {
            if (result == 1) res.status(404).send(err)
            else if (result.nModified == 0)
                res.status(200).send({status:false, msg: "Not Modified or Already Exist."})
            else
            res.status(200).send({status:true, msg: "Student Details Update"})
    
        }
    );

});


    //delete faculty details
    router.delete('/delete',(req,res) => {
        console.log("Enter");
        
        studentModel.remove(
            {eno: req.body.eno},
            (err, result) => {
                
                console.log(result);

                if (result.n == 0) res.json({status:false, msg: "Student Details Not Removed.", result: result})
                else res.json({status:true, msg: "Student Details Removed.", result: result})
            });
    });

//export router so this routes can be use in app
module.exports = router;