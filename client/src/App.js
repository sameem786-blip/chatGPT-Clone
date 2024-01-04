import "./App.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("gptcloneuser")) || null
  );

  return (
    <div className="App">
      {console.log(currentUser)}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Dashboard /> : <LoginPage />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
