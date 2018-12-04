const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const examModel = require('../models/exam.model');


//Create Schema for Student Entity
const studentSchema = new Schema({
    eno: Number,
    name: String,
    class: Number,
    exams: [ ]
});

//Export Schema through Model to use in app
module.exports = mongoose.model('Student', studentSchema);