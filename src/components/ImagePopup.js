import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_open_img ${card.link && "popup_opened"}`}>
      <div className="popup__fullScreen">
        <figure className="popup__image-figure">
          <img className="popup__image" alt={card.name} src={card.link} />
          <figcaption className="popup__image-subtitle">{card.name}</figcaption>
        </figure>
        <button
          type="button"
          className="popup__button-close"
          aria-label="Закрыть фотографию"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
