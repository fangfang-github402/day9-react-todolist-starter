import {useContext, useState} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";
import {Pagination} from "antd";

const TodoGroup = () => {
    const {state} = useContext(TodoContext);

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5);

    const showTodo = state.slice((page - 1) * size, page * size);
    const onChange = (page) => {
        setPage(page);
    };
    const onShowSizeChange = (current, size) => {
        setPage(1);
        setSize(size);
    };
    return (<div style={{alignSelf: "center"}}>
        {state.length === 0 ? <span>Add the things you need to do today...</span> : null}
        {showTodo.map((todo, index) => {
            return <TodoItem key={todo.id + index} todoItem={todo}/>
        })}
        <Pagination current={page} total={state.length} pageSize={size} onChange={onChange} style={{justifyContent:"center",marginTop:"20px"}} onShowSizeChange={onShowSizeChange}/>    </div>)
}

export default TodoGroup;