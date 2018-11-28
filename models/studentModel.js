const mongoose = require('mongoose')
const model = mongoose.model()
const studetSchema = require('/schema/student')

var studentModel = new model('Student', studentSchema)