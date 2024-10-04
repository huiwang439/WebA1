document.addEventListener('DOMContentLoaded', function () {  
    const carouselImages = document.querySelectorAll('.carousel-img');  
    const prevButton = document.querySelector('.carousel-prev');  
    const nextButton = document.querySelector('.carousel-next');  
    let currentIndex = 0;  
    let carouselInterval; // 用于存储定时器的ID  
  
    function showImage(index) {  
        carouselImages.forEach((img, i) => {  
            img.style.display = i === index ? 'block' : 'none';  
        });  
          
        // 如果定时器存在，则清除它  
        if (carouselInterval) {  
            clearInterval(carouselInterval);  
        }  
  
        // 重置定时器  
        carouselInterval = setInterval(nextImage, 2000); // 每3秒切换到下一张图片  
    }  
  
    function nextImage() {  
        currentIndex = (currentIndex + 1) % carouselImages.length;  
        showImage(currentIndex);  
    }  
  
    function prevImage() {  
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;  
        showImage(currentIndex);  
    }  
  
    prevButton.addEventListener('click', prevImage);  
    nextButton.addEventListener('click', nextImage);  
  
    // 初始时开始自动轮播  
    carouselInterval = setInterval(nextImage, 2000);  
  
    // 可选：鼠标悬停在轮播图上时停止自动轮播，离开时恢复  
    const carousel = document.querySelector('.carousel');  
    carousel.addEventListener('mouseenter', () => {  
        if (carouselInterval) {  
            clearInterval(carouselInterval);  
        }  
    });  
    carousel.addEventListener('mouseleave', () => {  
        carouselInterval = setInterval(nextImage, 3000);  
    });  
});