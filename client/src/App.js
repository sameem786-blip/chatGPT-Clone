import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  const cookieCheck = () => {
    const cookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("cookieAuth="));
    return cookie ? true : false;
  };

  const isLoggedIn = cookieCheck();
  return (
    <div className="App">
      {console.log(isLoggedIn)}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Dashboard /> : <LoginPage />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
