const express = require('express')
const router = express.Router()
const facultyModel = require('../models/faculty')


router.get('/',(req,res)=>{
    res.send('Faculty Home Page')
});

router.post('/add',(req,res)=>{

    console.log("adding faculty entry with" + req.body);
    newFaculty = new facultyModel(
        /* {
        name: "Tushar",
        sublist: ['DS','TOC','DBMS'],
        isActive: true
        } */
        req.body
    )

    newFaculty.save((error,facultyDTO)=>{
        if (error) {
            res.send({status:false, mesg:'Something Wrong happen',errorCode: 101})
        } else {
            res.send({status:true, mesg:'New Faculty Added to Database',facultyDetails: facultyDTO})
        }
    });

});

module.exports = router;