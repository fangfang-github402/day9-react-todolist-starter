import {useContext, useState} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";
import {Pagination} from "antd";

const TodoGroup = () => {
    const {state} = useContext(TodoContext);
    const [page,setPage] = useState(1);
    const [size,setSize] = useState(10);
    const showTodo = state.slice((page - 1) * size, page * size);
    const onChange = (page) => {
        setPage(page);
    };
    return (<div style={{alignSelf: "center"}}>
        {state.length === 0 ? <span>Add the things you need to do today...</span> : null}
        {showTodo.map((todo, index) => {
            return <TodoItem key={todo.id + index} todoItem={todo}/>
        })}
        <Pagination defaultCurrent={1} pageSize={size} total={state.length} onChange={onChange} style={{justifyContent:"center",marginTop:"20px"}}/>
    </div>)
}

export default TodoGroup;