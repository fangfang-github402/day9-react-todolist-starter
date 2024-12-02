import {useContext, useState} from "react";
import {TodoContext} from "../App";
import './TodoGenerator.css';
import {addTodo} from "../api/todo";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const TodoGenerator = () => {
    const {dispatch} = useContext(TodoContext);
    const [text, setText] = useState("");


    const handleChange = (event) => {
        setText(event.target.value);
    };


    const handleAdd = () => {
        if (text.trim()) {
            const newTodoItem = {text: text, done: false}
            addTodo(newTodoItem).then(
                (todo) => {
                    dispatch({type: 'ADD', payload: text})
                }
            )
        }
    };
    return (<div>
        <input value={text} maxLength={100} onChange={handleChange}/>
        <Button color="primary" variant="solid" onClick={handleAdd}>
            <PlusOutlined/>
        </Button>
    </div>)
}

export default TodoGenerator;