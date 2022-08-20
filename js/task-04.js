// Рішення 1 ===========================================

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', onDecrementButton);
incrementButton.addEventListener('click', onIncrementButton);

function onDecrementButton() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function onIncrementButton() {
    counterValue += 1;
    value.textContent = counterValue;
};


// Рішення 2 ===========================================

// const refs = {
//     decrementButton: document.querySelector('[data-action="decrement"]'),
//     incrementButton: document.querySelector('[data-action="increment"]'),
//     value: document.querySelector('#value'),
// };

// let counterValue = 0;

// refs.decrementButton.addEventListener('click', onDecrementButton);
// refs.incrementButton.addEventListener('click', onIncrementButton);

// function onDecrementButton() {
//     counterValue -= 1;
//     refs.value.textContent = counterValue;
// };

// function onIncrementButton() {
//     counterValue += 1;
//     refs.value.textContent = counterValue;
// };


// Завдання 4 ========================================

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

