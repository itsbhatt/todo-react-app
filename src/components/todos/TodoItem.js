import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
    getStyle = () => ({
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        textDecoration : this.props.todo.completed ? 'line-through' : 'none'
    });

    render() {
        const { id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed}/>
                    {title }
                    <button style={btnStyle} onClick={this.props.detTodo.bind(this, id)}>x</button>
                </p>
            </div>
        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;