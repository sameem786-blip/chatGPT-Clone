import React, { useState, useEffect } from "react";
import "./login.css";
import Logo from "../../public/logo.PNG";
import openai from "../../public/openai.png";
import typewriterText from "../../JSON/typeWriterText.json";
import Modal from "../../components/Modal/FullpageModal";
import TermnPolicy from "../../components/TermnPolicy/TermnPolicy";
import Typewriter from "../../components/Typewriter/Typewriter";

const LoginPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function getTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  }

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const updateTheme = () => {
      const newTheme = getTheme();
      setTheme(newTheme);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateTheme);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateTheme);
    };
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className={theme === "dark" ? "left-dark" : "left"}>
        <div className="innerContainer">
          <div className="heading">
            <p className="gptText">Chatgpt</p>
            <div className="gptTextCircle"></div>
          </div>
          <Typewriter />
        </div>
      </div>
      <div className={theme === "dark" ? "right-dark" : "right"}>
        <div className="rightInnerContainer">
          <div className="header">
            <p>Get started</p>
            <div className="btnGroup">
              <button className="btn" onClick={() => openModal("login")}>
                Log in
              </button>
              <button className="btn" onClick={() => openModal("signup")}>
                Sign up
              </button>
              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={modalContent}
                onLogin={props.onLogin}
              />
            </div>
          </div>
          <div className="footer">
            <img src={openai} alt="" className="openailogo" />
            <TermnPolicy isLoginPage={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
