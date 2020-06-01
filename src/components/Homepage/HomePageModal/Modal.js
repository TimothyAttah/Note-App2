import React from "react";
import ReactDOM from "react-dom";
import history from "../../../history";
import './Modal.css'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="modal ">
          <div>
            <div onClick={() => history.push("/")}>
              {props.closeBtn}
            </div>
          </div>
          <div className="content">
            <p className="modal-sixty">{props.title}</p>
            <p className="welcome">{props.welcome}</p>
            <p className="details">{props.details}</p>
            {props.googleBox}
            <p className="or">{props.or}</p>
            {props.inputBox}
            {props.loginBox}
          </div>
          <div className="actions">{props.signUp}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
