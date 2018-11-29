const mongoose = require('mongoose')
const Schema = mongoose.Schema

const facultySchema = new Schema({
    name: String,
    sublist: Array,
    isActive: Boolean
})
module.exports = mongoose.model('Faculty', facultySchema);
