import React from "react";
import "./termnpolicy.css";

const TermnPolicy = ({ isLoginPage }) => {
  const linkClass = isLoginPage ? "footerLink" : "modal-footerLink";
  return (
    <div className="termnpolicy">
      <p className={linkClass}>Terms of use</p>
      <hr className="footer-line"></hr>
      <p className={linkClass}>Privacy policy</p>
    </div>
  );
};

export default TermnPolicy;
