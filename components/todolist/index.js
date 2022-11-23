import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'

const ToDoList = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const handleSubmit = () => {
        setTodo([...todo, input])
    }
    return(
    <>
        <section class="resume-section">
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
            <Button className="mb-3" variant="primary" onClick={() => handleSubmit()}>
            Submit
            </Button><br />
        </Form>
        </section>
        <hr class="m-0" />
    </>
    )
}

function Contoh(x){
    return(x);
}

export default ToDoList
// const x = 5;
// let arraycontoh = [3,2,1,4,2,8,0,5,6];
// arraycontoh.pop(4,2,10)
// console.log(arraycontoh);
