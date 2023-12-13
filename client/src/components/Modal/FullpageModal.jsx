import React,{ useState, useEffect } from "react";
import "./fullPageModal.css";
import openaispiral from "../../public/openaispiral.png";

import CloseIcon from '@mui/icons-material/Close';

const FullpageModal = ({ isOpen, content, onClose }) => {
  const modalClass = isOpen ? "modal-container open" : "modal-container";

  const closeModal = () => {
    onClose(); // Call the onClose function from props to close the modal
  };

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <div className="closebtnicon">
          <CloseIcon className="closeicon" onClick={closeModal} />
        </div>
        <div className="authcontent">
          <div className="openai-logo">
            <img src={openaispiral} alt="" className="openaiLogo" />
          </div>
          <div className="authfields">
            <p className="welcomeText">Welcome back</p>
            <input className="inp"></input>
            <button className="auth-btn">Continue</button>
            {content === "login" ? <p className="signup-text">Don't have an account? <a className="green-text">Sign up</a></p> : <p className="signup-text">Already have an account? <a className="green-text">Log in</a></p>}
            <div className="lineorline">
              <hr className="orline-line"></hr>
              <p className="orline-or">OR</p>
              <hr className="orline-line"></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullpageModal;
