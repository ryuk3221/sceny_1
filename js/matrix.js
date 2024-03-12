const matrixContainer = document.querySelector('.calculator-bot__matrix-container');

const renderMatrix = (height, width) => {
  for (let y = 1;y <= height;y++) {
    const matrixRow = document.createElement('div');
    matrixRow.className = 'matrix-row';
    for (let x = 1;x <= width; x++){
      const square = `
        <span class="square" data-x="${x}" data-y="${y}"></span>
      `;
      matrixRow.insertAdjacentHTML('beforeend', square);
    }
    matrixContainer.appendChild(matrixRow);
  }
  document.querySelectorAll('.square').forEach(el =>{
    el.style.backgroundColor = 'rgb(237, 237, 237)'
    el.onmouseover = function(event) {
      let squareX = this.dataset.x;
      let squareY = this.dataset.y;
      squareX = Number(squareX);
      squareY = Number(squareY);
      document.querySelectorAll('.square').forEach(square => {
        if (Number(square.dataset.x) <= squareX && Number(square.dataset.y) <= squareY) {
          if (square.style.backgroundColor === 'rgb(237, 237, 237)') {
            square.style.backgroundColor = '#B8BEEE';
          }
        } else if (square.style.backgroundColor === 'rgb(64, 76, 189)') {
          
        } else {
          square.style.backgroundColor = '#EDEDED';
        }
      });
      document.querySelector('.width-span').innerHTML = squareX;
      document.querySelector('.height-span').innerHTML = squareY;
    };
    el.onclick = function(event) {
      let squareX = this.dataset.x;
      let squareY = this.dataset.y;
      squareX = Number(squareX);
      squareY = Number(squareY);
      document.querySelectorAll('.square').forEach(square => {
        if (Number(square.dataset.x) <= squareX && Number(square.dataset.y) <= squareY) {
          square.style.backgroundColor = 'rgb(64, 76, 189)';
        } else {
          square.style.backgroundColor = '#EDEDED';
        }
      });
      const s = squareX * squareY;
      document.querySelector('.s-span').innerHTML = s;
      let sumScen = s * 900;
      let sumScenString = ``;
      document.querySelector('.summ-scen').innerHTML = sumScen + ' ₽';
    }
  });
}

const scenCheckboxes = document.querySelectorAll('.calculator-bot__input-checkbox');

scenCheckboxes.forEach(checkbox => {
  checkbox.onchange = (event) => {
    if (event.target.checked) {
      let sumString = document.querySelector('.summ-scen').innerHTML;
      sumString = sumString.replace(' ', '');
      sumString = parseInt(sumString);
      sumString = Number(sumString) + Number(event.target.dataset.price);
      document.querySelector('.summ-scen').innerHTML = sumString + ' ₽';
    }
    else {
      let sumString = document.querySelector('.summ-scen').innerHTML;
      sumString = sumString.replace(' ', '');
      sumString = parseInt(sumString);
      sumString = Number(sumString) - Number(event.target.dataset.price);
      document.querySelector('.summ-scen').innerHTML = sumString + ' ₽';
    }
  };
});

const scenTypes = document.querySelectorAll('.slider-checkbox');

scenTypes.forEach(checkbox => {
  checkbox.onchange = (event) => {
    const factor = Number(event.target.dataset.procent) / 100;
    let sumString = document.querySelector('.summ-scen').innerHTML;
    sumString = sumString.replace(' ', '');
    sumString = parseInt(sumString);
    let itog = sumString * factor;
    if (event.target.checked) {
      document.querySelector('.summ-scen').innerHTML = sumString + itog;
    }
    else {
      let s = document.querySelector('.s-span').innerHTML;
      document.querySelector('.summ-scen').innerHTML = Number(s) * 900;
    }
  };
});

renderMatrix(20, 30);