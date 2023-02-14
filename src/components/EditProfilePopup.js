import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit_profile-info"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          name="name"
          id="name-input"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={40}
          className="popup__input popup__input_data_name"
          type="text"
          value={name || ""}
          onChange={handleChangeName}
        />
        <span className="popup__input-error name-input-error" />
      </label>
      <label className="popup__form-field">
        <input
          name="profession"
          id="profession-input"
          placeholder="Профессия"
          required
          minLength={2}
          maxLength={200}
          className="popup__input popup__input_data_profession"
          type="text"
          value={description || ""}
          onChange={handleChangeDescription}
        />
        <span className="popup__input-error profession-input-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
