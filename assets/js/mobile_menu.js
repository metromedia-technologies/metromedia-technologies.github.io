'use strict';

(function ($) {

  var mobileMenuBtn = $('.nav__mobile-toggle');
  var mobileMenu = $('.mobile-nav');
  var mobileCloseBtn = $('.mobile-nav__close-btn');

  mobileMenuBtn.click(function () {
    mobileMenu.toggleClass('mobile-nav--expanded');
  });

  mobileCloseBtn.click(function () {
    mobileMenu.toggleClass('mobile-nav--expanded');
  });
})(jQuery);