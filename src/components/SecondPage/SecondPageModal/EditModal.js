import React from "react";
import history from "../../../history";
import SecondModal from "./SecondModal";
import SecondPage from "../SecondPage";
import Backdrop from "../../Backdrop/Backdrop";
import "./modal.css";



 const editCloseBtn = () => {
   return (
     <div className="edit-header">
       <p className="edit">Edit note</p>
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
       <input placeholder="Learn a new programming language" />
     </div>
   );
 };

 const tag = () => {
   return (
     <div>
       <label>
         <h5>Tag</h5>
       </label>
       <div className="tag-box">
         <p className="edit-personal">
           Personal <span className="close-x">x</span>
         </p>
         <p className="edit-personal">
           Self <span className="close-x">x</span>
         </p>
       </div>
     </div>
   );
 };

 const note = () => {
   return (
     <div>
       <label>
         <h5>Note</h5>
       </label>
       <textarea className="note-box">
         Incididunt et aliquip sint duis esse. Est duis ea dolor eiusmod ut elit
         incididunt irure nisi duis aliquip anim velit. Officia laborum ectetur
         quis ea pariatur proident exercitation. Incididunt et aliquip sint duis
         esse. Est duis ea dolor eiusmod ut elit incididunt irure nisi duis
         aliquip anim velit. Officia laborum consectetur quis ea pariatur
         proident exercitation.
       </textarea>
     </div>
   );
 };

 const editBtn = () => {
   return (
     <div className="edit-btn-box">
       <div>
         <button
           className="edit-edit-btn"
           onClick={() => history.push("/dash/note")}>
           Edit
         </button>
       </div>
       <div>
         <button
           className="edit-cancel-btn"
           onClick={() => history.push("/dash/note")}>
           Cancel
         </button>
       </div>
     </div>
   );
 };

const EditModal = () => { 
    return (
      <div>
        <SecondPage />
        <Backdrop onClick={ () => history.push("/dash/note") } />
        <div className="edit-modal">
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

export default EditModal;
