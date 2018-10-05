import React from 'react';
export default ({ finishedTask, totalTask, totalTaskNumberStyle, finishedTaskNumberStyle }) => {
    return (
        <div>
            <p><span style={totalTaskNumberStyle}>{totalTask}</span>Total Tasks<span style={finishedTaskNumberStyle}>{finishedTask}</span>Finished Tasks</p>
        </div>
    )
}