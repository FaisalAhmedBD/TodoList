var express = require('express');
var router = express.Router();
const { getTaskList, addNewTask } = require('../Module/tasks')
router.get('/', getTaskList);
router.post('/add-task', addNewTask);
module.exports = {
    router
}