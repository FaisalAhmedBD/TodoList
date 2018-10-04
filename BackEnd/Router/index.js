var express = require('express');
var router = express.Router();
const { addNewTask } = require('../Module/tasks')
router.get('/', (req, res) => res.send('Hello from Router!'));
router.post('/add-new-task', addNewTask);
module.exports = {
    router
}