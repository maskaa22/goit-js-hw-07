const formRegistration = document.querySelector('.login-form');
const label = document.querySelectorAll('label');

for (const lab of label) {
  lab.className = 'form-label';
}

const handler = (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const registerObj = {
    email: email.trim(),
    password: password.trim(),
  };

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else console.log(registerObj);

  form.reset();
};

formRegistration.addEventListener('submit', handler);
