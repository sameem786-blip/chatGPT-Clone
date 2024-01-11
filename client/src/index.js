import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="569492616828-krv1lvkuqcqs2l562579v6094a5ri4sp.apps.googleusercontent.co">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
