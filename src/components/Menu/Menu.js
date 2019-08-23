import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import "./Menu.scss";

const Menu = () => {
  const menuBtn = useRef();
  const menuNav = useRef();
  const menuBranding = useRef();
  const menuList = useRef();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (!showMenu) {
      menuBtn.current.classList.add("menu__btn_close");
      menuNav.current.classList.add("menu__nav_show");
      menuBranding.current.classList.add("menu__branding_show");
      menuList.current.classList.add("menu__list_show");
      document
        .querySelectorAll(".menu__nav-item")
        .forEach(item => item.classList.add("menu__nav-item_show"));
      setShowMenu(true);
    } else {
      menuBtn.current.classList.remove("menu__btn_close");
      menuNav.current.classList.remove("menu__nav_show");
      menuBranding.current.classList.remove("menu__branding_show");
      menuList.current.classList.remove("menu__list_show");
      document
        .querySelectorAll(".menu__nav-item")
        .forEach(item => item.classList.remove("menu__nav-item_show"));
      setShowMenu(false);
    }
  };

  return (
    <header className="menu">
      <div className="menu__btn" onClick={toggleMenu} ref={menuBtn}>
        <div className="menu__btn-line" />
        <div className="menu__btn-line" />
        <div className="menu__btn-line" />
      </div>

      <nav className="menu__nav" ref={menuNav}>
        <div className="menu__branding" ref={menuBranding}>
          <div className="menu__portrait" />
        </div>
        <ul className="menu__list" ref={menuList}>
          <li className="menu__nav-item">
            <NavLink
              to="/"
              exact
              className="menu__nav-link"
              activeClassName="menu__nav-link_active"
            >
              Home
            </NavLink>
          </li>
          <li className="menu__nav-item">
            <NavLink to="/about" className="menu__nav-link" activeClassName="menu__nav-link_active">
              About me
            </NavLink>
          </li>
          <li className="menu__nav-item">
            <NavLink to="/work" className="menu__nav-link" activeClassName="menu__nav-link_active">
              My work
            </NavLink>
          </li>
          <li className="menu__nav-item">
            <NavLink
              to="/contact"
              className="menu__nav-link"
              activeClassName="menu__nav-link_active"
            >
              How to reach me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
