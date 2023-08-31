const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
});

function updateSlider() {
    const translateValue = -currentIndex * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

// Автоматическая прокрутка слайдов
function autoSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
}

setInterval(autoSlide, 3000); // Прокрутка каждые 3 секунды
