var mongoose = require('mongoose');
var tasksSchema = new mongoose.Schema({
    status: Number,
    task: String
})
module.exports = {
    mongoose,
    tasksSchema
}