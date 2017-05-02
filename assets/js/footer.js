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