const photoContainer = document.querySelector('.photo-container');
const photoWrapper = document.querySelector('.photo-wrapper');
const images = photoWrapper.getElementsByTagName('img');

// Добавляем обработчики событий для крайних фотографий
images[0].addEventListener('mouseenter', showHiddenPhotos);
images[images.length - 1].addEventListener('mouseenter', showHiddenPhotos);

// Функция для отображения скрытых фотографий
function showHiddenPhotos() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('visible');
    }
}

// Функция для скрытия фотографий
function hidePhotos() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('visible');
    }
}

// Добавляем обработчик события для скрытия фотографий при уходе с контейнера
photoContainer.addEventListener('mouseleave', hidePhotos);
