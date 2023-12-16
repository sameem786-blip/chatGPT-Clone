import React,{ useState, useEffect } from "react";
import "./fullPageModal.css";
import openaispiral from "../../public/openaispiral.png";

import CloseIcon from '@mui/icons-material/Close';
import MicrosoftIcon from '../../public/microsoft.png'; 
import GoogleIcon from '../../public/search.png'; 
import AppleIcon from '../../public/apple.png'; 

const FullpageModal = ({ isOpen, content, onClose }) => {
  const [email, setEmail] = useState("");

  const [modalContent, setModalContent] = useState(content)
  const modalClass = isOpen ? "modal-container open" : "modal-container";

  const changeModal = () => {
    setModalContent(modalContent === "login" ? "signup" : "login"); // Update content state
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value); // Update the email state with the input value
  };

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <div className="authcontent">
          <div className="openai-logo">
            <img src={openaispiral} alt="" className="openaiLogo" />
          </div>
          <div className="authfields">
            {modalContent == "login" ? <p className="welcomeText">Welcome back</p> : <p className="welcomeText">Create your account</p>}
            <input className="inp" id="emailInput" placeholder="" onChange={handleEmailChange}></input>
            <label for="emailInput" className="input-label" >Email address</label>
            <button className="auth-btn">Continue</button>
            {modalContent === "login" ? <p className="signup-text">Don't have an account? <a className="green-text" onClick={changeModal}>Sign up</a></p> : <p className="signup-text">Already have an account? <a className="green-text" onClick={changeModal}>Log in</a></p>}
            <div className="lineorline">
              <hr className="orline-line"></hr>
              <p className="orline-or">OR</p>
              <hr className="orline-line"></hr>
            </div>
            <button className="oauth-btn"><img src={MicrosoftIcon} alt="Icon" className="oauth-icon" />Continue with Microsoft Account</button>
            <button className="oauth-btn"><img src={GoogleIcon} alt="Icon" className="oauth-icon" />Continue with Google</button>
            <button className="oauth-btn"><img src={AppleIcon} alt="Icon" className="oauth-icon" />Continue with Apple</button>
          </div>
          <div className="modalfooter">
            <div className="termnpolicy">
              <p className="modal-footerLink">Terms of use</p>
              <hr className="footer-line"></hr>
              <p className="modal-footerLink">Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullpageModal;
