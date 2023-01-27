import Forms from '../components/Forms';
import React, {useState} from "react";
import TodoItem from '../components/TodoItem';
import { Container, List } from '@mui/material';


export default function Home() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        document.getElementById("outlined-basic").value=null;
    };
    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    };

    return (
        <div>
            <Container maxWidth="xs" style={{ marginTop: "1em" }}>
                <Forms addTodo={addTodo}/>
                <List sx={{marginTop: "1em" }}>
                    {todos.map((todo) => (
                    <div key={todo.id} style={{marginTop: "1em"}}>
                        <TodoItem todo={todo} deleteTodo={deleteTodo}/>
                    </div>
                    ))}
                </List>
            </Container>
        </div>
    )
}