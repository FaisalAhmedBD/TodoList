import React from 'react';
export default ({ pageTitle, customStyle }) => {
    return (
        <div style={customStyle}>
            <h1>{pageTitle}</h1>
        </div>
    )
}