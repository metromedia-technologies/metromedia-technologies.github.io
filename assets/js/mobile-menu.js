'use strict';

(function ($) {
  var $mobileBtn = $('#mobile-menu-btn');
  var $mobileMenu = $('.mobile__nav');

  $mobileBtn.click(function () {
    $mobileMenu.toggleClass('menu-open');
  });
})(jQuery);