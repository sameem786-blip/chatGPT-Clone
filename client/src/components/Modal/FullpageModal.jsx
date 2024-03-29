import React, { useState, useEffect } from "react";
import "./fullPageModal.css";
import openaispiral from "../../public/openaispiral.png";
import { Link, useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MicrosoftIcon from "../../public/microsoft.png";
import GoogleIcon from "../../public/search.png";
import AppleIcon from "../../public/apple.png";
import Axios from "axios";

// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";

//components
import OauthBtn from "../OauthBtn/OauthBtn";
import TermnPolicy from "../TermnPolicy/TermnPolicy";

const FullpageModal = ({ isOpen, content, onClose, onLogin }) => {
  const axiosInstance = Axios.create({
    withCredentials: true,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState("email");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const [emailValueExists, setEmailValueExists] = useState(false);
  const [passValueExists, setPassValueExists] = useState(false);

  const [modalContent, setModalContent] = useState(content);
  const modalClass = isOpen ? "modal-container open" : "modal-container";

  const changeModal = () => {
    setModalContent((prevContent) =>
      prevContent === "login" ? "signup" : "login"
    );
  };

  const handleContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (isValidEmail) {
      setStage("password");
    } else {
      setIsValid(isValidEmail);
    }
  };

  useEffect(() => {
    setModalContent(content); // Update modalContent whenever the content prop changes
  }, [content]);

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value); // Update the email state with the input value
    setEmailValueExists(!!event.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(event.target.value);

    setIsValid(isValidEmail);
  };
  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value); // Update the email state with the input value
    setPassValueExists(!!event.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "https://chatgpt-clone-project.onrender.com/auth/user/login",
        {
          email: email,
          password: password,
        }
      );

      // Handle the response accordingly
      console.log("Login successful", response.data);

      // Reset the email and password fields after successful login
      setEmail("");
      setPassword("");
      setInvalidCredentials(false);

      onLogin(response.data.user, response.data.token);
    } catch (error) {
      setInvalidCredentials(true);
      // Handle errors here
      console.error("Login failed :", error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "https://chatgpt-clone-project.onrender.comserver-six.vercel.app/auth/user/signup",
        {
          email: email,
          password: password,
        }
      );

      // Handle the response accordingly
      console.log("Signup successful", response.data);
      setEmail("");
      setPassword("");
      setModalContent("login");
      // Reset the email and password fields after successful login
    } catch (error) {
      setInvalidCredentials(true);
      // Handle errors here
      console.error("signup failed", error.response.status);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const googleCode = codeResponse.code; // Assuming 'code' is the property holding the Google code

        // Make a POST request to your backend with the Google code
        const userResponse = await axiosInstance.post(
          "https://chatgpt-clone-project.onrender.com/auth/user/googleAuth",
          {
            code: googleCode,
          }
        );

        console.log(userResponse);

        onLogin(userResponse.data.user, userResponse.data.token);
        // Handle the user response data from your backend as needed
      } catch (error) {
        console.error("Error exchanging code:", error);
        // Handle the error, if any
      }
    },
    flow: "auth-code",
  });

  const handleGoogleLogin = () => {
    login(); // Trigger the Google login
  };

  // const responseGoogle = async (response) => {
  //   try {
  //     console.log(response);
  //     const { code } = response; // Get the authorization code

  //     // Send the authorization code to your backend
  //     const serverResponse = await axiosInstance.post(
  //       "http://65.0.204.54:4000//auth/user/googleAuth",
  //       {
  //         code, // Assuming 'code' is already defined
  //       },
  //       {
  //         headers: {
  //           Authorization: code, // Send the code in the Authorization header
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // Handle the response here
  //     console.log(serverResponse.data);

  //     // Handle success (if needed)
  //   } catch (error) {
  //     console.log(error);
  //     // Handle error (if needed)
  //   }
  // };

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <div className="authcontent">
          <div className="openai-logo">
            <img src={openaispiral} alt="" className="openaiLogo" />
          </div>
          <div className="authfields">
            {modalContent == "login" ? (
              <p className="welcomeText">Welcome back</p>
            ) : (
              <p className="welcomeText">Create your account</p>
            )}
            {stage == "email" ? (
              <>
                <input
                  className={isValid ? "inp" : "inp invalid"} // Add a different class for invalid input
                  id="emailInput"
                  placeholder=""
                  value={email}
                  onChange={handleEmailChange}
                />
                <label
                  className={isValid ? "input-label" : "input-label invalid"}
                >
                  Email address
                </label>
                <input
                  className="inp hidden"
                  id="emailInput"
                  placeholder=""
                  value={password}
                  onChange={handlePasswordChange}
                ></input>
                <label className="input-label hidden">Email address</label>
                <button className="auth-btn" onClick={handleContinue}>
                  Continue
                </button>
                {modalContent === "login" ? (
                  <p className="signup-text">
                    Don't have an account?{" "}
                    <a className="green-text" onClick={changeModal}>
                      Sign up
                    </a>
                  </p>
                ) : (
                  <p className="signup-text">
                    Already have an account?{" "}
                    <a className="green-text" onClick={changeModal}>
                      Log in
                    </a>
                  </p>
                )}
                <div className="lineorline">
                  <hr className="orline-line"></hr>
                  <p className="orline-or">OR</p>
                  <hr className="orline-line"></hr>
                </div>
                <OauthBtn icon={MicrosoftIcon} OAuthProvider={`Microsoft`} />
                <OauthBtn
                  icon={GoogleIcon}
                  OAuthProvider={`Google`}
                  onClick={handleGoogleLogin}
                />
                <OauthBtn icon={AppleIcon} OAuthProvider={`Apple`} />
              </>
            ) : (
              <>
                <input
                  className="inp"
                  id="emailInput"
                  placeholder=""
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                ></input>
                <label
                  className={`stage-2-email-label ${
                    emailValueExists && stage === "password" ? "hidden" : ""
                  }`}
                >
                  Email address
                </label>
                <input
                  className="inp"
                  id="emailInput"
                  placeholder=""
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                ></input>
                <label
                  className={`stage-2-password-label ${
                    passValueExists ? "hidden" : ""
                  }`}
                >
                  Password
                </label>
                {modalContent === "login" ? (
                  <p
                    className={`${
                      invalidCredentials ? "invalid-text" : "hidden"
                    }`}
                  >
                    Invalid email or password
                  </p>
                ) : (
                  <p
                    className={`${
                      invalidCredentials ? "invalid-text" : "hidden"
                    }`}
                  >
                    Account already exists
                  </p>
                )}
                <button
                  className="auth-btn"
                  onClick={
                    modalContent == "login" ? handleSignIn : handleSignUp
                  }
                >
                  Continue
                </button>
                {modalContent === "login" ? (
                  <p className="signup-text">
                    <a className="green-text">Forgot Password</a>
                  </p>
                ) : (
                  <p className="signup-text">
                    Already have an account?{" "}
                    <a className="green-text" onClick={changeModal}>
                      Log in
                    </a>
                  </p>
                )}
              </>
            )}
          </div>
          <div className="modalfooter">
            <TermnPolicy isLoginPage={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullpageModal;
