import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import { addTask } from '../../JS/actions/listTask'



const Add = () => {
    const [text,setText]= useState("")
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault ()
        if (text) {
            dispatch (addTask({id: Math.random(),text , isDone:false}))
            setText ("")
        } else {
            alert ("can not add an empty text !!")
        }
    }


return (
    <div>
        
        <Form onSubmit={handleAdd} >
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>ADD TASK</Form.Label>
    <Form.Control type="text" placeholder="ADD TASK" onChange={(e) => setText (e.target.value)} value ={text}/>
    
    </Form.Group>


    <Button variant="primary" onClick={handleAdd} type="submit">
    ADD
    </Button>
</Form>
    
    </div>
)
}

export default Add