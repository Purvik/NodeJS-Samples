const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema for Faculty Entity
const facultySchema = new Schema({
    name: String,
    sublist: Array,
    isActive: Boolean
})

//Export Schema through Model to use in app
module.exports = mongoose.model('Faculty', facultySchema);
