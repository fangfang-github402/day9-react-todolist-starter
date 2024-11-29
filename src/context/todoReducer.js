export const initialState = [
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        case 'DONE':
            return [...state.map(todo => {
                return todo.id === action.payload ? {id: todo.id, text: todo.text, done: !todo.done} : todo;
            })]
        case 'DELETE':
            return [...state.filter(todo => {
                return todo.id !== action.payload;
            })]
        case 'INIT':
            return action.payload;
        default:
            return state;
    }
};