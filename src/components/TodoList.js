import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
    handleClick = () => {
        this.props.clearCompleted();
    }

    render() {
        return(
            <div>
                {this.props.todos.map(todo => (
                    <Todo toggleTodo={this.props.toggleTodo} key={todo.id} todo={todo} />
                ))}
                <button onClick={this.handleClick}>Clear Completed</button>
            </div>
        );
    }
}

export default TodoList;
