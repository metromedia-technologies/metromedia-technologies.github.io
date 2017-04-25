$(window).on('load', function() {
  setTimeout(() => {
    $('.loader').fadeOut(200);
    $('.loader__spinner').css('top', '0');
    $('.loader__logo').css('top', '0');
    $('html, body').removeAttr('style');
  }, 3000);
});
