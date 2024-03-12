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
});