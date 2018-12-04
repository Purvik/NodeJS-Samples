const express = require('express');
const router = express.Router();
const submarksModel = require('../models/submarks.model')

    //submarks Route Home API Call
    router.get('/',(req,res)=>{
            res.send('submarks Home Page')
    });

    //Add submarks API Call
    router.post('/add',(req,res)=>{
            newsubmarks = new submarksModel(req.body)
            newsubmarks.save((error,result)=>{
            if (error) {
                res.send({status:false, mesg:'Something Wrong happen',errorCode: 101})
            } else {
                res.send({status:true, mesg:'New submarks Added to Database',submarksDetails: result})
            }
        });
    });

    //Get All submarks API Call
    router.get('/getAll',(req,res)=>{
        submarksModel.find((error,result)=>{
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

    //Update submarks API Call
    router.put('/update',(req,res)=>{
        submarksModel.updateOne(
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
                    res.send({status:true, mesg:'submarks Details Updated.',submarksDetails: result});
            });
    });

    //Delete submarks API Call
    router.delete('/delete',(req,res) => {
        submarksModel.remove(
            {/*condition*/},
            (err, result) => {
                if (result.n == 0) res.json({status:false, msg: 'submarks Details Not Removed.', result: result})
                else res.json({status:true, msg: 'submarks Details Removed.', result: result})
            });
    });


module.exports = router;