import React from "react";

const OauthBtn = (props) => {
  return (
    <div>
      <button className="oauth-btn" onClick={props.onClick}>
        <img src={props.icon} alt="Icon" className="oauth-icon" />
        {`Continue with ${props.OAuthProvider}`}
      </button>
    </div>
  );
};

export default OauthBtn;
