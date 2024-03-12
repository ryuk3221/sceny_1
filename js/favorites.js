if (window.innerWidth < 900) {
  $('.catalog-item__img-box-slider').slick({
    arrows: false,
    dots: true,
    swipeToSlide: true,
    touchThreshold: 30,
    slidesToShow: 1,
  });
}

const catalogItemHoverGallary = document.querySelectorAll('.catalog-item__hover-gallary');

  catalogItemHoverGallary.forEach(el => {
    el.onmouseover = function(event) {
      if (event.target.classList.contains('catalog-item__hover-gallary-item')) {
        const id = event.target.id;
        event.target.closest('.catalog-item__img-box').querySelectorAll('img').forEach(img => {
          img.style.display = "none";
        });
        event.target.closest('.catalog-item__img-box').querySelector(`[data-img="${id}"]`).style.display = "block";
        event.target.closest('.catalog-item__img-box').querySelectorAll('.catalog-item__hover-gallary-item').forEach(el => {
          el.classList.remove('catalog-item__hover-gallary-item--active');
        })
        event.target.classList.add('catalog-item__hover-gallary-item--active');
      }
    };
  });