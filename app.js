const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

//Required Routes that contain different APIs 
const students = require('./routes/students');
const faculty = require('./routes/faculty')

//Default Location
app.get('/',(req,res) => res.send('Hello Guys'));

//Connect DB
mongoose.connect(config.database, { useNewUrlParser: true });

//Check DB Connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected");
});

//Let app use Body-Parser to parse incoming body packages from request
app.use(bodyParser.json({limit:'100mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'100mb'}))

//Redirect incoming request to desired routes
app.use('/student', students);
app.use('/faculty', faculty)

//Start listening on port 
app.listen(port, () => console.log('App listening at port:', port));

//module.exports = app;