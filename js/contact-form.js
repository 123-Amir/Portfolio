// Simple form validation and submission simulation

const contactForm = document.querySelector('form#contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.elements['name'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    const message = contactForm.elements['message'].value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }

    alert('Thanks for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
