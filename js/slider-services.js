"use strict";

var servicesSliderButtons = [].slice.call(document.querySelectorAll(".services-slider .slider-button"));
var servicesSlidesElements = [].slice.call(document.querySelectorAll(".services-slide"));


// Добавляет контролам слайдера услуг обработчик события клик, отображающий соответствующий по порядковому номеру слайд
servicesSliderButtons.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
  var currentButton = document.querySelector(".slider-controls .slider-button-active");
  var currentSlide = document.querySelector(".services-slide.slide-active");
    
  var slideNumber = servicesSliderButtons.indexOf(evt.target);
  currentButton.classList.remove("slider-button-active");
  currentSlide.classList.remove("slide-active");

  servicesSliderButtons[slideNumber].classList.add("slider-button-active");
  servicesSlidesElements[slideNumber].classList.add("slide-active");
})});
