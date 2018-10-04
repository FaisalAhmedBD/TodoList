import React from 'react';
export default ({ finishedTask, totalTask }) => {
    return (
        <div>
            <p>{`${finishedTask} Finished tasks, ${totalTask} Total tasks`}</p>
        </div>
    )
}