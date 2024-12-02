import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/todo",
})


instance.interceptors.request.use(
    (config) => {
        config.metadata = {start: Date.now()}
        console.log("Request:", config);
        return config;
    },
    (error) => {
        console.error("Request:", error);
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        console.log("duration:", Date.now() - response.config.metadata.start);
        console.log(`url:${response.config.url}`)
        console.log("Response:", response);
        return response;
    },
    (error) => {
        if (error.response.status === 404) {
            window.location.href = '/not-found';
        }
        if (error.response.status === 500) {
            window.location.href = '/hard-stop';
        }
        console.error("Request:", error);
        return Promise.reject(error);
    }
)

export default instance;