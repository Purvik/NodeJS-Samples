const express = require('express');
const router = express.Router();
const examModel = require('../models/exam.model')

    //exam Route Home API Call
    router.get('/',(req,res)=>{
            res.send('exam Home Page')
    });

    //Add exam API Call
    router.post('/add',(req,res)=>{
            newexam = new examModel(req.body)
            newexam.save((error,result)=>{
            if (error) {
                res.send({status:false, mesg:'Something Wrong happen',errorCode: 101})
            } else {
                res.send({status:true, mesg:'New exam Added to Database',examDetails: result})
            }
        });
    });

    //Get All exam API Call
    router.get('/getAll',(req,res)=>{
        examModel.find((error,result)=>{
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

    //Update exam API Call
    router.put('/update',(req,res)=>{
        examModel.updateOne(
            {/* condition */},
            {
                set:{
                },
            },
            (err, result) => {
                if (result == 1)
                    res.send(err)
                else if (result.nModified == 0)
                    res.send({status:false, msg: 'Not Modified or Already Exist.'})
                else
                    res.send({status:true, mesg:'exam Details Updated.',examDetails: result});
            });
    });

    //Delete exam API Call
    router.delete('/delete',(req,res) => {
        examModel.remove(
            {/*condition*/},
            (err, result) => {
                if (result.n == 0) res.json({status:false, msg: 'exam Details Not Removed.', result: result})
                else res.json({status:true, msg: 'exam Details Removed.', result: result})
            });
    });


module.exports = router;