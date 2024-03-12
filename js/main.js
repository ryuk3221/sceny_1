$(function(){
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
    variableWidth: true
  });
  
  $('.dop__filters-slider').slick({
    variableWidth: true,
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/filters-arrow-right.svg"></button>',
  });


  $('.goods__inner').slick({
    arrows: true,
    variableWidth: true,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow-right.svg"></button>',
  });

  var mixer = mixitup('.dop__items', {
    animation: {
        duration: 300
    }
  });

  const popupMenu = document.querySelector('.popup-menu');
  //открытие выпадающего меню
  document.querySelector('.header-top__menu-item').onmouseover = (event) => {
    if (event.target.className === 'header-top__menu-link') {
      popupMenu.style.opacity = "1";
      popupMenu.style.visibility = "visible";
    }
  }

  //Закрытие выпадающего меню
  popupMenu.onmouseover = (event) => {
    if (event.target.className === 'popup-menu') {
      popupMenu.style.opacity = "0";
      popupMenu.style.visibility = "hidden";
    }
  };
  
  document.querySelector('.popup-menu__menu-list').onmouseover = (event) => {
    document.querySelectorAll('.popup-menu__menu-item').forEach(el => {
      el.classList.remove('popup-menu__menu-item--active');
    });
    if (event.target.className === 'popup-menu__menu-item') {
      event.target.classList.add('popup-menu__menu-item--active');
    }
    const id = event.target.id;
    document.querySelectorAll('[data-links]').forEach(el => {
      el.style.display = "none";
    });
    const currentLinksBox = document.querySelector(`[data-links="${id}"]`);
    currentLinksBox.style.display = "grid";
  };

  //Открытие меню при мобильной версии
  let x = false;
  const burger = document.querySelector('.header-top__burger');
  const popupMenuMobil = document.querySelector('.popup-menu-adap');
  const popupMenuMobilContent = document.querySelector('.popup-menu-adap__inner');
  //Ссылка на избранные
  const favoriteBtn =  document.querySelector('.header-top__to-fav-btn');
  const logoImg = document.querySelector('.header-top__logo-box');
  const userNav = document.querySelector('.user-nav');


  burger.onclick = () => {
    if (x === false) {
      popupMenuMobil.style.opacity = "1";
      popupMenuMobil.style.visibility = "visible";
      document.querySelector('.burger-img').src = "images/icons/burger-down.svg";
      favoriteBtn.style.display = "block";
      logoImg.style.display = "none";
      userNav.style.display = "none";
      document.querySelector('.user-nav-mobil__cart-link').style.display = "none";
      document.querySelector('.phone-link-text').style.display = "block";
      x = true;
    }
    else {
      popupMenuMobil.style.opacity = "0";
      popupMenuMobil.style.visibility = "hidden";
      document.querySelector('.burger-img').src = "images/icons/burger-up.svg";
      favoriteBtn.style.display = "none";
      logoImg.style.display = "block";
      userNav.style.display = "block";
      document.querySelector('.user-nav-mobil__cart-link').style.display = "flex";
      document.querySelector('.phone-link-text').style.display = "none";
      x = false;
    }
  };
  
  popupMenuMobil.onclick = (event) => {
    if (event.target.className === "popup-menu-adap") {
      popupMenuMobil.style.opacity = "0";
      popupMenuMobil.style.visibility = "hidden";
      document.querySelector('.burger-img').src = "images/icons/burger-up.svg";
      favoriteBtn.style.display = "none";
      logoImg.style.display = "block";
      userNav.style.display = "block";
      x = false;
    }
  };

})


