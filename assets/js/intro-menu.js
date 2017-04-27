'use strict';

(function ($) {
  var $product = $('.product');
  var $productHeader = $('.product__header');

  $(window).on('load', function () {
    $product.each(function (i) {
      setTimeout(function () {
        $product.eq(i).addClass('product__showing');
        $productHeader.eq(i).addClass('product__header--showing');
      }, 150 * (i + 1));
    });
  });
})(jQuery);