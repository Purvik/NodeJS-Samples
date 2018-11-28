const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const students = require('./routes/students');
const faculty = require('./routes/faculty')

app.get('/',(req,res) => res.send('Hello Guys'));

//connect db
mongoose.connect(config.database, { useNewUrlParser: true });
//
//check db connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected");
});

app.use(bodyParser.json({limit:'100mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'100mb'}))

app.use('/student', students);
app.use('/faculty', faculty)
app.listen(port, () => console.log('App listening at port:', port));

//module.exports = app;