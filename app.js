const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

//Required Routes that contain different APIs 
const student = require('./routes/student.route');
const faculty = require('./routes/faculty.route')
const exam = require('./routes/exam.route')
const submark = require('./routes/submark.route')

//Default Location
app.get('/',(req,res) => res.send('Hello Guys'));

//Connect DB
mongoose.connect(config.database, { useNewUrlParser: true });

//Check DB Connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected To the Database");
});

//Let app use Body-Parser to parse incoming body packages from request
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}))

//Redirect incoming request to desired routes
app.use('/students', student);
app.use('/faculties', faculty)
app.use('/exams', exam)
app.use('/submarks', submark)

//Start listening on port 
app.listen(port, () => console.log('App listening at port:', port));

//module.exports = app;