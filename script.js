window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Accordion toggle + sound
  const accordions = document.querySelectorAll('.accordion');
  const audio = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAwF0AAIA+AAACABAAZGF0YRAAAAD//w==");

  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      acc.classList.toggle('open');
      audio.currentTime = 0;
      audio.play();
    });
  });

  // Dark mode toggle
  const toggle = document.getElementById('toggleTheme');
  const body = document.body;

  const savedTheme = localStorage.getItem('dark-mode');
  if (savedTheme === 'true') body.classList.add('dark');

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('dark-mode', body.classList.contains('dark'));
  });
});
