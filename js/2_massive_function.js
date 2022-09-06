// Module 2 МАСИВИ ТА ФУНКЦІЇ

// ТИПИ ФУНКЦІЙ

// 1.Function declaration ======================================================
// function sayHello() {
//     console.log("Slava Ukraini");
// }
// sayHello();

// 2.Function expression ======================================================
// const sayHello = function () {
//     console.log("Slava Ukraini");
// }
// sayHello();

// 3.Arrow function ======================================================
// ()=>{}

// const sayHello = () => {
//     console.log("Slava Ukraini");
// }
// sayHello();

// 4.IEFF ======================================================
// ()()
 
(() => {
    console.log("Slava Ukraini");
})();


// 5. CLB =======================

// 6. Aninumus ====================


//  АВТОПЕРЕВІРКА ================================================================

// 2.Провірка пароля раннє повернення

// function checkPasword(pasword) {
//     const admin_pasword = "Kupitman911";

//     if (pasword === "Kupitman911") {
//         return "Welcome!";
//     }
//     return "Руський воєнний корабль іди на ХУЙ !!!";
// }

// console.log(checkPasword("Kupitman911"));

// console.log(checkPasword("cosmos"));

// ==============================================================================

// 3.Провірка можливості замовлення (раннє повернення)

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "Your order is empty!";
//     }
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(20, 30));
// console.log(checkStorage(34, 0));

// ==============================================================================

// 4.Створення масиву

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// ==============================================================================

// 5.Доступ до елементів за індексом

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ==============================================================================

// 6.Перевизначення елемента

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// ==============================================================================

// 7.Довжина масиву ?

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// ==============================================================================

// 8.Індекс останнього елемента

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// ===============================================================================

// 9.Крайні елементи масиву

// const fruits = ["apple", "peach", "pear", "banana"];

// function getExtremeElements(array) {
//     return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(fruits));

// ===============================================================================

// 10. Метод рядків split(delimiter) - Перетворення рядка на масив

// function splitMessage(message, delimiter) {
//     let words;

//     words = message.split(delimiter);

//     return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// ================================================================================

// 11.Сервіс гравіювання (ділення на слова та обчислення)

// function calculateEngravingPrise(message, pricePerWord) {
//     const words = message.split(" ");
//     return words.length * pricePerWord;
// }

// console.log(calculateEngravingPrise("go it", 10));

// ===============================================================================

// 12.Метод масиву join(delimiter)

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruit = ["M", "a", "n", "g", "o"]

// function makeStringFromArray(array, delimiter) {
//     let string;

//     string = array.join(delimiter);
//     return string;
// }

// console.log(makeStringFromArray(fruit, ""));
// console.log(makeStringFromArray(fruits, "-"));

// ===============================================================================

// 13.Генератор Slug

// function slugify(title) {
//     let slug;
//     const normalizedToLower = title.toLowerCase();
//     const makeArrayFromString = normalizedToLower.split(" ");
//     slug = makeArrayFromString.join("-");
//     return slug;
// }

// console.log(slugify("Gargat family The Best"));

// ============================================================
//    Спрощений метод
 
// function slugify(title) {
//     const slug = title.toLowerCase().split(" ").join("-");
//     return slug;
// }

// console.log(slugify("Gargat family The Best"));

// ===============================================================================

// 14.Метод Slice

// const fruits = ["apple", "plum", "pear", "orange", "lemon"];

// const firstTwoEls = fruits.slice(0, 2);
// const notExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(notExtremeEls);
// console.log(lastThreeEls);

// ===============================================================================

// 15.Метод Concat()   об'єднання масивів

// const girls = ["Nicole", "Kait", "Monique", "Chanel"];
// const boys = ["Carlos", "Andrii", "Sergio"];
// const childrens = ["Mark", "Niki"];

// const friends = girls.concat(childrens, boys);

// console.log(friends);

// ===============================================================================

// 16.Композиція масивів та визначення макс. довжини

// const firstArray = ["fish", "hot-dog", "pateto"];
// const secondArray = ["cola", "beer", "juice"];


// function makeArray(firstArray, secondArray, maxLength) {
//     const mainArray = firstArray.concat(secondArray);
//     const result = mainArray.slice(0, maxLength);
//     return result;
// }

// console.log(makeArray(firstArray, secondArray, 4));

// ===============================================================================

// 17.Цикл FOR

// const start = 5;
// const end = 15;

// for (let i = start; i <= end; i += 2) {
//     console.log(i);
// }

// ===============================================================================

// 18.Сума чисел (цикл FOR) number має сумуватись від 1 і до намбер.
//     якщо number 3 тоді 1+2+3;

// let total = 0;

// function calculateTotal(number) {
//     for (let idx = 1; idx <= number; idx += 1) {
//         total += idx;
//     }
//     return total;
// }

// console.log(calculateTotal(4));

// ===============================================================================

// 19.Ітерація по масиву

// const myOrder = ["Pizza", "Pasta", "Burger", "Fish"];

// for (let idx = 0; idx < myOrder.length; idx += 1) {
//     const dish = myOrder[idx];
//     console.table(dish);
// }

// ===============================================================================

// 20.Обчислення суми покупки (For)

// function calculateTotalPrice (order) {
//     let total = 0;
//     for (let idx = 0; idx < order.length; idx += 1) {
//         total += order[idx];
//     }
//     return total;
// }

// console.log(calculateTotalPrice([4, 2, 6]));

// ===============================================================================

// 21.Пошук найдовшого слова

// function findLongestWord(string) {
//     let longestWords = ("");
//     const stringSplit = string.split(" ");

//     for (let idx = 0; idx < stringSplit.length; idx += 1) {
//         if (stringSplit[idx].length > longestWords.length) {
//             longestWords = stringSplit[idx];
//         }
//     }
//     return longestWords;
// }

// console.log(findLongestWord('JS is hardest then html'));

// =================================================================================

// 22.Метод push()

//
// =================================================================================

// 23.Фільтрація масиву чисел

// function filterArray(numbers, value) {
//     const finalArray = [];
//     for (let idx = 0; idx < numbers.length; idx += 1) {
//         if (numbers[idx] > value) {
//             finalArray.push(numbers[idx]);
//         }
//     }
//     return finalArray;
// }

// console.log(filterArray([2, 4, 6, 7, 9, 13, 17, 21], 6));

// =================================================================================

// 24.Метод Includes()

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit);
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("orange"));

// =================================================================================

// 25.Спільні елементи

// function getCommonElements(array1, array2) {
//     let result = [];
//     for (let idx = 0; idx <= array2.length; idx += 1) {
//         if (array2.includes(array1[idx])) {
//             result.push(array1[idx]);
//         }
//     }
//     return result;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// ==================================================================================

// 26.Цикл For .... Of  (перебирає об'єкти, заміна For якщо не треба лічильника)

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const item of order) {
//         total += item;
//     }
//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ==================================================================================

// 27.Фільтрація масиву чисел 2.0  (for ... of)

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ==================================================================================

// 28.Оператор % (залишок від ділення)

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// ==================================================================================

// 29.Парні числа

// function getEvenNumbers(start, end) {
//     let result = [];
    
//     for (let idx = start; idx <= end; idx += 1) {
//         if (idx % 2 === 0) {
//             result.push(idx);
//         }
//     }
//     return result;
// }

// console.log(getEvenNumbers(3, 11));

// ==================================================================================

// 30.Оператор BREAK перериває цикл щойно знаходить те що потрібно (поза функцією)

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// ==================================================================================

// 31.Оператор BREAK VS RETURN (return перериває в функції)

// function firstFive(start, end, divisor) {
//     for (let i = start; i <= end; i += 1) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }

// }

// console.log(firstFive(6, 20, 5));

// ===================================================================================

// 32.Функція includes()

// function includes(array, value) {
//     for (const item of array) {
//         if (item === value) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));

// ===================================================================================

// Пошук найбільшого числа
 
// const numbers = [13, 46, 34,678, 78, 456, 7];

// let bigestNumber = 0;

// for (const number of numbers) {
//     if (number > bigestNumber) {
//         bigestNumber = number;
//     }
// }
// console.log(bigestNumber);

// =====================================================================================