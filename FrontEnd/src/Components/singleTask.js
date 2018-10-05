import React from 'react';
export default ({ task, index, customStyle, changeTaskStatus }) => {
    return <div style={customStyle} onClick={changeTaskStatus(task.task, task._id)}>{`${index}  .  ${task.task}`}</div>
}
