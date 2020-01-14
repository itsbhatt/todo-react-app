import React from 'react';

export class AddTodo extends React.Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo..."
                    style={inputStyle}
                    autoComplete='off'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    style={btnStyle}
                />
            </form>
        )
    }
}

const inputStyle = {
    width: 'calc(100% - 100px)',
    padding: '5px 10px',
    fontSize: '15px',
    border: 'none'
}

const btnStyle = {
    width: '100px',
    padding: '5px 10px',
    fontSize: '15px',
    background: '#888',
    color: '#fff',
    border: 'none',
    height: '100%'
}

export default AddTodo;