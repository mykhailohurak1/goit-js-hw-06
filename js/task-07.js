// Рішення ===========================================

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', onFontSizeControlInput);
text.style.fontSize = `${fontSizeControl.value}px`;

function onFontSizeControlInput(event) {
    const size = event.currentTarget.value;
    text.style.fontSize = `${size}px`;
};


// Завдання 7 ========================================

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>