var feedbackButton = document.querySelector(".location__feedback-button");
var feedbackFormOver = document.querySelector(".feedback-form-overlay");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackCloseButton = feedbackForm.querySelector(".feedback-form__close-button");
var userName = feedbackForm.querySelector("[name=username]");
var userMail = feedbackForm.querySelector("[name=useremail]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackFormOver.classList.add("feedback-form-show");
  feedbackForm.classList.add("feedback-form-animation")
  if (storage) {
    userName.value = storage;
    userMail.focus();
  } else {
    userName.focus();
  }
});

feedbackCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackFormOver.classList.remove("feedback-form-show");
  feedbackForm.classList.remove("feedback-form-error");
  userName.classList.remove("feedback-input-error");
  userMail.classList.remove("feedback-input-error");
});

userName.onfocus = function () {
  if (userName.classList.contains("feedback-input-error")) {
    userName.classList.remove("feedback-input-error");
  }
}

userMail.onfocus = function() {
  if (userMail.classList.contains("feedback-input-error")) {
    userMail.classList.remove("feedback-input-error");
  }
}

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value) {
    evt.preventDefault();
    feedbackForm.classList.remove("feedback-form-error");
    feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    feedbackForm.classList.add("feedback-form-error");
  } if (!userName.value) {
    userName.classList.remove("feedback-input-error");
    userName.classList.add("feedback-input-error");
  } if (!userMail.value) {
    userMail.classList.remove("feedback-input-error");
    userMail.classList.add("feedback-input-error");
  }
  else if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackFormOver.classList.contains("feedback-form-show")) {
      evt.preventDefault();
      feedbackFormOver.classList.remove("feedback-form-show");
      feedbackForm.classList.remove("feedback-form-error");
      userName.classList.remove("feedback-input-error");
      userMail.classList.remove("feedback-input-error");
    }
  }
});