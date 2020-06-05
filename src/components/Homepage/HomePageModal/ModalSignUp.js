import React from "react";
import ReactDOM from "react-dom";
import history from "../../../history";
import "./ModalSignUp.css";

const ModalSignUp = (props) => {
  return ReactDOM.createPortal(
    <div onClick={ props.onDismiss }>
      <div onClick={ (e) => e.stopPropagation() }>
        <div className="modal-sign-up ">
          <div>
            <div onClick={ () => history.push("/") }>{ props.closeBtn }</div>
          </div>
          <div className="content">
            <p className="modal-sixty-2">{ props.title }</p>
            <p className="welcome-2">{ props.welcome }</p>
            <p className="details-2">{ props.details }</p>
            { props.googleBox }
            <p className="or-2">{ props.or }</p>
            { props.inputBox }
            { props.loginBox }
          </div>
          <div className="actions">{ props.signUp }</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default ModalSignUp;
