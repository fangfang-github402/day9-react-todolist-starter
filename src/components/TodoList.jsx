import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import './TodoList.css'
import {getTodoList} from "../api/todo";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import {Spin} from "antd";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: 'INIT', payload: todos});
        }).finally(() => {
            setLoading(false);
        })
    }, []);
    return (
        <div className={"todo-list"}>
            <div className={"title"}>Todo List</div>
            {loading ? <Spin size="large"/> : null}
            <TodoGenerator/>
            <TodoGroup/>
        </div>
    );
}

export default TodoList