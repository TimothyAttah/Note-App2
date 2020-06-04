import React from "react";
import HomePage from '../HomePage';
import Backdrop from '../../Backdrop/Backdrop';
import Modal from "./Modal";
import { Link } from "react-router-dom";
import history from "../../../history";
import "./Modal.css";

import Google from "../../images/google.3.jpg";
import Eclispse from '../../images/Ellipse 16.png'
import Line from '../../images/Line 20.png'

const LoginModal = () => {
  const closeBtn = () => {
    return (
      <div className="btn" >
        X
      </div>
    );
  }

  const title = () => {
    return (
      <div>
        <img src={ Eclispse } alt="dot" className="modal-ellipse" />
        <div className="modal-sixty">
          3Sixty
        </div>
      </div>
    );
  }

 const welcome =() =>{
    return (
      <div>
        <p>Hello <br /> welcome back</p>
      </div>
    );
  }

  const googleBox = () => {
    return (
      <div className="google-box">
        <div className="box-wrapper">
          <img src={ Google } alt="Google Logo" width="20px" className="img" />
          <p className="google-tag">Sign Up with Google</p>
        </div>
      </div>
    );
  }

  const or = () => {
    return (
      <div className="or">
        <img src={ Line } alt="line" className="line1" />
        <p>OR</p>
        <img src={ Line } alt="line" className="line2" />
      </div>
    );
  }

  const inputBox = () => {
    return (
      <div className="input-box">
        <input type="email" placeholder="Email" id="email-input" />
        <input type="password" placeholder="Password" id="password-input" />
      </div>
    );
  }

  const loginBox = () => {
    return (
      <div>
        <button className="log-box">
          <Link to="/">Sign In</Link>
        </button>
      </div>
    );
  }

  const signUp = () => {
    return (
        <div className="text-center">
          Don't have an account? <Link to="/sign_up">Sign up here</Link>
        </div>
    );
  }

  return (
    <div>
      <HomePage />
      <Backdrop onClick={ () => history.push("/") }/>
      <Modal
        closeBtn={ closeBtn() }
        title={ title() }
        welcome={ welcome() }
        details="Enter your personal details to login in"
        googleBox={ googleBox() }
        or={ or() }
        inputBox={ inputBox() }
        loginBox={ loginBox() }
        signUp={ signUp() }
        onDismiss={ () => history.push("/") }
      />
    </div>
  );
}

export default LoginModal;
