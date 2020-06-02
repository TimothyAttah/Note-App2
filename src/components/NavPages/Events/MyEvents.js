import React from 'react';
import history from '../../../history'
import Todos from './Events';
import AddTodo from './AddEvent';
import  './event.css';

class MyEvents extends React.Component{
  state = {
    events: [ ],
    toggleMenu: true
  }

  deleteEvent = (id) => {
    const events = this.state.events.filter(event => {
      return event.id !== id
    });
    this.setState({
     events
    })
  }

  addEvent = (event) => {
    event.id = Math.random();
    let events = [...this.state.events, event];
    this.setState({
      events
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
        <h1 className="todo-header">My Event's</h1>
        <Todos
          events={this.state.events}
          deleteEvent={this.deleteEvent}
          toggleMenu={this.toggleMenu}
        />
        <AddTodo addEvent={this.addEvent} />
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

export default MyEvents;