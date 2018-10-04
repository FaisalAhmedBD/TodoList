import React from 'react';
export default ({ task, index }) => {
    let customStyle = {};
    if (task.status === 2)
        customStyle = styles.finishedTaskStyle;
    else if (task.status === 1)
        customStyle = styles.unfisnishedTaskStyle

    return <div style={customStyle}>{`${index}  .  ${task.task}`}</div>
}
const styles = {
    finishedTaskStyle: {
        backgroundColor: '#00CEE9',
        color: '#ffffff',
        fontSize: '16px',
        height: '55px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '15px',
        textDecoration: 'line-through'
    },
    unfisnishedTaskStyle: {
        fontSize: '16px',
        height: '55px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '15px'
    }
}