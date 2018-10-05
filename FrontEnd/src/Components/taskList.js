import React from 'react';
import { styles } from '../style'
import SingleTask from './singleTask';
export default ({ tasks }) => {
    let customStyle = {};
    return (
        tasks.map((task, index) => {
            if (task.status === 2)
                customStyle = styles.finishedTaskStyle;
            else if (task.status === 1)
                customStyle = styles.unfisnishedTaskStyle
            return <ul key={task._id} style={styles.listStyle}>
                <SingleTask
                    task={task}
                    index={index + 1}
                    customStyle={customStyle} />
            </ul>
        })
    )
}
