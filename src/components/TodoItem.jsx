import './TodoItem.css'
import {useContext} from "react";
import {TodoContext} from "../App";
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {deleteTodo} from "../api/todo";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);
    const handleDone = () => {
        dispatch({type: 'DONE', payload: props.todoItem.id})
    };
    const handleDelete = () => {
        deleteTodo(props.todoItem.id).then(dispatch({type: 'DELETE', payload: props.todoItem.id}))
    };
    return (<div className={"to-do"}>
            <span className={"todo-item"} onClick={handleDone}>
                {props.todoItem.done ? <span className={"done"}>{props.todoItem.text}</span> : props.todoItem.text}
            </span>
        <Button color="danger" variant="solid" onClick={handleDelete}><DeleteOutlined/></Button>
    </div>)
}

export default TodoItem;