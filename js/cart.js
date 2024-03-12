const incrementBtns = document.querySelectorAll('.cart__increment');
const decrementBtns = document.querySelectorAll('.cart__decrement');
const deleteFromCart = document.querySelectorAll('.cart__item-delete');

incrementBtns.forEach(el => {
  el.onclick = function(event) {
    const parent = this.closest('.cart__item-counter');
    const count = parent.querySelector('.cart__count');
    count.innerHTML = Number(count.innerHTML) + 1;
  }
});

decrementBtns.forEach(el => {
  el.onclick = function(event) {
    const parent = this.closest('.cart__item-counter');
    const count = parent.querySelector('.cart__count');
    
    if (Number(count.innerHTML) > 0) {
      count.innerHTML = Number(count.innerHTML) - 1;
    } 
  }
});

deleteFromCart.forEach(el => {
  el.onclick = function(event) {
    this.closest('.cart__item').style.display = "none";
    //Здесь будет ajax запрос  на удаление элемента из корзины
  }
});



