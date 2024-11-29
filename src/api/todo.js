import axios from "axios";
import async from "async";

const instance = axios.create({
    baseURL: "https://67495c7c868020296630aabd.mockapi.io/todo",
    // timeout: 10000
});

export const getTodoList = async () => {
    const response = await instance.get("/todoItem");
    return response.data;
}

export const addTodo = async (newTodoItem) => {
    const response =await instance.post("/todoItem", newTodoItem)
    return response.data
}