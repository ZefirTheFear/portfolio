import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = () => {
  return (
    <header className="menu">
      <div className="menu-btn">
        <div className="menu-btn__btn-line" />
        <div className="menu-btn__btn-line" />
        <div className="menu-btn__btn-line" />
      </div>

      <nav className="menu__nav">
        <div className="menu__menu-branding">
          <div className="menu__portrait">img</div>
        </div>
        <ul className="menu__menu-nav">
          <li className="menu__nav-item">
            <Link to="/" className="menu__nav-link">
              Home
            </Link>
          </li>
          <li className="menu__nav-item">
            <Link to="/about" className="menu__nav-link">
              About me
            </Link>
          </li>
          <li className="menu__nav-item">
            <Link to="/work" className="menu__nav-link">
              My work
            </Link>
          </li>
          <li className="menu__nav-item">
            <Link to="/contact" className="menu__nav-link">
              How to reach me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
