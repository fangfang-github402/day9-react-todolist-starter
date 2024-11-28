import {useContext, useState} from "react";
import {TodoContext} from "../App";
import './TodoGenerator.css';

const TodoGenerator = () => {
    const {dispatch} = useContext(TodoContext);
    const [text, setText] = useState("");


    const handleChange = (event) => {
        setText(event.target.value);
    };


    const handleAdd = () => {
        dispatch({type: 'ADD', payload: text})
    };
    return (<div>
        <input value={text} onChange={handleChange}/>
        <button className={"add-button"} onClick={handleAdd}>add
        </button>
    </div>)
}

export default TodoGenerator;