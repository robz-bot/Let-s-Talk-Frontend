import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ChatRoom from "./Components/ChatRoom";
import { useState } from "react";
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  const handleLogin = ({ user, token }) => {
    setUser({ ...user, token });
  };

  const handleRegister = ({ user, token }) => {
    setUser({ ...user, token });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <ChatRoom username={user.username} /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
