import React from "react";
import logo from "../../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // Header Container
    <div className="footerContainer">
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
      {/* Logo div */}
      <div className="logoDiv">
        <div className="imageDiv">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* Credits div */}
      <div className="creditDiv">
        <p>Brand Loremimpsum by Manoj Kumar</p>
      </div>
    </div>
  );
};

export default Footer;
