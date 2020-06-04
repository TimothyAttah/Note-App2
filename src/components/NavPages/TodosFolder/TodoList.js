import React from 'react';
import history from '../../../history'
import Todos from './Todos';
import TodoHeader from './TodoHeader';
import AddTodo from './AddTodo';

import './mytodo.css';

class TodoList extends React.Component {
  state = { 
    todos: [  ]
  }
  
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  handleDelete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id  !== id
    )]
    })
  }

  addTodo = (title) => {
    title.id = Math.random()
    // if (localStorage.getItem("todos") == null) {
    //   let todos = [...this.state.todos, title];
    //   todos.push(title)
    //   localStorage.setItem("todos", JSON.stringify("todos"))
    // } else {
    //   let todos = JSON.parse(localStorage.getItem("todos"))
    //    todos = [...this.state.todos, title];
    //   todos.push(title)
    //   localStorage.setItem("todos", JSON.stringify("todos"))
    // }
    // this.setState({todos: JSON.parse(localStorage.getItem("todos"))})
    let todos = [...this.state.todos, title]
    this.setState({todos})
  }

  componentDidMount () {
    console.log('my component mounted')
    // get todos from localstorage
    // set todos on localstate
  }

  render() { 
    return (
      <div className="todo-container">
        <TodoHeader />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          handleDelete={this.handleDelete}
        />
        <button
          className="cancel-btn"
          onClick={() => history.push("/dash/note")}>
          Home Page
        </button>
      </div>
    );
  }
}
 
export default TodoList;