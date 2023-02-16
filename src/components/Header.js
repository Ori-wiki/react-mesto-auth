import logo from "../images/logo.svg";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Header({ onSingOut, isUserEmail }) {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Логотип" className="header__logo" />
        <Routes>
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="header__link">
                Войти
              </Link>
            }
          />
          <Route
            path="/"
            element={
              <nav className="header__nav">
                <span className="header__adress">{isUserEmail}</span>
                <button className="header__button" onClick={onSingOut}>
                  Выйти
                </button>
              </nav>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
