import React from 'react';
import { styles } from '../style'
export default ({ task, index }) => {
    let customStyle = {};
    if (task.status === 2)
        customStyle = styles.finishedTaskStyle;
    else if (task.status === 1)
        customStyle = styles.unfisnishedTaskStyle

    return <div style={customStyle}>{`${index}  .  ${task.task}`}</div>
}
