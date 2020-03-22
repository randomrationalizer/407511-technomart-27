"use strict";

var nextSlideButton = document.querySelector(".slider-button-next");
var previousSlideButton = document.querySelector(".slider-button-back");
var slidesElements = [].slice.call(document.querySelectorAll(".promo-slide"));


// Добавляет кнопке следующего слайда обработчик события клик, отображающий следующий слайд
nextSlideButton.addEventListener("click", function (evt) {
    var currentSlide = document.querySelector(".slide-active");
    var currentNumber = slidesElements.indexOf(currentSlide);
    if (currentNumber < slidesElements.length - 1) {
        currentSlide.classList.remove("slide-active");
        currentNumber += 1;
        slidesElements[currentNumber].classList.add("slide-active");
    } else if (currentNumber === slidesElements.length - 1) {
        currentSlide.classList.remove("slide-active");
        currentNumber = 0;
        slidesElements[currentNumber].classList.add("slide-active");
    }
})

// Добавляет кнопке предыдущего слайда обработчик события клик, отображающий предыдущий слайд
previousSlideButton.addEventListener("click", function (evt) {
    var currentSlide = document.querySelector(".slide-active");
    var currentNumber = slidesElements.indexOf(currentSlide);
    if (currentNumber > 0) {
        currentSlide.classList.remove("slide-active");
        currentNumber -= 1;
        slidesElements[currentNumber].classList.add("slide-active");
    } else if (currentNumber === 0) {
        currentSlide.classList.remove("slide-active");
        currentNumber = slidesElements.length - 1;
        slidesElements[currentNumber].classList.add("slide-active");
    }
})
