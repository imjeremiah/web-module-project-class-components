// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

import styled from "styled-components";

const Button = styled.button`
  color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
`;

const TodoList = props => {

    const handleClick = () => {
        props.clearCompleted();
    }

     return(
         <div>
             {props.todos.map(todo => (
                 <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
             ))}
             <Button onClick={handleClick}>
                 Clear Completed
             </Button>
         </div>
     );
}

export default TodoList;
