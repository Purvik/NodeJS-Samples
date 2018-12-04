const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subMarks = require('../models/submarks.model')


//seperate exam schema,
const examSchema = new Schema({
    examTitle: String,
    examDate: Date,
    subMarks: []
});

module.exports = mongoose.model('Exam', examSchema);