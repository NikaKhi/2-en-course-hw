document.addEventListener('DOMContentLoaded', function() {
    // Задание 1: Скрытие и показ текста
    const toggleHeading = document.querySelector('#toggleHeading');
    const toggleButton = document.querySelector('#toggleButton');
    
    toggleButton.addEventListener('click', function() {
        if (toggleHeading.classList.contains('hidden')) {
            toggleHeading.classList.remove('hidden');
            toggleButton.textContent = 'Скрыть';
        } else {
            toggleHeading.classList.add('hidden');
            toggleButton.textContent = 'Показать';
        }
    });

    // Задание 2: Изменение стиля элемента
    const colorParagraph = document.querySelector('#colorParagraph');
    const colorButton = document.querySelector('#colorButton');
    
    colorButton.addEventListener('click', function() {
        colorParagraph.style.color = colorParagraph.style.color === 'blue' ? 'black' : 'blue';
    });

    // Задание 3: Динамическое изменение текста
    const changeTextHeading = document.querySelector('#changeTextHeading');
    const changeTextButton = document.querySelector('#changeTextButton');
    
    changeTextButton.addEventListener('click', function() {
        changeTextHeading.textContent = changeTextHeading.textContent === 'Привет, мир' 
            ? 'Исходный текст заголовка' 
            : 'Привет, мир';
    });

    // Задания 4 и 5: Поиск и изменение элементов по классу
    const descriptionElements = document.querySelectorAll('.description');
    descriptionElements.forEach(element => {
        element.textContent = 'Измененный текст';
    });

    // Задание 6: Добавление нового элемента в DOM
    const addElementButton = document.querySelector('#addElementButton');
    
    addElementButton.addEventListener('click', function() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Новый абзац';
        document.body.appendChild(newParagraph);
    });

    // Задание 7: Удаление элемента
    const removeElementButton = document.querySelector('#removeElementButton');
    
    removeElementButton.addEventListener('click', function() {
        const firstDescription = document.querySelector('.description');
        if (firstDescription) {
            firstDescription.remove();
        }
    });
});