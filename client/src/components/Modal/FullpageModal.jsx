import React,{ useState, useEffect } from "react";
import "./fullPageModal.css";
import openaispiral from "../../public/openaispiral.png";

import CloseIcon from '@mui/icons-material/Close';
import MicrosoftIcon from '../../public/microsoft.png'; 
import GoogleIcon from '../../public/search.png'; 
import AppleIcon from '../../public/apple.png'; 

const FullpageModal = ({ isOpen, content, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState("email");

  const [emailValueExists, setEmailValueExists] = useState(false);
  const [passValueExists, setPassValueExists] = useState(false);

  const [modalContent, setModalContent] = useState(content)
  const modalClass = isOpen ? "modal-container open" : "modal-container";

const changeModal = () => {
  setModalContent((prevContent) => (prevContent === "login" ? "signup" : "login"));
  };

  const handleContinue = () => {
    setStage("password");
  };
  
  useEffect(() => {
  setModalContent(content); // Update modalContent whenever the content prop changes
}, [content]);


  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value); // Update the email state with the input value
    setEmailValueExists(!!event.target.value);
  };
  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value); // Update the email state with the input value
    setPassValueExists(!!event.target.value);
  };

  const handleSignIn = () => {

  }

  const handleSignUp = () => {

  }

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <div className="authcontent">
          <div className="openai-logo">
            <img src={openaispiral} alt="" className="openaiLogo" />
          </div>
          <div className="authfields">
            {modalContent == "login" ? (<p className="welcomeText">Welcome back</p>) : (<p className="welcomeText">Create your account</p>)}
            {stage == "email" ? (
              <>
            <input className="inp" id="emailInput" placeholder="" value={email } onChange={handleEmailChange}></input>
            <label className="input-label" >Email address</label>
            <input className="inp hidden" id="emailInput" placeholder="" value={password} onChange={handlePasswordChange}></input>
            <label className="input-label hidden" >Email address</label>
                <button className="auth-btn" onClick={ handleContinue}>Continue</button>
            {modalContent === "login" ? <p className="signup-text">Don't have an account? <a className="green-text" onClick={changeModal}>Sign up</a></p> : <p className="signup-text">Already have an account? <a className="green-text" onClick={changeModal}>Log in</a></p>}
            <div className="lineorline">
              <hr className="orline-line"></hr>
              <p className="orline-or">OR</p>
              <hr className="orline-line"></hr>
                </div>
                <button className="oauth-btn"><img src={MicrosoftIcon} alt="Icon" className="oauth-icon" />Continue with Microsoft Account</button>
            <button className="oauth-btn"><img src={GoogleIcon} alt="Icon" className="oauth-icon" />Continue with Google</button>
            <button className="oauth-btn"><img src={AppleIcon} alt="Icon" className="oauth-icon" />Continue with Apple</button>
                </>
            ) : (
                <>
                <input className="inp" id="emailInput" placeholder="" value={email } onChange={handleEmailChange} type="email"></input>
                  <label className={`stage-2-email-label ${emailValueExists && stage === "password" ? "hidden" : ""}`} >Email address</label>
                <input className="inp" id="emailInput" placeholder="" value={password} onChange={handlePasswordChange} type="password"></input>
                <label className={`stage-2-password-label ${passValueExists ? "hidden" : ""}`} >Password</label>
                <button className="auth-btn" onClick={handleSignIn}>Continue</button>
                {modalContent === "login" ? <p className="signup-text"><a className="green-text">Forgot Password</a></p> : <p className="signup-text">Already have an account? <a className="green-text" onClick={changeModal}>Log in</a></p>}
                
                  </>
            )}
            
            
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
