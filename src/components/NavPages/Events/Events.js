import React from 'react';
import './event.css'

const Events = ({ events, deleteEvent, toggleMenu }) => {
  const eventList = events.length ? (
    events.map(event => {
      return (
        <div key={event.id} className="todo-content" onClick={ () =>{toggleMenu(event.id)}}>
          <span>{event.content} </span>
          <span
            onClick={() => {
              deleteEvent(event.id);
            }}
            className="delete-todo">
            X
          </span>

        </div>
      );
    })
  ): (
    <p className="center">You have no event left!!!</p>
  )
    return(
      <div>
        {eventList}
      </div>
    );
}
 
export default Events;