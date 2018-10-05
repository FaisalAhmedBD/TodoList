import React from 'react';
import {styles} from '../style'
import SingleTask from './singleTask';
export default ({ tasks }) => {
    return (
        tasks.map((task, index) => {
            return <ul key={task._id} style={styles.listStyle}>
                <SingleTask
                    task={task}
                    index={index} />
            </ul>
        })
    )
}
