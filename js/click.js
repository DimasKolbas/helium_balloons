// Получите все элементы вопросов и ответов
const questionItems = document.querySelectorAll('.faq__questions-item');

// Добавьте обработчик клика к каждому элементу вопроса
questionItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Проверяем, есть ли у текущего вопроса класс "active"
        const isActive = item.classList.contains('active');

        // Удалите класс "active" у всех вопросов
        questionItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
        });

        // Если текущий вопрос не активен (не открыт), то добавляем класс "active"
        if (!isActive) {
            item.classList.add('active');
        }

        // Остановите всплытие события, чтобы клик на вопросе не закрывал ответ
        event.stopPropagation();
    });
});

// Добавьте обработчик клика к документу
document.addEventListener('click', () => {
    // Закройте все открытые ответы
    questionItems.forEach((item) => {
        item.classList.remove('active');
    });
});

