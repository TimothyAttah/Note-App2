import React from "react";
import ReactDOM from "react-dom";
import history from "../../../history";
import "./modal.css";

const SecondModal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={ props.onDismiss }>
      <div onClick={ (e) => e.stopPropagation() }>
        <div className="modal-second">
          <div>
            <p onClick={ () => history.push("/dash/note") }>{ props.closeBtn }</p>
          </div>
          <div className="modal_content">
            <p>{ props.logo }</p>
            <p className="txt">{ props.details }</p>
          </div>
          { props.btn }
        </div>
      </div>
    </div>,
    document.querySelector("#modal"),
  );
};

export default SecondModal;
