import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} detTodo={this.props.detTodo}/>
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;