export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        case 'DELETE':
            return [...state.filter(todo => {
                return todo.id !== action.payload;
            })]
        case 'UPDATE':
            return [...state.map(todo => {
                return todo.id === action.id ? {id: action.id, text: action.newText, done: action.done} : todo;
            })]
        case 'INIT':
            return action.payload;
        default:
            return state;
    }
};