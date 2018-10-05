import React from 'react';
import { Form } from 'reactstrap';
import './style.css'
export default ({ url }) => {
    return (
        <Form action={url} method="post" >
            <input
                className="addTask"
                type="text"
                placeholder='Add a task...'
                name='task'
            />  
        </Form>
    )
}

