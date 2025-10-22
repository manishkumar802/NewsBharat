import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false, // initial theme
    };
  }

  // Toggle function
  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
    // Optional: apply dark mode to body
    document.body.style.backgroundColor = this.state.darkMode ? "#ffffff" : "#121212";
    document.body.style.color = this.state.darkMode ? "#000" : "#fff";
  };

  render() {
    const { darkMode } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold" to="/">
            News Bharat
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Top Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/sports"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/business"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>

            {/* Dark Mode Switch */}
            <div className="form-check form-switch text-nowrap">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                onChange={this.toggleDarkMode}
                checked={darkMode}
              />
              <label
                className={`form-check-label ${
                  darkMode ? "text-white" : "text-dark"
                }`}
                htmlFor="darkModeSwitch"
              >
                {darkMode ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
