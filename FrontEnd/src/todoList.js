import React from 'react';
import axios from 'axios';
import { styles } from './style'
import TaskList from './Components/taskList';
import PageHeader from './Components/pageHeader';
import AddNewTask from './Components/addTask';
import TaskNumberIndicator from './Components/taskNumber'
import { GET_TASK_LIST, ADD_TASK, CHANGE_TASK_STATUS } from './Url';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            finishedTask: 0,
            totalTask: 0
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    render() {
        const { tasks, totalTask, finishedTask } = this.state;
        return (
            <div style={styles.listContainer}>
                <PageHeader
                    pageTitle="Todo List" customStyle={styles.pageHeaderStyle} />
                <TaskNumberIndicator
                    finishedTask={finishedTask}
                    totalTask={totalTask}
                    totalTaskNumberStyle={styles.totalTaskNumberStyle}
                    finishedTaskNumberStyle={styles.finishedTaskNumberStyle} />
                <AddNewTask
                    url={ADD_TASK}
                />
                <TaskList
                    tasks={tasks}
                    changeTaskStatus={this.changeTaskStatus} />
            </div>
        )
    }
    fetchData = () => {
        axios.get(GET_TASK_LIST)
            .then(response => {
                const { tasks, totalTask, finishedTask } = response.data;
                this.setState({
                    tasks: tasks,
                    finishedTask: finishedTask,
                    totalTask: totalTask
                })
            })
    }
    changeTaskStatus = (task, id) => {
        return () => {
            axios({
                method: "post",
                url: CHANGE_TASK_STATUS,
                data: id,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    console.log(response)
                    this.fetchData();
                })
        }
    }
}
export default TodoList;