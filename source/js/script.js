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



// const buyButton = document.querySelector('.prices__card-button');
// const modalBuy = document.querySelector('.modal');


// buyButton.addEventListener("click", () => {

// });
