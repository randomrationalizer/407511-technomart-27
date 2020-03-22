"use strict";

var feedbackLink = document.querySelector(".button-feedback-popup");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var formNameElement = feedbackForm.querySelector("[name=name]");
var formEmailElement = feedbackForm.querySelector("[name=email]");
var formTextareaElement = feedbackForm.querySelector("[name=message]");


var isStorageSupports = true;
var storage = "";
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupports = false;
}

// Добавляет ссылке "Напишите нам" обработчик события клик, открывающий модальное окно с формой обратной связи
feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    
    if (storageName) {
      formNameElement.value = storageName;
    } 
    if (storageEmail) {
      formEmailElement.value = storageEmail;
    }
    
    // Устанавливет фокус в незаполненное поле при открытии формы
    if (storageName) {
      if (!storageEmail) {
        formEmailElement.focus();
      } else {
        formTextareaElement.focus();
      }
    } else {
      formNameElement.focus();
    }
});

// Добавляет валидацию формы
feedbackForm.addEventListener("submit", function (evt) {

    if (!formNameElement.value || !formEmailElement.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-error");
    //   feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("modal-error");
    } else {
      if (isStorageSupports) {
        localStorage.setItem("name", formNameElement.value);
        localStorage.setItem("email", formEmailElement.value);
      }
    }
  });
