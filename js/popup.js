"use strict";

var popupElements = document.querySelectorAll(".modal");

// Скрывает модальное окно при клике по кнопке "Закрыть"
var closePopup = function (evt) {
    if (evt.target.classList.contains("modal-close")) {
        var popupElement = evt.target.closest(".modal");
        popupElement.classList.remove("modal-show");
        popupElement.classList.remove("modal-error");
    }
}

// Добавляет всем модальным окнам обработчик события клик, регистрирующий нажатие кнопки "Закрыть"
popupElements.forEach(function (popup) {
    popup.addEventListener("click", closePopup);
});

// Добавляет обработчик события нажатия Esc, закрывающий модальное окно
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      var popupElement = document.querySelector(".modal-show");
      popupElement.classList.remove("modal-show");
      popupElement.classList.remove("modal-error");
  }
});
