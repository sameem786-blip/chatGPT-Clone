import React from "react";
import "./login.css";
import Logo from "../public/logo.PNG";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="innerContainer">
          <div className="heading">
            <img className="logo" src={Logo} alt="chatGPT"></img>
          </div>
          <div className="typewriter">
            <p className="typewriterHeading">Heading</p>
            <p className="typewriterDescription">Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightInnerContainer"></div>
      </div>
    </div>
  );
};

export default LoginPage;
