const hamburgerEl = document.querySelector('.hamburger');
const navbarEl = document.querySelector('.nav-list');

hamburgerEl.addEventListener('click', () => navbarEl.classList.toggle('show'));
