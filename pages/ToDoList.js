import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import Navbar from './Navbar'

const ToDoList = () => {
const [todo, setTodo] = useState([]);
const [input, setInput] = useState("");
    return(
    <>
    <Navbar />
        <section class="resume-section" id="todolist">
        <Form>
            {input}
            <Card 
             style={{ width: '30rem' }}
             className="mb-3">
            <Card.Header >To Do List</Card.Header>
            <Card.Body>
            {todo.map((item, index) => (
                <div class="mb-3">
                <li> {item} </li>
                </div>
            ))}
            </Card.Body>
             <input type="text" onChange={(e) => setInput(e.target.value)}></input>
            </Card>
            <Button className="mb-3" variant="primary" type="submit" onClick={() => setTodo([...todo, input])}>
            Submit
            </Button>
        </Form>
        </section>
        <hr class="m-0" />
    </>
    )
}
export default ToDoList
// const x = 5;
// let arraycontoh = [3,2,1,4,2,8,0,5,6];
// arraycontoh.pop(4,2,10)
// console.log(arraycontoh);
