document.addEventListener('DOMContentLoaded', function () {
    var openPopupBtn = document.getElementById('openPopupBtn');
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close-btn');

    openPopupBtn.addEventListener('click', function () {
        popup.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', function () {
        popup.classList.add('hidden');
    });

    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.classList.add('hidden');
        }
    });
});
