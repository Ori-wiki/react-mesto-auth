import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit_avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          name="avatarLink"
          id="avatar-link-input"
          placeholder="Cсылка на картинку"
          required
          maxLength={200}
          className="popup__input popup__input_data_card-link"
          type="url"
          ref={avatarRef}
        />
        <span className="popup__input-error avatar-link-input-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
