const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema for Student Entity
const studentSchema = new Schema({
    name: String,
    class: Number
});

//Export Schema through Model to use in app
module.exports = mongoose.model('Student', studentSchema);