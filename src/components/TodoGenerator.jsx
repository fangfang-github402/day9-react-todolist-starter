import {useContext, useState} from "react";
import {TodoContext} from "../App";
import './TodoGenerator.css';
import {addTodo} from "../api/todo";

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
        <button className={"add-button"} onClick={handleAdd}>add
        </button>
    </div>)
}

export default TodoGenerator;