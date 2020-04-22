import React from "react";
import "../styles/navbar.css";
import mylogo from "../images/myLogo.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-nav  ">
          <a id="link_logo" href="#">
            <img id="img_logo" src={mylogo} alt="logo" /> <br />
            <span className="font-weight-light">✯✯✯Full-Stack </span>
            <span className="font-weight-bold"> Cuba✯✯</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
