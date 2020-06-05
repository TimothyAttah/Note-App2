import React from "react";
import { Link } from "react-router-dom";

import NoteIcon from "../../images/note2.svg";
import Todo from "../../images/todo.png";
import Event from "../../images/event22.svg";
import Archive from "../../images/archieve.png";
import Setting from "../../images/setting.png";
import Plus from "../../images/plus.png";

const EventNav = () => {
  return (
    <div className="nav-wrapper">
      <div className="navLinks">
        <ul className="nav-ul">
          <Link to="/dash/note">
            <li className="hovering">
              <img src={ NoteIcon } alt="note-icon2" />
              <p>Notes</p>
              <p className="num-10">10</p>
            </li>
          </Link>

          <Link to="/note/todos">
            <li className="hovering">
              <img src={ Todo } alt="Todo" />
              <p>Todos</p>
              <p className="num-10">10</p>
            </li>
          </Link>

          <Link to="/note/events">
            <li className="note-icon">
              <img src={ Event } alt="Events" className="event-logo" />
              <p>Events</p>
              <p className="notes-num-10">2</p>
            </li>
          </Link>

          <Link to="/note/archive">
            <li className="hovering">
              <img src={ Archive } alt="Archive" />
              <p>Archives</p>
              <p className="num-10">10</p>
            </li>
          </Link>
          <Link to="/note/setting">
            <li className="hovering">
              <img src={ Setting } alt="setting" />
              <p>Setting</p>
            </li>
          </Link>
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
};

export default EventNav;
