var { mongoose, tasksSchema } = require('./schema');
var tasksModel = mongoose.model('tasks', tasksSchema);
module.exports = {
    tasksModel
}