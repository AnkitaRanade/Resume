// script.js
let currentSlide = 0;
let carouselEnabled = true;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    if (carouselEnabled) {
        showSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (carouselEnabled) {
        showSlide(currentSlide - 1);
    }
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.getElementById('carousel-checkbox').addEventListener('change', function() {
    carouselEnabled = this.checked;
});
