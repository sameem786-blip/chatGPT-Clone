import React, { useState, useEffect } from "react";
import "./login.css";
import Logo from "../../public/logo.PNG";
import openai from "../../public/openai.png";
import typewriterText from "../../JSON/typeWriterText.json";
import Modal from "../../components/Modal/FullpageModal";
import TermnPolicy from "../../components/TermnPolicy/TermnPolicy";

const LoginPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [index, setIndex] = useState(0);
  const [heading, setHeading] = useState("");
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [description, setDescription] = useState("");
  const [visibleText, setVisibleText] = useState("");
  const [blinker, setBlinker] = useState(true);

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

  useEffect(() => {
    const currentHeading = typewriterText[index].heading;
    setHeading(currentHeading);
    const sentences = typewriterText[index].description;
    const text = sentences[descriptionIndex];
    setDescription(text);

    let charIndex = 0;
    let textTimer = setInterval(() => {
      setVisibleText((prevText) => prevText + text.charAt(charIndex));
      charIndex++;

      if (charIndex >= text.length) {
        // Modify the condition to include equal to
        clearInterval(textTimer);
        setTimeout(() => {
          setBlinker((prevBlinker) => !prevBlinker);
          setTimeout(() => {
            setVisibleText("");
            charIndex = 0;
            setDescriptionIndex(
              (prevIndex) => (prevIndex + 1) % sentences.length
            );
            if (descriptionIndex === sentences.length - 1) {
              setIndex((prevIndex) => (prevIndex + 1) % typewriterText.length);
            }
          }, 1000); // Wait for 1 second before moving to the next description
        }, 1000); // Wait for 1 second after text is fully typed
      }
    }, 100); // Change speed by adjusting the interval (100ms for each character)

    return () => clearInterval(textTimer);
  }, [index, descriptionIndex]);

  return (
    <div className="container">
      <div className={theme === "dark" ? "left-dark" : "left"}>
        <div className="innerContainer">
          <div className="heading">
            <p className="gptText">Chatgpt</p>
            <div className="gptTextCircle"></div>
          </div>
          <div className="typewriter">
            <p className="typewriterHeading">{heading}</p>
            <p className="typewriterDescription">
              {visibleText}
              {blinker && "●"}
            </p>
          </div>
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
