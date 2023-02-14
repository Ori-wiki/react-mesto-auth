import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(e) {
    setTitle(e.target.value);
  }
  function handleChangeDescription(e) {
    setLink(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name: title,
      link: link,
    });
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="add_card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          name="cardName"
          id="card-name-input"
          placeholder="Название"
          required
          minLength={2}
          maxLength={30}
          className="popup__input popup__input_data_card-name"
          type="text"
          value={title || ""}
          onChange={handleChangeName}
        />
        <span className="popup__input-error card-name-input-error" />
      </label>
      <label className="popup__form-field">
        <input
          name="cardLink"
          id="card-link-input"
          placeholder="Ссылка на картинку"
          required
          maxLength={200}
          className="popup__input popup__input_data_card-link"
          type="url"
          value={link || ""}
          onChange={handleChangeDescription}
        />
        <span className="popup__input-error card-link-input-error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
