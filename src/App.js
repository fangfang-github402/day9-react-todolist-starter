import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList";
import Help from "./components/Help";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (<div className="App">
        <TodoContext.Provider value={{state, dispatch}}>
            <Router>
                <nav>
                    <Link to={"/"}>Home</Link> |
                    <Link to={"/todo-list"}>todo-list</Link> |
                    <Link to={"/done-list"}>done-list</Link>  |
                    <Link to={"/help"}>help</Link>
                </nav>
                <Routes>
                    <Route path={"/"} element={<Navigate to="/todo-list"/>}></Route>
                    <Route path={"/todo-list"} element={<TodoList/>}></Route>
                    <Route path={"/done-list"} element={<DoneList/>}></Route>
                    <Route path={"/help"} element={<Help/>}></Route>
                    <Route path={"*"} element={<NotFound/>}></Route>
                </Routes>
            </Router>
        </TodoContext.Provider>
    </div>);
}

export default App;
