import './TodoItem.css'
const TodoItem =(props) =>{
    return(
        <div className={"todo-item"}>
            {props.todoItem.text}
        </div>
    )
}

export default TodoItem;