$(function(){
  $('.tab__inner').slick({
    arrows: false,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 30,
    infinite: false
  });
  if (window.innerWidth <= 1150) {
    $('.catalog-item__img-box-slider').slick({
      arrows: false,
      dots: true,
      swipeToSlide: true,
      touchThreshold: 30,
      
    });
  }
});


//Табы (переключатели)

document.querySelectorAll('.tab__item').forEach(el => {
  el.onclick = function () {
    document.querySelectorAll('.tab__item').forEach(tab => {
      tab.classList.remove('tab__item--active');
    });
    this.classList.add('tab__item--active');
  };
})

//Скрипты для dropdown

document.querySelectorAll('.sidebar__btn').forEach(el => {
  el.onclick = function () {
    if (this.classList.contains('sidebar__btn--active')) {
      el.classList.remove('sidebar__btn--active');
      const id = el.dataset.value;
      const dropMenu = el.closest(`#${id}`).querySelector('ul');
      dropMenu.style.height = '0';
      dropMenu.style.margin = '0';
    } else {
      el.classList.toggle('sidebar__btn--active');
      const id = el.dataset.value;
      const dropMenu = el.closest(`#${id}`).querySelector('ul');
      dropMenu.style.height = dropMenu.scrollHeight + 'px';
      dropMenu.style.margin = '18px';
    }  
  };

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



document.querySelectorAll('.sidebar__item').forEach(li => {
  if (li.classList.contains('sidebar__item--active')) {
    const parent = li.closest('div');
    parent.querySelector('.sidebar__btn').classList.add('sidebar__btn--active');
    const dropMenu = parent.querySelector('ul');
    dropMenu.style.height = dropMenu.scrollHeight + 'px';
    dropMenu.style.margin = '18px';
  }
});