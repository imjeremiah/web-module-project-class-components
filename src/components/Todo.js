import React from "react";

const Todo = props => {

    const handleClick = () => {
        props.toggleTodo(props.todo.id);
    }
    return (
        <ul onClick={handleClick} className={`todo${props.todo.completed ? ' completed' : ''}`}>
            <li style={{fontFamily: "sans-serif"}}>{props.todo.task}</li>
        </ul>
    );
}

export default Todo;