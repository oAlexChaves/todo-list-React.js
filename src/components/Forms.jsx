import { Button, Paper, TextField } from "@mui/material";
import React, {useState} from "react";

function Forms({addTodo}){
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);
    
    const todoCreate = (text) => {
        const todoObj = {text: text, id: id};
        setId(id + 1);
        addTodo(todoObj);
    }

    return(
        <Paper style={{ padding: "1em"}}>
            <div style={ {display:"flex", justifyContent: "center"}}>
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e) => setText(e.target.value)} fullWidth />
                <Button variant="text" onClick={() => todoCreate(text)}>ADD</Button>
            </div>
        </Paper>
    )
}

export default Forms