var { tasksModel } = require('./model');

const getTaskList = (req, res) => {
    return tasksModel
        .find({})
        .then(taskList => {
            let counter = 0;
            taskList.forEach(task => {
                if (task.status == 2)
                    counter++
            })
            res.send({
                tasks: taskList,
                totalTask: taskList.length,
                finishedTask: counter
            })
        })
        .catch(error => {
            console.error(error);
            res.send(`error while retriving tasks, error : ${error}`);
        })
}

const addNewTask = (req, res) => {
    console.log('req body : ', req.body);
    const { task } = req.body;
    const newTask = new tasksModel({
        task,
        status: 1
    });
    newTask.save(error => {
        if (error) {
            console.error(error);
            res.send('failed to save new task in database')
        }
        res.redirect('http://localhost:3006');
    })
}
const changeTaskStatus = (req, res) => {
    var arr = Object.keys(req.body).map(key => key);
    console.log('arr : ', arr[0])
    const  taskId  = arr[0];
    const condition = { _id: taskId };
    const update = { status: 2 };
    const options = {
        new: true,
        rawResult: true
    }

    tasksModel
        .findOneAndUpdate(condition, update, options)
        .then(task => {
            console.log('searched task : ', task);
            res.status(200).send();
        }).catch(error =>
            console.error(error))
}
module.exports = {
    addNewTask,
    getTaskList,
    changeTaskStatus
}