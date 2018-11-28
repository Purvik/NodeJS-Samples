const express = require('express')
const router = express.Router()
const studentModel = require('../models/student')

router.get('/',(req,res)=>{
    res.send("Student Home Page");
});

router.post('/addStudent',(req, res)=>{

    console.log("Adding Student Entry with :"+req.body);
    newStudent = new studentModel(
        /* {
        name: req.query.name,
        class: req.query.class
        } */
        req.body
    );
    newStudent.save((error,studentDT)=>{
        if (error) {
            res.send(error);
        } else {
            res.json({status:true, mesg: "Student Details Added", studentDetails:studentDT});
        }
    });
});

module.exports = router;