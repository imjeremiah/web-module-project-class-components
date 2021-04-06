import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return({
          ...todo,
          completed: !todo.completed
        });
      }else{
        return todo
      }
    });

    this.setState({
      todos: newTodos
    });
  }

  addTodo = (todoTask) => {
    this.setState({
      todos: [...this.state.todos, {
        task: todoTask,
        id: Date.now(),
        completed: false
      }]
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
        <h1 style={{fontFamily: "sans-serif", color: "tomato"}}>Todo App</h1>
        <TodoList clearCompleted={this.clearCompleted} todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
