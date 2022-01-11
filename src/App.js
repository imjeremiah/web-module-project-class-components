import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo;
      })
    });
  }

  addTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  clearCompleted = e => {
    this.setState({
      todos: this.state.todos.filter(todo => (!todo.completed))
    })
  }

  render() {
    return (
      <div>
        <h1>Todo App: MVP</h1>
        <TodoList clearCompleted={this.clearCompleted} todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
