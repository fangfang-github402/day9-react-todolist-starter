import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (<div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Router>
                    <Routes>
                        <Route path={"/todo-list"} element={<TodoList/>}>
                        </Route>
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>);
}

export default App;
