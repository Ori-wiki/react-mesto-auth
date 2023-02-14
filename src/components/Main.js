import React from "react";

import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onAddPlace,
  onEditAvatar,
  onEditProfile,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const { name, about, avatar } = currentUser;

  // const [cards, setCards] = React.useState([]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <div
            // src={userAvatar}
            alt="Аватар"
            className="profile__avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <button
            onClick={onEditAvatar}
            className="profile__avatar-edit-button"
            aria-label="Загрузить новый аватар"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <button
            onClick={onEditProfile}
            className="profile__info-edit-button"
            type="button"
            aria-label="Редактировать профиль"
          />
          <p className="profile__profession">{about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="Добавить картинку"
        />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
