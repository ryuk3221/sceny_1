$(function(){
  $('.big-slider').slick({
    arrows: false,
    fade: true,
    swipe: false,
    draggable: false,
    asNavFor: '.small-slider',
  });
  $('.small-slider').slick({
    arrows: false,
    draggable: false,
    swipe: false,
    focusOnSelect: true,
    asNavFor: '.big-slider',
    variableWidth: true,
  });
  if (window.innerWidth > 900) {
    $('.our-projects__slider').slick({
      variableWidth: true,
      slidesToScroll: 1,
      swipeToSlide: true,
      touchThreshold: 30,
      infinite: false,
      prevArrow: `
      <button type="button" class="slick-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17.5" transform="rotate(-180 18 18)" stroke="#80839F"/>
          <path d="M19.5 13.5L15 18L19.5 22.5" stroke="#80839F"/>
        </svg>
      </button>'
      `,
      nextArrow: `
      <button type="button" class="slick-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="17.5" stroke="#80839F"/>
          <path d="M16.5 22.5L21 18L16.5 13.5" stroke="#80839F"/>
        </svg>
      </button>
      `,
    });
  };
  if (window.innerWidth < 900) {
    $('.our-projects__img-box-slider').slick({
      arrows: false,
      dots: true,
      swipeToSlide: true,
      touchThreshold: 30,
      slidesToShow: 1,
    });
  }

    //our-projects hover gallary
    const hoverGallary = document.querySelectorAll('.our-projects__hover-gallary');

    hoverGallary.forEach(el => {
      el.onmouseover = function(event) {
        if (event.target.classList.contains('hover-gallary__item')) {
          //Извлекаю id чтобы по этому id найти нужную картинку и отобразить
          const id = event.target.id;
          //Скрываю все картинки
          event.target.closest('.our-projects__item').querySelectorAll('img').forEach(img => {
            img.style.display = "none";
          });
          //Нахожу нужную картинку и отображаю
          event.target.closest('.our-projects__item').querySelector(`[data-img="${id}"]`).style.display = 'block';
          
          event.target.closest('.our-projects__item').querySelectorAll('.hover-gallary__item').forEach(item => {
            item.classList.remove('hover-gallary__item--active');
          });
          
          event.target.classList.add('hover-gallary__item--active');
        }
      };
    });
    Fancybox.bind('[data-fancybox]', {
      Carousel: {
        Navigation: {
          prevTpl:
            `<button tabindex="0" title="Назад" class="f-button is-prev" data-carousel-prev="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17.5" transform="rotate(-180 18 18)" stroke="#80839F"/>
              <path d="M19.5 13.5L15 18L19.5 22.5" stroke="#80839F"/>
              </svg>
            </button>`,
          nextTpl:
            `<button tabindex="0" title="Далее" class="f-button is-next" data-carousel-next="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17.5" stroke="#80839F"/>
              <path d="M16.5 22.5L21 18L16.5 13.5" stroke="#80839F"/>
              </svg>
            </button>`,
        },
      },
    });

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