import { createContext, useReducer } from "react";

export const TodoReducerContext = createContext();

const initialState = [
    { id: 1, task: 'belajar react', isDone: false },
    { id: 2, task: 'context', isDone: true },
    { id: 3, task: 'reducer', isDone: false },
];

function reducer(state, action) {
    switch (action.type) {
        case "add_todo":
            let newTodo = {
                id: new Date().getTime(),
                task: action.inputTodo,
                isDone: false,
            };
            return [newTodo, ...state];

        case "delete_todo":
            const filterTodos = state.filter((item) => {
                return item.id !== action.id;
            });
            return filterTodos;

        default:
            return state;
    }
}

function TodoReducerProvider({ children }) {

    const [todos, dispatch] = useReducer(reducer, initialState);

    function addTodo(inputTodo) {
        dispatch({
            type: "add_todo",
            inputTodo,
        });
    }

    function deleteTodo(id) {
        dispatch({
            type: "delete_todo",
            id,
        })
    }

    return (
        <TodoReducerContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {children}
        </TodoReducerContext.Provider>
    )
}

export default TodoReducerProvider;