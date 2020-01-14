import React from 'react';
import Header from './components/layouts/Header';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
import uuid from 'uuid';

import './App.css';

class App extends React.Component {
  state = {
    todos : [
      {
        id: uuid.v4(),
        title: 'Take out something',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Do something',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Have lunch',
        completed: false
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

  addTodo = e => {
    const newTodo = {
      id: uuid.v4(),
      title: e,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
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
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos}  markComplete={this.markComplete} detTodo={this.detTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
