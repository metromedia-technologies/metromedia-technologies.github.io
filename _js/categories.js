(($) => {
  const $categories = $('.category');

  $categories.hover((el) => {
    $(`#${el.target.id} > .categories__title`).addClass('categories__title--hovered');
    $(`#${el.target.id} > .categories__link`).addClass('categories__link--hovered');
  },
  (el) => {
    $(`#${el.target.id} > .categories__title`).removeClass('categories__title--hovered');
    $(`#${el.target.id} > .categories__link`).removeClass('categories__link--hovered');
  });

})(jQuery);
