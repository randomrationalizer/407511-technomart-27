"use strict";

var mapPopupLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");


// Добавляет ссылке карты обработчик события клик, открывающий модальное окно с картой
mapPopupLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
