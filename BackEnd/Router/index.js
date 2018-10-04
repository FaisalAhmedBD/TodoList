var express = require('express');
var router = express.Router();
const { getTaskList, addNewTask, changeTaskStatus } = require('../Module/tasks')
router.get('/', getTaskList);
router.post('/add-task', addNewTask);
router.post('/change-status', changeTaskStatus);
module.exports = {
    router
}