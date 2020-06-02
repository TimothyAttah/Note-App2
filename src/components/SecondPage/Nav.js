import React from 'react';
import { Link } from 'react-router-dom';

import NoteIcon from "../images/note.png";
import Todo from "../images/todo.png";
import Event from "../images/event.png";
import Archive from "../images/archieve.png";
import Setting from "../images/setting.png";
import Plus from '../images/plus.png';


const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="navLinks">
        <ul className="nav-ul">
          <li className="note-icon">
            <img src={ NoteIcon } alt="note-icon2" />
            <p>Notes</p>
            <p className="notes-num-10">10</p>
          </li>
          <li className="hovering">
            <img src={ Todo } alt="Todo" />
            <p>Todos</p>
            <p className="num-10">10</p>
          </li>
          <li className="hovering">
            <img src={ Event } alt="Events" />
            <p>Events</p>
            <p className="num-10">2</p>
          </li>
          <li className="hovering">
            <img src={ Archive } alt="Archive" />
            <p>Archives</p>
            <p className="num-10">10</p>
          </li>
          <li className="hovering">
            <img src={ Setting } alt="setting" />
            <p>Setting</p>
          </li>
        </ul>
      </div>
      <div className="login-signUpPage">
        <ul className="links-tag">
          <li className="loginPage">
            <Link to="#">
              <img src={ Plus } alt="plus logo" />
            </Link>
          </li>
          <li className="sign-upPage">
            <Link to="/create/note" id="note-modal">
              Create Note
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;