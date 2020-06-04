import React, { Component } from "react";
import SideBarModal from "./SideBarModal";

import DotsIcon from '../images/dots2.png';

class SideBarLinks extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <div>
        <div className="second-section-links">
          <p className="personal"> {this.props.text}</p>
          <div className="personal-left">
            <p className="hours-style">23 Hours ago</p>
            <p className="dots" id="dots" onClick={this.toggleMenu}>
              <img src={DotsIcon} alt="Dots icon" />
            </p>
          </div>
        </div>
        <div>
          <p> {this.state.show && <SideBarModal />}</p>
        </div>
      </div>
    );
  }
}

export default SideBarLinks;
