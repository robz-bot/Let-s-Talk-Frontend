// src/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Services/Auth";

const Register = ({ onRegister }) => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { user, token, message } = await register(username, password);
      alert(message)
      onRegister({ user, token });
      history.push("/"); // Redirect to the home page or any other route after successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div class="alert alert-light my-5" role="alert">
          "Let's Talk" is a dynamic and user-friendly communication application
          designed to facilitate seamless and engaging conversations. The
          application is crafted with a focus on providing users with a platform
          that transcends traditional messaging, promoting meaningful and
          interactive discussions.
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <img
              src="https://img.freepik.com/premium-vector/young-couple-friend-chatting-use-black-smartphone-blue-chat-app-messaging-theme-style-flat-vector-illustration-white-background_257455-4288.jpg?size=626&ext=jpg"
              class="img-fluid rounded-top rounded-bottom"
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <h2 className="mb-4">Register</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleRegister} className="w-100">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-sm btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
