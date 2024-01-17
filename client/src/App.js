import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("gptcloneuser")) || null
  );

  const [currentUserToken, setCurrentUserToken] = useState(
    JSON.parse(localStorage.getItem("gptcloneuserToken")) || null
  );

  const handleLogin = (user, token) => {
    localStorage.setItem("gptcloneuser", JSON.stringify(user));
    setCurrentUser(user);

    localStorage.setItem("gptcloneuserToken", JSON.stringify(token));
    setCurrentUserToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("gptcloneuser");
    setCurrentUser(null);
    localStorage.removeItem("gptcloneuserToken");
    setCurrentUserToken(null);
  };

  useEffect(() => {
    // Simulating an API call with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? (
                <Dashboard
                  token={currentUserToken}
                  user={currentUser}
                  onLogout={handleLogout}
                />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
