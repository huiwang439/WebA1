document.addEventListener('DOMContentLoaded', function () {  
    const carouselItems = document.querySelectorAll('.carousel-item');  
    const prevButton = document.querySelector('.carousel-prev');  
    const nextButton = document.querySelector('.carousel-next');  
    let currentIndex = 0;  
    let carouselInterval;  
  
    function showImage(index) {  
        carouselItems.forEach((item, i) => {  
            item.classList.toggle('active', i === index);  
            // 确保活动的项目始终可见  
            item.style.display = i === index ? 'block' : 'none';  
        });  
    }  
  
    function nextImage() {  
        currentIndex = (currentIndex + 1) % carouselItems.length;  
        showImage(currentIndex);  
    }  
  
    function prevImage() {  
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;  
        showImage(currentIndex);  
    }  
  
    prevButton.addEventListener('click', prevImage);  
    nextButton.addEventListener('click', nextImage);  
  
    // 初始时开始自动轮播  
    carouselInterval = setInterval(nextImage, 2000);  
  
    // 鼠标悬停在轮播图上时停止自动轮播，离开时恢复  
    const carousel = document.querySelector('.carousel');  
    carousel.addEventListener('mouseenter', () => {  
        clearInterval(carouselInterval);  
    });  
    carousel.addEventListener('mouseleave', () => {  
        carouselInterval = setInterval(nextImage, 2000);  
    });  
});