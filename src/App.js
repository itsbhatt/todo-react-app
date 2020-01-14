import React from 'react';
import Header from './components/layouts/Header';
import Todos from './components/todos/Todos';

import './App.css';

class App extends React.Component {
  state = {
    todos : [
      {
        id: 1,
        title: 'Take out something',
        completed: false
      },
      {
        id: 2,
        title: 'Do something',
        completed: true
      },
      {
        id: 3,
        title: 'Have lunch',
        completed: true
      }
    ]
  }
   
  markComplete = e => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === e) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
   
  detTodo = e => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== e)]
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos}  markComplete={this.markComplete} detTodo={this.detTodo}/>
      </div>
    )
  }
}

export default App;
