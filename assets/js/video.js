'use strict';

(function ($) {
  var vid = document.getElementById('video');
  var vidBtn = document.getElementById('video-btn');
  var callToAction = document.querySelector('.call-to-action');
  var heroPlaceholder = document.querySelector('.hero-placeholder');
  var nav = document.querySelector('nav');
  var products = document.querySelectorAll('.product');

  window.onload = function () {
    setTimeout(function () {
      products.forEach(function (product, index) {
        setTimeout(function () {
          product.style.opacity = 1;
        }, 300 * index);
      });
    }, 300);
  };

  vidBtn.addEventListener('click', function () {
    if (vid.paused) {
      vid.play();
      var ctaWidth = callToAction.offsetWidth;
      var navWidth = nav.offsetWidth;
      callToAction.style.left = '-' + (ctaWidth + 50) + 'px';
      callToAction.style.opacity = '0';
      heroPlaceholder.style.left = '100%';
      heroPlaceholder.style.opacity = '0';
    } else {
      vid.pause();
    }
  });

  vid.addEventListener('ended', function () {
    var ctaWidth = callToAction.offsetWidth;
    callToAction.style.left = '0px';
    callToAction.style.opacity = '1';
    heroPlaceholder.style.left = '0';
    heroPlaceholder.style.opacity = '1';
  });
})(jQuery);