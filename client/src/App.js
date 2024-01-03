import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <LoginPage />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
