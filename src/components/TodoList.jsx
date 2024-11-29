import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import './TodoList.css'
import {getTodoList} from "../api/todo";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext);
    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: 'INIT', payload: todos});
        }).finally(()=>{
        })
    }, []);
    return (
        <div className={"todo-list"}>
            <div className={"title"}>Todo List</div>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList