'use strict';

(function ($) {

  var headlineLockup = $('.headline__lockup');
  var heroCoverPhoto = $('.hero__cover-photo');

  $(window).on('load', function () {
    heroCoverPhoto.removeClass('blur-hero-image');
    headlineLockup.removeClass('hide-headline');
  });
})(jQuery);