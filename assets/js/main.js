document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SLIDER – TYLKO JEŚLI ISTNIEJE
  ========================= */
  const slides = document.querySelectorAll('.slides img');
  let index = 0;

  if (slides.length > 0) {
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
  }

  /* =========================
     HAMBURGER – WSZYSTKIE STRONY
  ========================= */
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

});
