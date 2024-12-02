import './TodoItem.css'
import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {Modal} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deleteTodo, updateTodo} from "../api/todo";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newText, setNewText] = useState(props.todoItem.text);
    const handleDone = () => {
        const updatedTodoItem = {id: props.todoItem.id, text: props.todoItem.text, done: !props.todoItem.done};
        updateTodo(updatedTodoItem).then((response)=>{
            dispatch({type: 'UPDATE', id: response.id, newText: response.text, done: response.done})
        })
    };
    const handleDelete = () => {
        deleteTodo(props.todoItem.id).then(dispatch({type: 'DELETE', payload: props.todoItem.id}))
    };
    const handleUpdate = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        const updatedTodoItem = {
            ...props.todoItem,
            text: newText
        };
        updateTodo(updatedTodoItem).then((response)=>{
            dispatch({type: 'UPDATE', id: response.id, newText: response.text, done: response.done})
        })
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const hanleChange = (event) => {
        setNewText(event.target.value);
    };
    return (<div className={"to-do"}>
            <span className={"todo-item"} onClick={handleDone}>
                {props.todoItem.done ? <span className={"done"}>{props.todoItem.text}</span> : props.todoItem.text}
            </span>
        <Modal title="change text" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <textarea value={newText} onChange={hanleChange}/>
        </Modal>
        <button className={"todo-item-button"} onClick={handleUpdate}><EditOutlined/></button>
        <button className={"todo-item-button"} onClick={handleDelete}><DeleteOutlined/></button>
    </div>)
}

export default TodoItem;