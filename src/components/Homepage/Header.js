import React from "react";
import { Link } from "react-router-dom";

//import Sixty from '../images/3Sixty.png'
import Eclispse from '../images/Ellipse 16.png'


const Header = () => {
  return (
    <div>
      <header>
        <div>
          <img src={Eclispse} alt="dot" className="ellipse" />
          <div className="sixty">
            <Link to="/">3Sixty</Link>
          </div>
        </div>
        <div className="modal-btn">
          <div id="login">
            {" "}
            <p className="login-btn">
              <Link to="/login">Login </Link>
            </p>
          </div>
          <div id="sign">
            <p className="signUp-btn">
              <Link to="/sign_up">Sign Up</Link>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;