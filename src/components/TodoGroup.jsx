import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const {state} = useContext(TodoContext);
    return (<div style={{alignSelf: "center"}}>
        {state.length === 0 ? <span>Add the things you need to do today...</span> : null}
        {state.map((todo, index) => {
            return <TodoItem key={todo.id + index} todoItem={todo}/>
        })}
    </div>)
}

export default TodoGroup;