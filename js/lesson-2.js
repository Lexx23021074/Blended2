//===================Завдання 1:==================================================================

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

//++++++++++++++++++++++++++++++++
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// const index = styles.indexOf('blues');
// if (index !== -1) {
    //     styles[index] = 'classic';
    // }
    // console.log(styles);
    // Напишіть функцію logItems(array), яка приймає масив як аргумент
    // і виводить у консоль кожен його елемент у форматі:
    // "<номер елемента> - <значення елемента>".
    // Використайте цикл for для перебору елементів масиву.
    // Нумерація елементів повинна починатися з 1 (а не з 0).
// function logItems(array) {
//     for (let i = 0; i < array.length; i ++) {
//         console.log( `номер елемента  ${i + 1} значення елемента  ${array[i]}`);
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax', 'Lux']);
//===================Завдання 2:==================================================================
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     const userName = prompt("Enter your login");
//     if (array.includes(userName)){
//         alert(`Welcome, ${userName}!`);
//     } else {
//         alert(`User not found `);
//     }
// }
// checkLogin(logins)
//===================Завдання 3:==================================================================

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
// function calculateAverage() {
//     let sum = 0;
//     let count = 0;
//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             sum += num;
//             count += 1;
//           }
//     }
//     return  count > 0 ? sum / count : 0;
// }
// console.log(calculateAverage(1, 2, 3, 4));
//===================Завдання 4:==================================================================

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumNeighbor(array) {
//     const result = [];
//     for (let i = 0; i < array.length - 1; i++){
//         const sumNeib = array[i] + array[i + 1];
//         result.push(sumNeib);
//     }
//     return result;
// }
// console.log(sumNeighbor(someArr));

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

//===================Завдання 5:==================================================================

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [9, 5, 35, 56, 12, 7, 7, 80, 3];

// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return `error -not Array`;
//     }
//     let smallest = numbers[0];
//     for (let i = 1; i < numbers.length; i += 1) {
//         if (numbers[i] < smallest) {
//             smallest = numbers[i];
//         }
//     }
//     return smallest;
// }
// console.log(findSmallestNumber(numbers));

//===================Завдання 6:==================================================================

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
// function findLongestWord(string) {
//     const words = string.split(" ");
//     let longestWord = words[0];
//     for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); 


//===================Завдання 7:==================================================================

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
// // 1. спосіб виклику
// // console.log(user.name);
// // 2.спосіб виклику
// // console.log(user["name"]);
// // 3. спосіб виклику
// // const key = "name";
// // console.log(user[key])
// // 1 - додасть поле mood зі значенням 'happy',
// user.mod = "happy";
// // 2 - замінить hobby на 'skydiving',
// user.hobby = 'skydiving';
// // 3 - замінить значення premium на false,
// user.premium = false;
// // 4 - виведе зміст об'єкта user у форматі '<ключ>:<значення>' використовуя Object.keys() та for...of
// const userkeys = Object.keys(user);
// for (const key of userkeys) {
//   // key — це назва властивості (наприклад, "name")
//   // user[key] — це значення (наприклад, "Taras")
//   console.log(`${key}: ${user[key]}`);
// }
// // const arrs = Object.entries(user);

// // for


// console.log(userKeys);



//===================Завдання 8:==================================================================

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
// let sum = 0;

// const salaryValues = Object.values(salaries);

// for (const salary of salaryValues) {
//     sum += salary;
// }
// console.log(sum);

//===================Завдання 9:==================================================================

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b) {
//         this.value1 = a;
//         this.value2 = b;
//     },
//     exist() {
//         return this.hasOwnProperty('value1') && this.hasOwnProperty('value2');
//         // можна так// this.a !==undefined && this.b !==undefined
//     },
//     sum() {
//         if ( !this.exist()) {
//             return `no properties`;
//         }
//         return this.value1 + this.value2;
//     },
//     mult() {
//         if ( this.exist()=== false) {
//             return `no values`;
//         }
//         return this.value1 * this.value2;
//     },
// }
// console.log(calculator.sum());
// console.log(calculator.sum());

// calculator.read(10, 5);

// console.log(calculator.sum());
// console.log(calculator.mult());

//===================Завдання 10:==================================================================

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             totalPrice += fruit.price * fruit.quantity;
//         }

//     }
//     return totalPrice;
    
// }
// console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Яблуко"));
// console.log(calcTotalPrice(fruits, "Манго"));