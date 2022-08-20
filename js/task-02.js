// Дано ==============================================

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Рішення ===========================================

const ingredientsList = document.querySelector('#ingredients');

const ing = ingredients.map(element => {
  const items = document.createElement('li');

  items.textContent = element;
  items.classList.add('item');

  return items;
});

ingredientsList.append(...ing);


// Завдання 2 ========================================

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:
//    - Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//    - Додасть назву інгредієнта як його текстовий вміст.
//    - Додасть елементу клас item.
//    - Після чого, вставить усі <li> за одну операцію у список ul.ingredients.