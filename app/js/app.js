"use strict";

var popup = (function() {
  var popup = document.querySelector('.popup-wrap');

  function showPopup() {

    if (!popupWrap.classList.contains('popup-wrap_closed')) {
      popup.classList.add('popup-wrap_closed');
      document.body.style.overflow = 'auto';
    } else {
      popup.classList.remove('popup-wrap_closed');
      document.body.style.overflow = 'hidden';
    }

  }


  return {
    toggle: showPopup
  }
})();

var loginBtn = document.querySelector('.btn-sign-in'),
  closeBtn = document.querySelector('.btn-popup'),
  popupWrap = document.querySelector('.popup-wrap');

if (loginBtn) {
  loginBtn.addEventListener('click', function () {
    popup.toggle();
  })
}

if (closeBtn) {
  closeBtn.addEventListener('click', function () {
    popup.toggle();
  })
}