import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import './TodoList.css'

const TodoList = () => {
    return (
        <div className={"todo-list"}>
            <div className={"title"}>Todo List</div>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList