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

  for (let i = 1; i <= amount; i++) {
    count += 10;

    const div = document.createElement('div');
    const color = getRandomHexColor();

    div.className = 'box';
    if (i === 1) {
      div.style.width = `30px`;
      div.style.height = `30px`;
    }
    div.style.width = `${count}px`;
    div.style.height = `${count}px`;
    div.style.backgroundColor = color;

    boxes.append(div);
  }
  input.value = '';
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
