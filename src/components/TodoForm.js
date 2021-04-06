import React from "react";

import styled from "styled-components";

const Button = styled.button`
  color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
`;

const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 30%;
	margin-bottom: 0.5em;
`;

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({
            input: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input onChange={this.handleChanges} type="text" name="todo" value={this.state.input}/>
                <Button>Add Todo</Button>
            </form>
        )
    }
}

export default TodoForm;