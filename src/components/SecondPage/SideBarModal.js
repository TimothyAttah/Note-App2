import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./secondPage.css";

import EditLogo from "../images/edit.png";
import DeleteIcon from "../images/Component 14.svg"
import PrintLogo from "../images/print.png";
import Archive from "../images/archieve2.png";

class SideBarModal extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="modal-container">
          <ul>
            <Link to="/edit/note" id="edit-page" >
              <li className="edit-page">
                <img src={ EditLogo } alt="Edit"  /> Edit
              </li>
            </Link>
            <Link to="/delete/note" id="deleteNote1">
              <li>
                <img src={ DeleteIcon } alt="Delete" className="delete-icon" /> Delete
              </li>
            </Link>
            <Link to="#">
              <li>
                <img src={ PrintLogo } alt="Print"  /> Print
              </li>
            </Link>
            <Link to="#">
              <li>
                <img src={ Archive } alt="Archive" /> 
                Archive
              </li>
            </Link>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBarModal;
