(($) => {
  const $window = $(window);
  const $hero = $('#hero');

  $window.scroll(() => {
      const scrollTop = $window.scrollTop();
      const $categories = $('.category');
      const $testimonial = $('.testimonial');

      $hero.css({
        'transform': 'translateY(-' + scrollTop / 6 + 'px)'
      });

      if(isScrolledIntoView($('.testimonials'), ($(window).height() / 3))) {
        $testimonial.each((i) => {
          setTimeout(() => {
            $testimonial.eq(i).addClass('testimonial--showing');
            $('.testimonial__icon').eq(i).addClass('testimonial__icon--showing');
            $('.testimonial__body').eq(i).addClass('testimonial__body--showing');
          }, 150 * (i + 1));
        });
      }
  });

  function isScrolledIntoView(elem, offsetDistance) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + offsetDistance;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
})(jQuery);
