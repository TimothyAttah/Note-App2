import React from 'react';
import history from '../../../history';
import Backdrop from '../../Backdrop/Backdrop'
import '../Events/event.css';

const Archive = () => {
  return (
    <div>
      <Backdrop onClick={() => history.push("/dash/note")} />
      <div className="archive-box">
        <h1 className="todo-header">Archives</h1>
        <h3 className="sub-title">
          Number of Archives: <span className="zero">0</span>
        </h3>
        <div>
          <button
            className="cancel-btn arch"
            onClick={() => history.push("/dash/note")}>
            Note Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Archive;