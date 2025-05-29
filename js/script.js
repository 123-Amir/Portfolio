// Mobile menu toggle
const menuToggle = document.querySelector('#mobile-menu-toggle');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close mobile menu when link clicked
document.querySelectorAll('.nav-link').forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  })
);
