var menuToggle = document.querySelector(".header__menu-toggle");
var mainNav = document.querySelector(".header__navigation");
var sideMenu = document.querySelector(".header__side-menu");
var weekProductOrder = document.querySelector(".week-product__order-button");
var modal = document.querySelector(".modal-bg");
var submitModal = document.querySelector(".modal__button");
var cartAdd = document.querySelectorAll(".product__basket");

mainNav.classList.remove(".header-navigation--nojs");
sideMenu.classList.remove(".header__side-menu--nojs");

menuToggle.classList.add("header__menu-toggle--closed");

menuToggle.addEventListener("click", function() {
  if (menuToggle.classList.contains("header__menu-toggle--closed")) {
    menuToggle.classList.remove("header__menu-toggle--closed");
    menuToggle.classList.add("header__menu-toggle--opened");
  } else {
    menuToggle.classList.remove("header__menu-toggle--opened");
    menuToggle.classList.add("header__menu-toggle--closed");
  }
});

if (weekProductOrder) {
  weekProductOrder.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-bg--show");
  });
};

if (cartAdd) {
  for (var i = 0; i < cartAdd.length; i++) {
    cartAdd[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.add("modal-bg--show");
    });
  };
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-bg--show")) {
      evt.preventDefault();
      modal.classList.remove("modal-bg--show");
    }
  }
});
