"use strict";

var cardsElements = document.querySelectorAll(".catalog-item");
var addInCartPopupElement = document.querySelector(".modal-add-in-cart");


// Отображает модальное окно "Товар добавлен в корзину" при клике по кнопке "Купить"
var showAddInCartPopup = function (evt) {
    if (evt.target.classList.contains("in-cart-button")) {
        evt.preventDefault();
        addInCartPopupElement.classList.add("modal-show");
    }
}

// Добавлет карточкам товаров обработчик события клик, регистрирующий нажатие кнопки "Купить"
cardsElements.forEach(function (card) {
    card.addEventListener("click", showAddInCartPopup);
});
