import React, { useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";

import LanguageContext from "../../context/languageContext";

import "./Menu.scss";

const Menu = () => {
  const languageContext = useContext(LanguageContext);

  const menuBtn = useRef();
  const menuNav = useRef();
  const menuBranding = useRef();
  const menuList = useRef();

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    menuBtn.current.classList.add("menu__btn_close");
    menuNav.current.classList.add("menu__nav_show");
    menuBranding.current.classList.add("menu__branding_show");
    menuList.current.classList.add("menu__list_show");
    document
      .querySelectorAll(".menu__nav-item")
      .forEach(item => item.classList.add("menu__nav-item_show"));
    setShowMenu(true);
  };

  const closeMenu = () => {
    menuBtn.current.classList.remove("menu__btn_close");
    menuNav.current.classList.remove("menu__nav_show");
    menuBranding.current.classList.remove("menu__branding_show");
    menuList.current.classList.remove("menu__list_show");
    document
      .querySelectorAll(".menu__nav-item")
      .forEach(item => item.classList.remove("menu__nav-item_show"));
    setShowMenu(false);
  };

  const toggleMenu = () => {
    if (!showMenu) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const setRussianLanguage = () => {
    localStorage.setItem("language", "ru");
    languageContext.setLanguage("ru");
  };

  const setEnglishLanguage = () => {
    localStorage.setItem("language", "en");
    languageContext.setLanguage("en");
  };

  return (
    <header className="menu">
      <div className="menu__languages">
        <button
          className="menu__language-btn menu__language-btn_ru"
          title="Русский"
          onClick={setRussianLanguage}
        />
        <button
          className="menu__language-btn menu__language-btn_en"
          title="English"
          onClick={setEnglishLanguage}
        />
      </div>
      <div
        className="menu__btn"
        onClick={toggleMenu}
        ref={menuBtn}
        title={languageContext.language === "ru" ? "Меню" : "Menu"}
      >
        <div className="menu__btn-line" />
        <div className="menu__btn-line" />
        <div className="menu__btn-line" />
      </div>

      <nav className="menu__nav" ref={menuNav}>
        <div className="menu__branding" ref={menuBranding}>
          <div className="menu__portrait">
            <img
              className="menu__portrait-img"
              src={require("../../assets/img/portrait.jpg")}
              alt="portrait"
            />
          </div>
        </div>
        <ul className="menu__list" ref={menuList}>
          <li className="menu__nav-item">
            <NavLink
              to="/"
              exact
              className="menu__nav-link"
              activeClassName="menu__nav-link_active"
              onClick={closeMenu}
            >
              {languageContext.language === "ru" ? "Главная" : "Home"}
            </NavLink>
          </li>
          <li className="menu__nav-item">
            <NavLink
              to="/about"
              className="menu__nav-link"
              activeClassName="menu__nav-link_active"
              onClick={closeMenu}
            >
              {languageContext.language === "ru" ? "Обо мне" : "About me"}
            </NavLink>
          </li>
          <li className="menu__nav-item">
            <NavLink
              to="/work"
              className="menu__nav-link"
              activeClassName="menu__nav-link_active"
              onClick={closeMenu}
            >
              {languageContext.language === "ru" ? "Примеры кода" : "Code examples"}
            </NavLink>
          </li>
          <li className="menu__nav-item">
            <NavLink
              to="/contact"
              className="menu__nav-link"
              activeClassName="menu__nav-link_active"
              onClick={closeMenu}
            >
              {languageContext.language === "ru" ? "Контакты" : "Contact me"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
