import React from 'react';
import './Todo.css'

const Todos = ({ todos, deleteTodo, toggleMenu }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id} className="todo-content" onClick={ () =>{toggleMenu(todo.id)}}>
          <span>{todo.content} </span>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="delete-todo">
            X
          </span>

        </div>
      );
    })
  ): (
    <p className="center">You have no todos left!!!</p>
  )
    return(
      <div>
        {todoList}
      </div>
    );
}
 
export default Todos;