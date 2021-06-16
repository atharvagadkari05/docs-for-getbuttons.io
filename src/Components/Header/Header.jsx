import { HashRouter, Link } from "react-router-dom";
import "../../Styles/main.css";
import React from "react";

function Header() {
  return (
    <div className="Header">
      <HashRouter basename="/">
        <span className="logo">
          <Link to="/">
            GetButtons.io
          </Link>
        </span>
        <div className="header-options-container">
          <ul className="header-options-list">
            <li className="header-option">
              <a href="https://github.com/DesignSystemsOSS/getbuttons.io/" target="_blank" rel="noopener noreferrer">
                Contribute
              </a>
              <a href="https://github.com/DesignSystemsOSS/getbuttons.io/issues" target="_blank" rel="noopener noreferrer">
                Open Issues
              </a>
              <a href="https://www.github.com/DesignSystemsOSS" target="_blank" rel="noopener noreferrer">
                  DesignSystemsOSS
                </a>
            </li>
          </ul>
        </div>
      </HashRouter>
    </div>
  )
}

export default Header;