import {useContext} from "react";
import {TodoContext} from "../App";

const DoneList=()=>{
    const {state} = useContext(TodoContext);
    const {doneList} = state.filter((todo)=>{return todo.done})
    return(
        <div>
            {doneList.map((todo,index)=>{
                return <p key={todo.id + index} >{todo.text}</p>
            })}
        </div>
    )
}

export default DoneList;