// src/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <>
      <header class="my-2">
        <div class="container">
          <div className="d-flex flex-wrap justify-content-between">
            <h3 class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <i class=" bi bi-chat-heart"></i>
            </h3>
            <div className="d-flex align-items-center justify-content-center">
              <h5 style={{ fontFamily: "Cabin" }}>
                Let's Talk - Gather together
              </h5>
            </div>

            <div class="text-end flex-wrap d-flex align-items-center justify-content-center">
              <Link to="/" class="btn btn-sm btn-light me-2">
                Home
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/" onClick={onLogout}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" class="btn btn-sm btn-info me-2">
                    Login
                  </Link>
                  <Link to="/register " class="btn btn-sm btn-warning">
                    Register
                  </Link>
                </>
              )}
            </div>
            {/* </div> */}
          </div>
        </div>
      </header>
      <hr className="m-0" />
    </>
  );
};

export default Header;
