(($) => {
  const $product = $('.product');
  const $productHeader = $('.product__header');

  $(window).on('load', () => {
    $product.each((i) => {
      setTimeout(() => {
        $product.eq(i).addClass('product__showing');
        $productHeader.eq(i).addClass('product__header--showing');
      }, 150 * (i + 1));
    })
  });

})(jQuery);
