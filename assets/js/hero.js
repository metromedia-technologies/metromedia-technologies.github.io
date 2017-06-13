'use strict';

(function ($) {

  var headlineLockup = $('.headline__lockup');

  $(window).on('load', function () {
    headlineLockup.removeClass('hide-headline');
  });
})(jQuery);