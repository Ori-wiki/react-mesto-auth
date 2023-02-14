class Auth {
  constructor({ baseUrl }) {
    this._url = baseUrl;
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

  register = (data) => {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then((res) => this._checkResult(res));
  };

  authorize = (data) => {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then((res) => this._checkResult(res));
  };

  getContent = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResult(res));
  };
}

const auth = new Auth({
  baseUrl: "https://auth.nomoreparties.co",
});

export default auth;
