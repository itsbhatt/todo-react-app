import React from 'react';
import Header from './components/layouts/Header';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
import About from './components/pages/About';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
      <Router>
          <div className="App">
            <div className="container">
              <Header/>
              <Route exact path="/" render={ props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos}  markComplete={this.markComplete} detTodo={this.detTodo}/>
                </React.Fragment>
              )}/>
              
              <Route exact path="/about" component={About} />

            </div>
          </div>
      </Router>
    )
  }
}

export default App;
