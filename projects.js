
    function showSlideInCarousel(carousel, targetIndex) {
    const slides = carousel.querySelectorAll('.slide');
    const dots = carousel.querySelectorAll('.dot');

    if (slides.length === 0) return;

    // Handle wrapping around (first <-> last)
    let newIndex = targetIndex;
    if (targetIndex >= slides.length) newIndex = 0;
    if (targetIndex < 0) newIndex = slides.length - 1;

    // Remove active class from current carousel's slides & dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Set new active slide & dot
    slides[newIndex].classList.add('active');
    if (dots[newIndex]) {
        dots[newIndex].classList.add('active');
    }
}

// Moves forward/backward relative to current active slide
function moveSlide(button, step) {
    const carousel = button.closest('.carousel-card');
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const currentIndex = slides.findIndex(slide => slide.classList.contains('active'));
    
    showSlideInCarousel(carousel, currentIndex + step);
}

// Jumps directly to a specific dot index
function currentSlide(dot, index) {
    const carousel = dot.closest('.carousel-card');
    showSlideInCarousel(carousel, index);
}