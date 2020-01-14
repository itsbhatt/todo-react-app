import React from 'react';
import Header from './components/layouts/Header';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
import About from './components/pages/About';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    todos : []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data
      })
    );
  }
   
  markComplete = e => {
    const newStatetodo = this.state.todos.map(todo => {
      if(todo.id === e) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    this.setState({
      todos: newStatetodo
    })
  }

  addTodo = e => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: e,
      completed: false
    })
      .then(res => {
        res.data.id = uuid.v4()
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      }
      )
    
  }
   
  detTodo = e => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${e}`)
    .then( res => 
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== e)]
      })
    )
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
