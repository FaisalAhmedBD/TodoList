var mongoose = require('mongoose');
var tasksSchema = new mongoose.Schema({
    id: Number,
    task: String
})
module.exports = {
    mongoose,
    tasksSchema
}