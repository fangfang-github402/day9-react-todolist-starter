import axios from "axios";
import instance from "./interceptor";



export const getTodoList = async () => {
    const response = await instance.get("/todoItem");
    console.log(response.data);
    return response.data;
}

export const addTodo = async (newTodoItem) => {
    const response = await instance.post("/todoItem", newTodoItem);
    return response.data;
}

export const deleteTodo = async (id) => {
    const response = await instance.delete("/todoItem/" + id);
    return response.data;
}

export const updateTodo = async (updatedTodoItem) => {
    const response = await instance.put("/todoItem/" + updatedTodoItem.id, updatedTodoItem);
    return response.data;
}

export const getTodoById = async (id) => {
    const response = await instance.get("/todoItem/" + id);
    return response.data;
}