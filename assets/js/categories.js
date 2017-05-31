'use strict';

(function ($) {

  var $productLink = $('.product__link');
  var $productDetails = $('.product__details');
  var $productBKG = $('.product__bkg');

  $productLink.hover(function () {
    $(this).find('.product__details').addClass('showing');
  }, function () {
    $(this).find('.product__details').removeClass('showing');
  });
})(jQuery);