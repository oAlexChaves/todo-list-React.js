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

    const editTodo = (id, editedText) =>{
        var todosArray = [...todos];

        for(var i in todosArray){
            if (todosArray[i].id == id){
                todosArray[i].text = editedText;
            }
        }
        todos.splice(id, 1, {text: editedText, id:id})
        setTodos(todos);
    }

    return (
        <div>
            <Container maxWidth="xs" style={{ marginTop: "1em" }}>
                <Forms addTodo={addTodo}/>
                <List sx={{marginTop: "1em" }}>
                    {todos.map((todo) => (
                    <div key={todo.id} style={{marginTop: "1em"}}>
                        <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
                    </div>
                    ))}
                </List>
            </Container>
        </div>
    )
}