import { useContext, useState } from "react";
import { TodoReducerContext } from "../context/TodoProvider";

function TodoList() {
    const [inputTodo, setInputTodo] = useState('');
    const { todos, addTodo, deleteTodo } = useContext(TodoReducerContext);

    const handleAddTodo = () => {
        addTodo(inputTodo);
        setInputTodo('');
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    };

    return (
        <>
            <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default TodoList;