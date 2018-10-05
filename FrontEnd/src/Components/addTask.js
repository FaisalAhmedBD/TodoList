import React from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import './style.css'
export default ({ url, inputFieldStyle }) => {
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

