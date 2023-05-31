const callBtn = document.getElementById('callBtn');

callBtn.addEventListener('click', function () {
    const phoneNumber = '+380957143350'; // Замените 'телефонный_номер' на фактический мобильный номер, на который нужно позвонить
    window.location.href = `tel:${phoneNumber}`;
});
