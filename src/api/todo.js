import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c7c868020296630aabd.mockapi.io/todo",
    // timeout: 10000
});

export const getTodoList = async () => {
    const response = await instance.get("/todoItem");
    return response.data;
}
