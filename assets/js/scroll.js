'use strict';

(function ($) {
  var $window = $(window);
  var $hero = $('#hero');

  $window.scroll(function () {
    var scrollTop = $window.scrollTop();
    var $categories = $('.category');
    var $testimonial = $('.testimonial');

    $hero.css({
      'transform': 'translateY(-' + scrollTop / 6 + 'px)'
    });

    if (isScrolledIntoView($('.testimonials'), $(window).height() / 3)) {
      $testimonial.each(function (i) {
        setTimeout(function () {
          $testimonial.eq(i).addClass('testimonial--showing');
          $('.testimonial__icon').eq(i).addClass('testimonial__icon--showing');
          $('.testimonial__body').eq(i).addClass('testimonial__body--showing');
        }, 150 * (i + 1));
      });
    }
  });

  function isScrolledIntoView(elem, offsetDistance) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + offsetDistance;

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
})(jQuery);
