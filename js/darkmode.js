const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}
