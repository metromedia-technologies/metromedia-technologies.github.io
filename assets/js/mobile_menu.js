'use strict';

(function ($) {

  var mobileMenuBtn = $('.nav__mobile-toggle');
  var mobileMenu = $('.mobile-nav');

  mobileMenuBtn.click(function () {
    mobileMenu.toggleClass('mobile-nav--expanded');
  });
})(jQuery);