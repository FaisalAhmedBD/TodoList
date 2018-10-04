import React from 'react';
import SingleTask from './singleTask';
export default ({ tasks }) => {
    return (
        tasks.map((task, index) => {
            return <ul key={task._id}>
                <SingleTask
                    task={task} 
                    index={index}/>
            </ul>
        })
    )
}