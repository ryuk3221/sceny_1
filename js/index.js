$(function(){
  $('.goods__inner').slick({
    arrows: true,
    variableWidth: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    touchThreshold: 30,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow-right.svg"></button>',
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
  }
  $('.calculator-bot__slider').slick({
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 30,
    infinite: false,
    prevArrow: `
    <button type="button" class="slick-prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17.5" transform="rotate(-180 18 18)" stroke="#80839F"/>
        <path d="M19.5 13.5L15 18L19.5 22.5" stroke="#80839F"/>
      </svg>
    </button>'
    `,
    nextArrow: `
    <button type="button" class="slick-next">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 37" fill="none">
        <circle cx="18" cy="18.5" r="17.5" stroke="#80839F"/>
        <path d="M16.5 23L21 18.5L16.5 14" stroke="#80839F"/>
      </svg>
    </button>
    `,
  });
  
  if (window.innerWidth < 900) {
    $('.our-projects__img-box-slider').slick({
      arrows: false,
      dots: true,
      swipeToSlide: true,
      touchThreshold: 30,
      slidesToShow: 1,
    });
  }
  

  const homeLinks = document.querySelectorAll('.home-links__item');
  homeLinks.forEach(item => {
    const currentImg = item.querySelector('.home-links__current-img');
    const hoverImg = item.querySelector('.home-links__hover-img')
    item.onmouseover = function(event) {
      currentImg.style.display = 'none';
      hoverImg.style.display = 'block';
      item.classList.add('home-links__item--active');
      item.querySelector('.home-links__hover-bg').classList.add('home-links__hover-bg--active');
    }
    item.onmouseout = function(event){
      currentImg.style.display = 'block';
      hoverImg.style.display = 'none';
      item.classList.remove('home-links__item--active')
      item.querySelector('.home-links__hover-bg').classList.remove('home-links__hover-bg--active');
    }
  });


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

  //Catalog-item hover gallary

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

  //Вопросы и ответы

  const questions = document.querySelectorAll('.accordion__item-head');
  questions.forEach(el => {
    el.onclick = function(event) {
      //Разворачиваю все svg
      document.querySelector('.accordion__inner').querySelectorAll('svg').forEach(svg => {
        svg.style.transform = 'rotate(0deg)';
      });
      //Разварачиваю нужную svg
      el.querySelector('svg').style.transform = 'rotate(180deg)';
      document.querySelectorAll('.accordion__item-text').forEach(text => {
        text.style.height = 0;
        text.closest('.accordion__item').querySelector('.accordion__item-head').style.marginBottom = '0';
        text.closest('.accordion__item').style.paddingBottom = '0';
      });

      //
      const accordionText = event.target.closest('.accordion__item').querySelector('p')
      accordionText.style.height = accordionText.scrollHeight + 'px';
      event.target.style.marginBottom = '20px';
      event.target.closest('.accordion__item').style.paddingBottom = '20px';
    }
  });

  if (window.innerWidth <= 900) {
    document.querySelectorAll('.catalog-item').forEach(el => {
      el.classList.remove('hover');
    })
  }

  const calculateSquare = () => {
    const width = Number(document.querySelector('#width').value);
    const height = Number(document.querySelector('#height').value);
    document.querySelector('.calculator-square').innerHTML = width * height;
    document.querySelector('.calculator-summ').innerHTML = (width * height) * 900;
  }

  document.querySelector('#width').onkeyup = calculateSquare;
  document.querySelector('#height').onkeyup = calculateSquare;

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

