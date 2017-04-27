'use strict';

(function ($) {
  var $testimonial = $('.testimonial');

  $(window).on('load', function () {
    $testimonial.each(function (i) {
      setTimeout(function () {
        $testimonial.eq(i).addClass('testimonial--showing');
      }, 150 * (i + 1));
    });
  });
})(jQuery);