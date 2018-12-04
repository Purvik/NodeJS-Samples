const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//seperate sub result schema
var subResultSchema = new Schema({
    subName: {type: String},
    obtainedMarks: {type: Number},
    totalMarks: {type: Number, default: 70 }
});

module.exports = mongoose.model('SubMarks', subResultSchema);