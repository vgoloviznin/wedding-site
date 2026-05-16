const slides = document.querySelectorAll(".location-gallery img");

let currentSlide = 0;

if (slides.length > 1) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }, 1500);
}
