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



//Переключатели выпадающего меню
document.querySelector('.popup-menu__menu-list').onmouseover = (event) => {
  //Пробегаюсь по всем пунктам выпадающего меню и удаляю класс active
  document.querySelectorAll('.popup-menu__menu-item').forEach(el => {
    el.classList.remove('popup-menu__menu-item--active');
  });
  if (event.target.className === 'popup-menu__menu-item') {
    event.target.classList.add('popup-menu__menu-item--active');
  }
  else if (event.target.className === 'popup-menu__menu-link') {
    event.target.closest('.popup-menu__menu-item').classList.add('popup-menu__menu-item--active');
    console.log('true');
  }
  //Извлекаю идентификатор из таба на который навели мышью
  const id = event.target.id;
  //Пробегаюсь по всем таб контентам и прячу
  document.querySelectorAll('[data-links]').forEach(el => {
    el.style.display = "none";
  });
  //Показываю таб контент с соответствующем if
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
    document.querySelector('.burger-img').src = "front/images/icons/burger-down.svg";
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
    document.querySelector('.burger-img').src = "front/images/icons/burger-up.svg";
    favoriteBtn.style.display = "none";
    logoImg.style.display = "block";
    userNav.style.display = "block";
    if (window.innerWidth < 620) {
      document.querySelector('.user-nav-mobil__cart-link').style.display = "flex";
      document.querySelector('.phone-link-text').style.display = "none";
    }
    
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
    document.querySelector('.phone-link-text').style.display = "block";
    if (window.innerWidth < 620) {
      document.querySelector('.user-nav-mobil__cart-link').style.display = "flex";
      document.querySelector('.phone-link-text').style.display = "none";
    }
    x = false;
  }
};

//Открытие поиска

document.querySelector('.header-top__search').onclick = function () {
  document.querySelector('.search-popup').classList.toggle('search-popup--active');
};

document.querySelector('.search-popup').onclick = function (event) {
  if (event.target.classList.contains('search-popup')) {
    document.querySelector('.search-popup').classList.remove('search-popup--active');
  }
};


let lastScroll = 0;
const header = document.querySelector('.header-top-container');

const scrollPosition = () => window.pageYOffset; 
const containHide = () => header.classList.contains('header-top--hide');

window.addEventListener('scroll', () => {
  
  let top = scrollPosition();
  if (top > lastScroll && !header.classList.contains('header-top--hide')) {
    //scroll down
    header.classList.add('header-top--hide');
  }
  else if (top < lastScroll && header.classList.contains('header-top--hide')) {
    header.classList.remove('header-top--hide');
    //scroll up
  }
  lastScroll = scrollPosition();
});

//Скрипты для поиска на планшетной и мобильной версии

const searchInput = document.querySelector('#search-input');
const menu = document.querySelector('.popup-menu-adap__menu');
const searchResults = document.querySelector('.search-results');

searchInput.onkeyup = function(event) {
  if (searchInput.value.length > 0) {
    menu.style.display = "none";
    searchResults.style.display = "block";
  } 
  else {
    menu.style.display = "block";
    searchResults.style.display = "none";
  }
};


//Скрипты для поиска на десктопной версии


const searchInput1 = document.querySelector('.search-popup__input');
const searchResults1 = document.querySelector('.search-results-desk');

searchInput1.onkeyup = function(event) {
  if (searchInput1.value.length > 0) {
    searchResults1.style.display = "block";
  } 
  else {
    searchResults1.style.display = "none";
  }
};
