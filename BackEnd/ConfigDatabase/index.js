var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist');
var database = mongoose.connection;
database.on('error', console.error.bind(console, 'failed to connect database'));
database.once('open', () => {
    console.log('successfully connected to mongodb');
})
module.exports = {
    database
}