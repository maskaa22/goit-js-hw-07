function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

createButton.className = 'create-button';
destroyButton.className = 'destroy-button';

const handler = () => {
  const num = input.value;

  num >= 1 && num <= 100 && createBoxes(num);
};
const createBoxes = (amount) => {
  let count = 30;

  const allBoxInBoxes = document.querySelectorAll('.box');

  allBoxInBoxes.length > 0 && destroyBoxes();

  let divStr = '';
  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();

    divStr += `<div class='box'  style="width: ${count}px; height: ${count}px; background-color: ${color}"></div>`;
    count += 10;
  }
  input.value = '';
  boxes.insertAdjacentHTML('beforeend', divStr);
  boxes.style.backgroundColor = '#f0f0f7';
};
const destroyBoxes = () => {
  const allBoxInBoxes = document.querySelectorAll('.box');

  for (const box of allBoxInBoxes) {
    box.remove();
  }

  boxes.style.backgroundColor = 'transparent';
};

createButton.addEventListener('click', handler);
destroyButton.addEventListener('click', destroyBoxes);
