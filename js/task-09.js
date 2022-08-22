// Рішення ===========================================

const refs = {
  body: document.body,
  colorValue: document.querySelector('.color'),
  changeColorButton: document.querySelector('.change-color'),
}

refs.changeColorButton.addEventListener('click', changeBodyBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function changeBodyBackgroundColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
}


// Завдання 9 ========================================

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }