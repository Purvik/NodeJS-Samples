const mongoose = require('mongoose')
const schema = mongoose.Schema();
var studentSchema = new schema({
    name : String,
    class : Number
})

module.exports = mongoose.model('Student', studentSchema);