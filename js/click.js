// Получаем ссылки на элементы
const toggleButton = document.getElementById("toggleButton");
const hiddenField = document.getElementById("hiddenField");

// Добавляем обработчик события клика
toggleButton.addEventListener("click", function () {
    // При клике изменяем свойства скрытого поля
    if (hiddenField.style.opacity === "1") {
        hiddenField.style.opacity = "0";
        hiddenField.style.display = "none";
    } else {
        hiddenField.style.opacity = "1";
        hiddenField.style.display = "block";
    }
});
