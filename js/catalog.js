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