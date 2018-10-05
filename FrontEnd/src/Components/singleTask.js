import React from 'react';
export default ({ task, index,customStyle }) => {
    return <div style={customStyle}>{`${index}  .  ${task.task}`}</div>
}
