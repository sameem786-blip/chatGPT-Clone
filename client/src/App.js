import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("gptcloneuser")) || null
  );

  const handleLogin = (user) => {
    localStorage.setItem("gptcloneuser", JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("gptcloneuser");
    setCurrentUser(null);
  };

  useEffect(() => {
    // Simulating an API call with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  let content;

  if (loading) {
    content = <Loader />;
  } else if (currentUser) {
    content = <Dashboard user={currentUser} onLogout={handleLogout} />;
  } else {
    content = <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={content} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
