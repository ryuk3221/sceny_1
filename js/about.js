$(function(){
  $('.reviews__inner').slick({
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 30,
    prevArrow: `
      <button type="button" class="slick-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17.5" transform="rotate(-180 18 18)" stroke="#80839F"/>
          <path d="M19.5 13.5L15 18L19.5 22.5" stroke="#80839F"/>
        </svg>
      </button>
    `,
    nextArrow: `
      <button type="button" class="slick-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17.5" stroke="#80839F"/>
          <path d="M16.5 22.5L21 18L16.5 13.5" stroke="#80839F"/>
        </svg>
      </button>
    `,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
        }
      }
    ]
  });
  if (window.innerWidth <= 767) {
    $('.about__img-container').slick({
      variableWidth: true,
      arrows: false,
      swipeToSlide: true,
      touchThreshold: 30,
    });
  }
  //Отображенеи формы
  document.querySelectorAll('.catalog-details__nav-link').forEach(el => {
    el.onclick = function(event) {
      const id = this.id;
      document.querySelector(`[data-popup="${id}"]`).classList.add('popup-brand--active');
    };
  });

  //Закрытие попапов
  document.querySelectorAll('.popup-brand').forEach(el => {
    el.onclick = function(event) {
      if (event.target.classList.contains('popup-brand')) {
        document.querySelectorAll('.popup-brand').forEach(el => {
          el.classList.remove('popup-brand--active');
        });
      };
    };
  });

  document.querySelectorAll('.popup-brand__close-btn').forEach(el => {
    el.onclick = function(event) {
      document.querySelectorAll('.popup-brand').forEach(el => {
        el.classList.remove('popup-brand--active');
      });
    };
  });
}); 