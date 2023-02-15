import logo from "../images/logo.svg";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn, onSingOut, isUserEmail }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Логотип" className="header__logo" />
        {location.pathname === "/sign-in" && (
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
        )}
        {location.pathname === "/sign-up" && (
          <Link to="/sign-in" className="header__link">
            Войти
          </Link>
        )}
        {loggedIn && (
          <nav className="header__nav">
            <span className="header__adress">{isUserEmail}</span>
            <button className="header__button" onClick={onSingOut}>
              Выйти
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
