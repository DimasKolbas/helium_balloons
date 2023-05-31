const carousel = document.querySelector('.carousel');
const images = carousel.getElementsByTagName('img');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
let currentIndex = 0;
let intervalId;

btn1.addEventListener('click', function () {
    showImage(0);
    resetInterval();
});

btn2.addEventListener('click', function () {
    showImage(1);
    resetInterval();
});

btn3.addEventListener('click', function () {
    showImage(2);
    resetInterval();
});

btn4.addEventListener('click', function () {
    showImage(3);
    resetInterval();
});

function showImage(index) {
    const translateValue = -100 * index; // Вычисляем значение смещения

    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translateX(${translateValue}%)`; // Применяем смещение к каждому изображению
    }

    currentIndex = index;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function startInterval() {
    intervalId = setInterval(nextImage, 4000); // Прокручивать изображения каждые 2 секунды (можно изменить интервал по своему усмотрению)
}

function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}

startInterval();
