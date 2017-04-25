(($) => {
  const vid = document.getElementById('video');
  const vidBtn = document.getElementById('video-btn');
  const callToAction = document.querySelector('.call-to-action');
  const heroPlaceholder = document.querySelector('.hero-placeholder');
  const nav = document.querySelector('nav');
  const products = document.querySelectorAll('.product');

  window.onload = () => {
    setTimeout(() => {
      products.forEach((product, index) => {
        setTimeout(() => {
          product.style.opacity = 1;
        }, 300 * index);
      });
    }, 300);
  };

  vidBtn.addEventListener('click', () => {
    if (vid.paused) {
      vid.play();
      const ctaWidth = callToAction.offsetWidth;
      const navWidth = nav.offsetWidth;
      callToAction.style.left = `-${ctaWidth + 50}px`;
      callToAction.style.opacity = '0';
      heroPlaceholder.style.left = '100%';
      heroPlaceholder.style.opacity = '0';
    } else {
      vid.pause();
    }
  });

  vid.addEventListener('ended', () => {
    const ctaWidth = callToAction.offsetWidth;
    callToAction.style.left = `0px`;
    callToAction.style.opacity = '1';
    heroPlaceholder.style.left = '0';
    heroPlaceholder.style.opacity = '1';
  });
})(jQuery);
