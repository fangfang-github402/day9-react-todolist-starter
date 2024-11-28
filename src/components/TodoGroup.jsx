import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    return (
        <div>
            {state.map((todo, index) => {
                return <TodoItem key={todo.id + index} todoItem={todo}/>
            })}
        </div>
    )
}

export default TodoGroup;