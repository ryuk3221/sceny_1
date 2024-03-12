$(function(){
  //Подключаю слайдеры
  $('.catalog-details__big-slider').slick({
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.catalog-details__small-slider',
  });
  $('.catalog-details__small-slider').slick({
    asNavFor: '.catalog-details__big-slider',
    focusOnSelect: true,
    arrows: false,
    draggable: false,
    variableWidth: true,
  });
  
  $('.dop__filters-slider').slick({
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 30,
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/filters-arrow-right.svg"></button>',

  });


  $('.goods__inner').slick({
    arrows: true,
    variableWidth: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 30,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow-right.svg"></button>',
  });

  if (window.innerWidth < 900) {
    $('.catalog-item__img-box-slider').slick({
      arrows: false,
      dots: true,
      swipeToSlide: true,
      touchThreshold: 30,
      slidesToShow: 1,
    });
  };

  $('.popup-brand__slider').slick({
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 30,
    arrows: false,
  });

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



  var mixer = mixitup('.dop__items', {
    animation: {
        duration: 300
    }
  });

  //Отображенеи попапов
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

  Fancybox.bind('[data-fancybox="gallery"]', {
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
  

  //Разметка counter'а
  const counterHTML = `
  <div class="dop__item-counter">
    <button class="decrement">-</button>
    <span class="dop__item-count">1</span>
    <button class="increment">+</button>
  </div>
  `

  //Разметка кнопки добавления корзины
  const addToCartBtn = `<button class="add-to-cart">+</button>`;

  //Получаю все кнопки которые уже в DOMе
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  

  //Функция которая рендерит counter
  const renderCounter = function (event) {
    //Получаею родительский элеменет counter'а
    const counterContainer = this.closest('.dop__item-counter-container');
    //В этот родительский элемент помещаю разметку самого counter
    counterContainer.innerHTML = counterHTML;
    //Получаю элмент отображающий количество
    const count = counterContainer.querySelector('.dop__item-count');
    //Получаю кнопку "-" и вешаю обработчик 
    const decrement = counterContainer.querySelector('.decrement');
    decrement.onclick = function() {
      //Уменьшаю на 1
      count.innerHTML = Number(count.innerHTML) - 1;
      //Если количество 0, то убираю counter и возвращаю кнопку
      if (Number(count.innerHTML) === 0) {
        counterContainer.innerHTML = addToCartBtn;
        //Пробегаюсь по кнопкам и вешаю функцию 
        document.querySelectorAll('.add-to-cart').forEach(el => {
          el.onclick = renderCounter;
        });
      }
    };
    //Получаю кнопку "+" и вешаю обработчик 
    const increment = counterContainer.querySelector('.increment');
    increment.onclick = function() {
      count.innerHTML = Number(count.innerHTML) + 1;
    };
  };

  addToCartBtns.forEach(btn => {
    btn.onclick = renderCounter;
  });

});




