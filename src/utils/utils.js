export const addLoading = (button) => {
  button.textContent = "Сохранение";
  button.classList.add("popup__button-save_loading");
};

export const removeLoading = (button) => {
  button.classList.remove("popup__button-save_loading");
  button.textContent = "Сохранить";
};
