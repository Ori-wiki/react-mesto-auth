import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(userData);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="auth__form">
        <label className="auth__label">
          <input
            name="email"
            placeholder="Email"
            className="auth__input"
            type="email"
            value={userData.email || ""}
            onChange={handleChange}
          ></input>
          <span className="popup__input-error" />
        </label>
        <label className="auth__form">
          <input
            name="password"
            placeholder="Пароль"
            className="auth__input"
            type="password"
            value={userData.password || ""}
            onChange={handleChange}
          ></input>
          <span className="popup__input-error" />
        </label>
        <button type="submit" className="auth__button-save">
          Зарегистрироваться
        </button>
      </form>
      <p className="auth__paragraph">
        Уже зарегистрированы?{" "}
        <Link className="auth__link" to="/sign-in">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
