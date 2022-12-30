const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const errors = [];

  if (name === '') {
    errors.push('Name is required');
  }

  if (email === '') {
    errors.push('Email is required');
  } else if (!email.includes('@')) {
    errors.push('Email must be a valid email address');
  }

  if (message === '') {
    errors.push('Message is required');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    alert('Form submitted successfully!');
  }
});
