document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('#myHeading');
    const button = document.querySelector('#toggleButton');

    button.addEventListener('click', function() {
        if (heading.classList.contains('hidden')) {
            heading.classList.remove('hidden');
            button.textContent = 'Скрыть';
        } else {
            heading.classList.add('hidden');
            button.textContent = 'Показать';
        }
    });
});
