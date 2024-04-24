import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./layouts/Button";
import { Menu, Search, User, LogIn, X, ShoppingCart } from "react-feather";
import "./style.css/Nav.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <div className="container-fluid">
        {/* Navigation bar */}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand d-md-none d-xs-block py-3" to="/">
              <img src="/Logo.ico" height="40" alt="Company Logo" />
            </Link>
            <Link className="navbar-brand" to="/">
              <span className="dancing-script">Women's Fix</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/trends">
                    Trends
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/formaldress"
                    className="nav-link dropdown-toggle mx-2"
                    id="navbarDropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dresses
                  </Link>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/formaldress">
                        Formal Dresses
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/casualdress">
                        Casual Dresses
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/rompers">
                        Rompers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/jumpsuits">
                        Jumpsuits
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tops">
                        Tops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/pants">
                        Pants
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/skirts">
                        Skirts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/dresses">
                    Shoping
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <Link to="/cartpage">
                <button className="btn btn-dark mx-4" style={{}}>
                  <span className="text-white">
                    <i class="bi bi-cart"></i>
                    <span className="ms-2">Cart</span>
                  </span>
                </button>
              </Link>
              {/* profile */}

              {/* Conditionally render profile image or login button */}
              {isLoggedIn ? (
                <div className="profile" onClick={toggleMenu}>
                  <div className="img-box">
                    <img src="img/usericon.png" alt="some user image" />
                  </div>
                  {/* Dropdown menu for profile */}
                  {menuActive && (
                    <div className="menu active">
                      <ul>
                        <li>
                          <a href="#" onClick={handleLogout}>
                            <i className="ph-bold ph-sign-out"></i>&nbsp;Sign
                            Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn btn-dark w-full md:w-auto">
                    <LogIn width={20} height={20} className="mr-2" />
                    <span className="text-white">Login</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
        <br />
      </div>
    </div>
  );
};

export default Navbar;
