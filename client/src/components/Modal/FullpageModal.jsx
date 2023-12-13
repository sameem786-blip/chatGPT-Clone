import React from "react";
import "./fullPageModal.css";

const FullpageModal = ({ isOpen, onClose, content }) => {
  const modalClass = isOpen ? "modal-container open" : "modal-container";

  return (
    <div className={modalClass}>
      <div className="modalContent"></div>
    </div>
  );
};

export default FullpageModal;
