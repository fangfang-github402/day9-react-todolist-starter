import './TodoItem.css'
import {useContext} from "react";
import {TodoContext} from "../App";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);
    const handleDone = () => {
        dispatch({type: 'DONE', payload: props.todoItem.id})
    };
    return (<div>
            <span className={"todo-item"} onClick={handleDone}>
                {props.todoItem.done
                    ? <span className={"done"}>{props.todoItem.text}</span>
                    : props.todoItem.text}
            </span>
    </div>)
}

export default TodoItem;