'use strict';

(function ($) {

  var $productLink = $('.product__link');
  var $productDetails = $('.product__details');

  $productLink.hover(function () {
    $(this).find('.product__details').addClass('showing');
    $(this).find('img').addClass('zoom-blur');
  }, function () {
    $(this).find('.product__details').removeClass('showing');
    $(this).find('img').removeClass('zoom-blur');
  });
})(jQuery);