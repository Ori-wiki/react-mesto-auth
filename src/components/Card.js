import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_active"
  }`;
  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <li className="card">
      <div
        className="card__list-img"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        {isOwn && (
          <button
            className="card__delete-button"
            type="button"
            title="Удалить карточку"
            onClick={handleDeleteClick}
          />
        )}
        <div className="card__box">
          <button
            type="button"
            className={cardLikeButtonClassName}
            aria-label="Поставить лайк"
            onClick={handleLikeClick}
          />
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
