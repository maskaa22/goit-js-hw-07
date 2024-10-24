const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const title = document.querySelector('h1');

title.className = 'hello-title';

input &&
  input.addEventListener('input', (e) => {
    const str = e.currentTarget.value;

    output.textContent = str.trim();

    if (str.includes(' ') || str === '') {
      output.textContent = 'Anonymous';
    }
  });
