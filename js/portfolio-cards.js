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

  if (window.innerWidth < 900) {
    console.log()
    $('.our-projects__img-box-slider').slick({
      arrows: false,
      dots: true,
      swipeToSlide: true,
      touchThreshold: 30,
      slidesToShow: 1,
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

  