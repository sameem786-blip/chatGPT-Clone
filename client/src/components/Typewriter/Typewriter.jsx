import { React, useState, useEffect } from "react";
import "./typewriter.css";
import typewriterText from "../../JSON/typeWriterText.json";

const Typewriter = () => {
  const [heading, setHeading] = useState("");
  const [visibleText, setVisibleText] = useState("");
  const [blinker, setBlinker] = useState(true);
  const [index, setIndex] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [description, setDescription] = useState("");

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
    <div className="typewriter">
      <p className="typewriterHeading">{heading}</p>
      <p className="typewriterDescription">
        {visibleText}
        {blinker && "●"}
      </p>
    </div>
  );
};

export default Typewriter;
