import React from "react";

function PopupWithForm({ name, title, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          name={name}
          className="popup__form"
          // noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit"
            className="popup__button popup__button-save"
            // disabled={true}
          >
            Сохранить
          </button>
        </form>
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

export default PopupWithForm;
