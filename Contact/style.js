document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');
    const slides = Array.from(slidesContainer.children);
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    // autoplay function
    const intervalId = setInterval(nextSlide, 3000);

    // Stop playback on mouse hover
    slidesContainer.addEventListener('mouseover', () => clearInterval(intervalId));
    slidesContainer.addEventListener('mouseout', () => setInterval(nextSlide, 3000));
});


 