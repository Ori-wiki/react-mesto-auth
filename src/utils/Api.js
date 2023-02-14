class Api {
  constructor(data) {
    this._baseUrl = data.serverUrl;
    this._token = data.token;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }

  getCards() {
    return fetch(`${this._baseUrl}cards/`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._checkResult(res));
  }
  postCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._checkResult(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) => {
      this._checkResult(res);
    });
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._checkResult(res));
  }
  setUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._checkResult(res));
  }
  setUserAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._checkResult(res));
  }
  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}cards/${id}/likes`, {
      method: `${isLiked ? "DELETE" : "PUT"}`,
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._checkResult(res));
  }
}
const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-54/",
  token: "e9f215c8-c72b-443d-a34a-34c279d27704",
});

export default api;
