const express = require('express')
const router = express.Router()
const facultyModel = require('../models/faculty.model')

    //Default Route Home
    router.get('/',(req,res)=>{
        res.send('Faculty Home Page')
    });

    //Add Faculty API
    router.post('/add',(req,res)=>{
        //console.log("adding faculty entry with" + req.body);
        
        //create new entity using model by passing Body Params
        newFaculty = new facultyModel(req.body)

        //Perform `save` call
        newFaculty.save((error,result)=>{
            if (error) {
                res.send({status:false, mesg:'Something Wrong happen',errorCode: 101})
            } else {
                //respond with status, mesg and stored details if no error
                res.send({status:true, mesg:'New Faculty Added to Database',facultyDetails: result})
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

    //Get By Faculty Code
    router.get('/getByCode',(req,res) => {
        facultyModel.findOne(
            {code: req.body.code}, (err, result) => {
                if (err) res.status(404).send({status: false, msg: "Not Fount" })
                else res.status(200).send({status: true, msg: "Data Found", facultyDetails: result})
            });
    });

    //Update faculty detail by Faculty Code
    router.put('/update',(req,res)=>{
        facultyModel.updateOne(
            {code:req.body.code},
            {
                $set:{
                    name: req.body.name,
                    isActive: req.body.isActive
                },
                $addToSet:{sublist: {$each : req.body.sublist}                }
            },
            (err, result) => {
                console.log(result);
                if (result == 1)
                    res.send(err)
                else if (result.nModified == 0)
                    res.send({status:false, msg: "Not Modified or Already Exist."})
                else
                    res.send({status:true, mesg:"Faculty Details Updated.",result: result});
            });
    });

    //delete faculty details
    router.delete('/delete',(req,res) => {
        console.log("Enter");
        
        facultyModel.remove(
            {code: req.body.code},
            (err, result) => {
                
                console.log(result);

                if (result.n == 0) res.json({status:false, msg: "Faculty Details Not Removed.", result: result})
                else res.json({status:true, msg: "Faculty Details Removed.", result: result})
            });
    });

//export router so this routes can be use in app
module.exports = router;