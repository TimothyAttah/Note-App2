import React from 'react';
import history from "../../../history";
import DeleteModalBox from './DeleteModalBox';
import SecondPage from '../SecondPage';
import Backdrop from '../../Backdrop/Backdrop';
import './modal.css';

import Warning from "../../images/warning.png";

class DeleteModal extends React.Component{
  render () {
    const closeBtn = () => <div className="close-btn">X</div>
     
    const logo = () => <div className="warning"><img src={ Warning } alt="Warning logo" /></div>

    const btn = () => {
      return (
        <div className="btn-box">
          <div>
            <button
              className="cancel-btn"
              onClick={() => history.push("/dash/note")}>
              Cancel
            </button>
          </div>
          <div>
            <button
              className="delete-btn"
              onClick={() => history.push("/dash/note")}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <SecondPage />
        <Backdrop onClick={ () => history.push("/dash/note") } />
        <div className="modal-second">
          <DeleteModalBox
            closeBtn={ closeBtn() }
            logo={ logo() }
            details="Are you sure you want to delete this note?"
            btn={ btn() }
          />
        </div>
      </div>
    );
  }
}

export default DeleteModal;