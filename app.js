const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/',(req,res) => res.send('Hello Guys'))

mongoose.connect('mongodb://localhost:27017/', (err,res)=> {

    if (err) {
        console.log("Error Connection to MongoDB!");
    } else{
        console.log("Connected Succesfully");
    }

})


app.listen(port, () => console.log('App listening at port ${port}'))