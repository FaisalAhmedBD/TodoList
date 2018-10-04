var { tasksModel } = require('./model');

const getTaskList = (req, res) => {
    return tasksModel
        .find({})
        .then(taskList => {
            res.send({
                tasks: taskList
            })
        })
        .catch(error => {
            console.error(error);
            res.send(`error while retriving tasks, error : ${error}`);
        })
}

const addNewTask = (req, res) => {
    console.log('req body : ', req.body);
    const { id, task } = req.body;
    const newTask = new tasksModel({
        id,
        task
    });
    newTask.save(error => {
        if (error) {
            console.error(error);
            res.send('failed to save new task in database')
        }
        res.send('New task successfully added');
    })
}
module.exports = {
    addNewTask,
    getTaskList
}