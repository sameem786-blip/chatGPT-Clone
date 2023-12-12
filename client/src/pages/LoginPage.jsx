import React, { useState, useEffect } from "react";
import "./login.css";
import Logo from "../public/logo.PNG";
import openai from "../public/openai.png"
import  typewriterText  from "../JSON/typeWriterText.json";

const LoginPage = () => {
  const [index, setIndex] = useState(0);
  const [heading, setHeading] = useState("");
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const currentHeading = typewriterText[index].heading;
    setHeading(currentHeading);
    const sentences = typewriterText[index].description;
    const timer = setTimeout(() => {
      setDescription(sentences[descriptionIndex]);
      setDescriptionIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      if (descriptionIndex === sentences.length - 1) {
        setIndex((prevIndex) => (prevIndex + 1) % typewriterText.length);
      }
    }, 2000); // Change text every 2 seconds

    return () => clearTimeout(timer);
  }, [index, descriptionIndex]);

  return (
    <div className="container">
      <div className="left">
        <div className="innerContainer">
          <div className="heading">
            <p className="gptText">ChatGPT</p>
            <div className="gptTextCircle"></div>
          </div>
          <div className="typewriter">
            <p className="typewriterHeading">{heading}</p>
            <p className="typewriterDescription">{description}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightInnerContainer">
          <div className="header">
            <p>Get started</p>
            <div className="btnGroup">
              <button className="btn">Log in</button>
              <button className="btn">Sign up</button>
            </div>
          </div>
          <div className="footer">
            <img src={openai} alt="" className="openailogo" />
            <div className="termnpolicy">
              <p className="footerLink">Terms of use</p>
              <hr></hr>
              <p className="footerLink">Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
