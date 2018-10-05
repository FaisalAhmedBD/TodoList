import React from 'react';
import Axios from 'axios';
import TaskList from './Components/taskList';
import PageHeader from './Components/pageHeader';
import TaskNumberIndicator from './Components/taskNumber'
import { BASE_URL, VERSION, GET_TASK_LIST, ADD_TASK, CHANGE_TASK_STATUS } from './Url';
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
        Axios.get(GET_TASK_LIST)
            .then(response => {
                const { tasks, totalTask, finishedTask } = response.data;
                this.setState({
                    tasks: tasks,
                    finishedTask: finishedTask,
                    totalTask: totalTask
                })
            })
    }
    render() {
        const { tasks, totalTask, finishedTask } = this.state;
        return (
            <div className='col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4' style={{ backgroundColor: 'green' }}>
                <PageHeader
                    pageTitle="Todo List" />
                <TaskNumberIndicator
                    finishedTask={finishedTask}
                    totalTask={totalTask} />
                <TaskList
                    tasks={tasks} />
            </div>
        )
    }
}
export default TodoList;