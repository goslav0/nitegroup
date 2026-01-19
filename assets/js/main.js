const slides = document.querySelectorAll('.slides img');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

document.querySelector('.next')?.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

document.querySelector('.prev')?.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}
