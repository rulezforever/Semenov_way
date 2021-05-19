

// -----------------------Tabs--------------------------

window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  let tab = document.querySelectorAll('.about__tab-title');
  let info = document.querySelector('.about__tabs-header');
  let content = document.querySelectorAll('.about__tab-content');

  function hideTabContent(a) {
    for (let i = a; i < content.length; i++) {
    content[i].classList.remove('show');
    content[i].classList.add('visually-hidden');
    tab[i].classList.remove('about__tab-title--active');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if(content[b].classList.contains('visually-hidden')) {
    content[b].classList.remove('visually-hidden');
    content[b].classList.add('show');
    tab[b].classList.add('about__tab-title--active');
    }
  }

  info.addEventListener('click', function(evt) {
  let target = evt.target;
  if (target && target.classList.contains('about__tab-title')) {
    for(let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
  });
});


// ------------Modal Windows---------------------------


const modal = document.querySelector('.modal');
const modalSuccess = document.querySelector('.modal__success');
const questionsButton = document.querySelector('.questions__button');
const modalClose = document.querySelector('.modal__close');
const modalSuccessClose = document.querySelector('.modal__success-close');
const pricesButtons = document.querySelectorAll('.prices__card-button');
const buyButtons = document.querySelectorAll('.about__button');
const buyForm = modal.querySelector(".modal__form");
const questionsForm = document.querySelector('.questions__form');
const phoneInput = modal.querySelector(".modal__form-phone");
const emailInput = modal.querySelector(".modal__form-email");
const questionsPhoneInput = document.querySelector(".questions__form-phone");
const questionsEmailInput = document.querySelector(".questions__form-email");
let button;

const isStorageSupport = true;
const storagePhone = "";
const storageEmail = "";

try {
  storage = localStorage.getItem("Phone");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("Email");
} catch (err) {
  isStorageSupport = false;
}

const clickHandler = (evt) => {
  evt.preventDefault();
  modal.classList.add("modal--show");

  if (storagePhone) {
    phoneInput.value = storagePhone;
    emailInput.focus();
  } else {
    phoneInput.focus();
  }

  if (storageEmail) {
    emailInput.value = storageEmail;
    phoneInput.focus();
  } else {
    phoneInput.focus();
  }
}

const modalCloseHandler =(evt) => {
  evt.preventDefault();
  modal.classList.remove("modal--show");
}

const modalSuccessCloseHandler =(evt) => {
  evt.preventDefault();
  modalSuccess.classList.remove("modal__success--show");
}

for ( let index = 0; index < buyButtons.length; index++) {
  button = buyButtons[index];
  button.addEventListener('click', clickHandler);
}

for ( let index = 0; index < pricesButtons.length; index++) {
  button = pricesButtons[index];
  button.addEventListener('click', clickHandler);
}

modalClose.addEventListener("click", modalCloseHandler);
modalSuccessClose.addEventListener("click", modalSuccessCloseHandler);

buyForm.addEventListener("submit", function (evt) {

  if (!emailInput.value || !phoneInput.value) {
    evt.preventDefault();
    modal.classList.remove('modal--show');
  } else {
    if (isStorageSupport) {
      evt.preventDefault();
      localStorage.setItem("Phone", phoneInput.value);
      localStorage.setItem("Email", emailInput.value);
      modalSuccess.classList.add('modal__success--show');
      modal.classList.remove('modal--show');
    }
  }
});

questionsForm.addEventListener("submit", function (evt) {

  if (!questionsEmailInput.value || !questionsPhoneInput.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      evt.preventDefault();
      localStorage.setItem("Phone", questionsPhoneInput.value);
      localStorage.setItem("Email", questionsEmailInput.value);
      modalSuccess.classList.add('modal__success--show');
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
    }
    if (modalSuccess.classList.contains("modal__success--show")) {
      evt.preventDefault();
      modalSuccess.classList.remove("modal__success--show");
    }
  }
});
