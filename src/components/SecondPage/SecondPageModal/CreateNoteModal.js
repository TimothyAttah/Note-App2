import React from "react";
import SecondModal from "./SecondModal";
import SecondPage from "../SecondPage";
import Backdrop from "../../Backdrop/Backdrop";
import "./modal.css";
import history from "../../../history";

  const editCloseBtn = () => {
    return (
      <div className="edit-header">
        <p className="edit">Write a note</p>
        <p className="edit-close-btn">X</p>
      </div>
    );
  };

  const title = () => {
    return (
      <div className="title-box">
        <label>
          <h5>Title</h5>
        </label>
        <input placeholder="Note title" />
      </div>
    );
  };

  const tag = () => {
    return (
      <div className="tag">
        <label>
          <h5>Tag</h5>
        </label>
        <input placeholder="Note tag" />
      </div>
    );
  };

  const note = () => {
    return (
      <div>
        <label>
          <h5>Note</h5>
        </label>
        <textarea className="note-box">Note body</textarea>
      </div>
    );
  };

  const editBtn = () => {
    return (
      <div className="edit-btn-box">
        <div>
          <button
            className="create-btn"
            onClick={() => history.push("/dash/note")}>
            Create
          </button>
        </div>
      </div>
    );
  };

const CreateNoteModal = () => {
    return (
      <div>
        <SecondPage />
        <Backdrop onClick={() => history.push("/dash/note")} />
        <div className="create-modal">
          <SecondModal
            editCloseBtn={ editCloseBtn() }
            title={ title() }
            tag={ tag() }
            note={ note() }
            editBtn={ editBtn() }
          />
        </div>
      </div>
    );
  }

export default CreateNoteModal;
