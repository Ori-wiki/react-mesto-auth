import React from "react";
import noSuccessIcon from "../images/noSuccessIcon.svg";
import successIcon from "../images/successIcon.svg";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <img
          className="popup__success-icon qwe"
          src={isSuccess ? successIcon : noSuccessIcon}
          alt={isSuccess ? "Регистрация прошла" : "Регистрация не прошла"}
        />
        <h3 className="popup__success-title">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h3>

        <button
          type="button"
          className="popup__button-close"
          aria-label="Закрыть форму"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
