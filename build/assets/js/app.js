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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHBvcHVwID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJyk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dQb3B1cCgpIHtcclxuXHJcbiAgICBpZiAoIXBvcHVwV3JhcC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwLXdyYXBfY2xvc2VkJykpIHtcclxuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAtd3JhcF9jbG9zZWQnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwLXdyYXBfY2xvc2VkJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRvZ2dsZTogc2hvd1BvcHVwXHJcbiAgfVxyXG59KSgpO1xyXG5cclxudmFyIGxvZ2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zaWduLWluJyksXHJcbiAgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwJyksXHJcbiAgcG9wdXBXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKTtcclxuXHJcbmlmIChsb2dpbkJ0bikge1xyXG4gIGxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcG9wdXAudG9nZ2xlKCk7XHJcbiAgfSlcclxufVxyXG5cclxuaWYgKGNsb3NlQnRuKSB7XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwb3B1cC50b2dnbGUoKTtcclxuICB9KVxyXG59Il19
