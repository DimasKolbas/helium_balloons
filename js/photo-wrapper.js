// const slider = document.querySelector('.slider');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// let currentIndex = 0;

// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
//     updateSlider();
// });

// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slider.children.length;
//     updateSlider();
// });

// function updateSlider() {
//     const translateValue = -currentIndex * 100;
//     slider.style.transform = `translateX(${translateValue}%)`;
// }

// // Автоматическая прокрутка слайдов
// function autoSlide() {
//     currentIndex = (currentIndex + 1) % slider.children.length;
//     updateSlider();
// }

// setInterval(autoSlide, 3000); // Прокрутка каждые 3 секунды

// const carousel = document.getElementById("carousel");
// const items = document.querySelectorAll(".carousel-item");
// const itemCount = items.length;
// let currentIndex = 0;
// const itemWidth = items[0].offsetWidth + 10; // Ширина элемента + отступ

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % itemCount;
//     updateCarousel();
// }

// function updateCarousel() {
//     const offset = -currentIndex * itemWidth;
//     carousel.style.transform = `translateX(${offset}px)`;
// }

// // Начните автоматическую прокрутку
// setInterval(nextSlide, 2000);
