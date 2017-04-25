'use strict';

(function ($) {
  var $categories = $('.category');

  $categories.hover(function (el) {
    $('#' + el.target.id + ' > .categories__title').addClass('categories__title--hovered');
    $('#' + el.target.id + ' > .categories__link').addClass('categories__link--hovered');
  }, function (el) {
    $('#' + el.target.id + ' > .categories__title').removeClass('categories__title--hovered');
    $('#' + el.target.id + ' > .categories__link').removeClass('categories__link--hovered');
  });
})(jQuery);