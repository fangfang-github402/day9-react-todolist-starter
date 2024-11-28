import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    return (
        <div>
            <div>Todo List</div>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList