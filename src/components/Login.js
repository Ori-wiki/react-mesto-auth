import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Login({ handleLogin }) {
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
    if (!userData.email || !userData.password) {
      return;
    }
    handleLogin(userData);
  }
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__label">
          <input
            placeholder="Email"
            className="auth__input"
            name="email"
            type="email"
            value={userData.email || ""}
            onChange={handleChange}
          ></input>
          <span className="popup__input-error" />
        </label>
        <label className="auth__form">
          <input
            placeholder="Пароль"
            className="auth__input"
            name="password"
            type="password"
            value={userData.password || ""}
            onChange={handleChange}
          ></input>
          <span className="popup__input-error" />
        </label>
        <button type="submit" className="auth__button-save">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
