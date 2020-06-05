import React from "react";
import HomePage from "../HomePage";
import Backdrop from "../../Backdrop/Backdrop";
import Modal from "./ModalSignUp";
import { Link } from "react-router-dom";
import history from "../../../history";
import "./ModalSignUp.css";

import Google from "../../images/google.3.jpg";
import Eclispse from "../../images/Ellipse 16.png";
import Line from "../../images/Line 20.png";


 const closeBtn = () =>  <div className="btn">X</div>

 const title = () => {
   return (
     <div>
       <img src={Eclispse} alt="dot" className="modal-ellipse-2" />
       <div className="modal-sixty-2">3Sixty</div>
     </div>
   );
 };

 const welcome = () => <p> Create <br /> your account</p>

 const googleBox = () => {
   return (
     <div className="google-box-2">
       <div className="box-wrapper-2">
         <img src={Google} alt="Google Logo" width="20px" className="img" />
         <p className="google-tag">Sign Up with Google</p>
       </div>
     </div>
   );
 };

 const or = () => {
   return (
     <div className="or-2">
       <img src={Line} alt="line" className="line3" />
       <p>OR</p>
       <img src={Line} alt="line" className="line4" />
     </div>
   );
 };

 const inputBox = () => {
   return (
     <div className="input-box-modal">
       <input type="text" placeholder="Name" id="name-input-modal" />
       <input type="text" placeholder="Username" id="username-input-modal" />
       <input type="email" placeholder="Email" id="email-input-modal" />
       <input
         type="password"
         placeholder="Password"
         id="password-input-modal"
       />
     </div>
   );
 };

 const loginBox = () => {
   return (
     <div>
       <button className="log-box-2">
         <Link to="/">Sign Up</Link>
       </button>
     </div>
   );
 };

 const signUp = () => {
   return (
     <div className="text-center-2">
       Already have an account? <Link to="/sign_up">Sign in here</Link>
     </div>
   );
 };

const SignUpModal = () => {
  return (
    <div className="sing-up-modal">
      <HomePage />
      <Backdrop onClick={ () => history.push("/") } />
      <Modal
        closeBtn={ closeBtn() }
        title={ title() }
        welcome={ welcome() }
        details="Enter your personal details to start your journey today"
        googleBox={ googleBox() }
        or={ or() }
        inputBox={ inputBox() }
        loginBox={ loginBox() }
        signUp={ signUp() }
        onDismiss={ () => history.push("/") }
      />
    </div>
  );
};

export default SignUpModal;

