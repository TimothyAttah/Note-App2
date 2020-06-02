import React from 'react';
import history from '../../../history'
import Todos from './Todos';
import AddTodo from './AddTodo';
import  './Todo.css';

class MyTodos extends React.Component{
  state = {
    todos: [ ],
    toggleMenu: true
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  toggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  };
  
  render () {
    
    return (
      <div className="todo-container">
        <h1 className="todo-header">Todo's</h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleMenu={this.toggleMenu}
        />
        <AddTodo addTodo={this.addTodo} />
        <div>
          <button
            className="cancel-btn"
            onClick={() => history.push("/dash/note")}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default MyTodos;