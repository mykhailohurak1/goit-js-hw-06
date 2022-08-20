// Рішення ===========================================

const itemsRef = document.querySelectorAll('.item');

console.log('Number of categories: ', itemsRef.length);

// використовуємо класичний for
// for (let i = 0; i < itemsRef.length; i += 1) {
//     console.log(`Category: ${itemsRef[i].querySelector('h2').textContent}
//     Elements: ${itemsRef[i].querySelectorAll('li').length}`);
// };

// використовуємо forEach
// itemsRef.forEach(function (item) {
//     console.log(`Category: ${item.querySelector('h2').textContent}
//     Elements: ${item.querySelectorAll('li').length}`);
// });

// використовуємо forEach стрілочну
itemsRef.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}
    Elements: ${item.querySelectorAll('li').length}`);
});


// Завдання 1 ========================================

// HTML містить список категорій ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5