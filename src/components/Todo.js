import React from "react";

class Todo extends React.Component {

    handleClick = () => {
        this.props.toggleTodo(this.props.todo.id);
    }
    render() {
        return (
            <ul onClick={this.handleClick} className={`todo${this.props.todo.completed ? ' completed' : ''}`}>
                <li>{this.props.todo.task}</li>
            </ul>
        );
    }
}

export default Todo;