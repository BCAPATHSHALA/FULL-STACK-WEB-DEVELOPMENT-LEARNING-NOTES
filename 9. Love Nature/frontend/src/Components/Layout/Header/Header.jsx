import React from "react";
import logo from "../../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // Header Container
    <div className="headerContainer">
      {/* Logo div */}
      <div className="logoDiv">
        <div className="imageDiv">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* Navigation link div */}
      <div className="navDiv">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
