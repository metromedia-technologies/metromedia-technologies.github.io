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
'use strict';

(function ($) {

  var mobileMenuBtn = $('.nav__mobile-toggle');
  var mobileMenu = $('.mobile-nav');
  var mobileCloseBtn = $('.mobile-nav__close-btn');

  mobileMenuBtn.click(function () {
    mobileMenu.toggleClass('mobile-nav--expanded');
  });

  mobileCloseBtn.click(function () {
    mobileMenu.toggleClass('mobile-nav--expanded');
  });
})(jQuery);
'use strict';

(function ($) {

  var nycBtn = $('#nyc-btn');
  var nycImage = $('#office-nyc');
  var nycAddress = $('#nyc-address');
  var laBtn = $('#la-btn');
  var laImage = $('#office-la');
  var laAddress = $('#la-address');
  var woosterBtn = $('#wooster-btn');
  var woosterImage = $('#office-wooster');
  var woosterAddress = $('#wooster-address');

  function removeActiveState(btnEl, imageEl, addressEl) {
    btnEl.removeClass('active');
    imageEl.removeClass('office-image__img--active');
    addressEl.removeClass('contact__address--active');
  }

  nycBtn.click(function (e) {
    e.preventDefault();
    removeActiveState(nycBtn, nycImage, nycAddress);
    removeActiveState(laBtn, laImage, laAddress);
    removeActiveState(woosterBtn, woosterImage, woosterAddress);

    nycBtn.addClass('active');
    nycImage.addClass('office-image__img--active');
    nycAddress.addClass('contact__address--active');
  });

  laBtn.click(function (e) {
    e.preventDefault();
    removeActiveState(nycBtn, nycImage, nycAddress);
    removeActiveState(laBtn, laImage, laAddress);
    removeActiveState(woosterBtn, woosterImage, woosterAddress);

    laBtn.addClass('active');
    laImage.addClass('office-image__img--active');
    laAddress.addClass('contact__address--active');
  });

  woosterBtn.click(function (e) {
    e.preventDefault();
    removeActiveState(nycBtn, nycImage, nycAddress);
    removeActiveState(laBtn, laImage, laAddress);
    removeActiveState(woosterBtn, woosterImage, woosterAddress);

    woosterBtn.addClass('active');
    woosterImage.addClass('office-image__img--active');
    woosterAddress.addClass('contact__address--active');
  });
})(jQuery);
"use strict";
