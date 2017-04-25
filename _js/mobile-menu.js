(($) => {
  const $mobileBtn = $('#mobile-menu-btn');
  const $mobileMenu = $('.mobile__nav');

  $mobileBtn.click(() => {
    $mobileMenu.toggleClass('menu-open');
  });
})(jQuery);
