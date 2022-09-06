// АВТОПЕРЕВІРКА ========================================================================

// 1. Створення об'єкта

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// ======================================================================================

// 2.Вкладені властивості

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// console.log(apartment);

// ======================================================================================

// 3.Доступ до властивостей через крапку

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// ======================================================================================

// 4.Доступ до вкладених властивостей

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];

// console.log(numberOfTags);
// console.log(lastTag);

// ======================================================================================

// 5.Доступ до властивостей через квадратні дужки

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptDescr);

// ======================================================================================

// 6.Зміна значення властивості

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

// ======================================================================================

// 7.Додавання властивостей

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };

// console.log(apartment);

// ======================================================================================

// 8.Короткі властивості

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// console.log(product);

// ======================================================================================

// 9.Обчислювані властивості

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials);

// ======================================================================================

// 10. Цикл FOR ... IN   (створення масиву ключів та властивостей)

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// };

// console.log(keys);
// console.log(values);

// ======================================================================================

// 11.HasOwnProperty (перевірка на власні властивості)

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
//     apartment.descr ="Spacious apartment in the city center";
//     apartment.rating = 4;
//     apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//     }
// };

// console.log(keys);
// console.log(values);

// ======================================================================================

// 12.Підрахунок властивостей

// function countProps(object) {
//     let propCount = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     };
//     return propCount;
// }

// console.log(countProps({ name: "Mamgo", age: 30 }));

// ======================================================================================

// 13.Object.keys метод

// const apartment= {
//     descr: "Luxury apartment",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//         values.push(apartment[key]);
//     }

// console.log(keys);
// console.log(values);

// ======================================================================================

// 14.Підрахунок властивостей методом Object.keys

// function totalKeys(object) {
//     const total = Object.keys(object).length;
//     return total;
// };

// console.log(totalKeys({ name: "Mamgo", age: 30 }));

// ======================================================================================

// 15.Object.values метод

// const apartment= {
//     descr: "Luxury apartment",
//     rating: 4,
//     price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// ======================================================================================

// 16.Витрати на зарплату

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, siri: 450, lora: 50 }));

// ======================================================================================

// 17.Масив об'єктів (сортування по типах ключів)

// const colors = [
//     { hex: "#456896", rgb: "71,127,23" },
//     { hex: "#468896", rgb: "77,247,13" },
//     { hex: "#452396", rgb: "74,57,53" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// };

// console.log(hexColors);
// console.log(rgbColors);

// ======================================================================================

// 18.Пошук об'єкта за значенням властивості

// const products = [
//     { name: "Radar", price: 1200, quantity: 4 },
//     { name: "Scaner", price: 4700, quantity: 3 },
//     { name: "Hymars", price: 6500, quantity: 7 },
// ];


// function getProductPrice(productName) {
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null;
// };

// console.log(getProductPrice("Scaner"));
// console.log(getProductPrice("Javelin"));

// ======================================================================================

//19.Колекція значень властивості

// const products = [
//     { name: "Radar", price: 1200, quantity: 4 },
//     { name: "Scaner", price: 4700, quantity: 3 },
//     { name: "Hymars", price: 6500, quantity: 7 },
// ];

// function getAllPropValues(propName) {
//     const propValues = [];
//     for (let product of products) {
//         if (product.hasOwnProperty(propName)) {
//             propValues.push(product[propName]);
//         }
//     }
//     return propValues;
// };

// console.log(getAllPropValues("price"));

// ======================================================================================

// 20.Загальна вартість товару

// const products = [
//     { name: "Radar", price: 1200, quantity: 4 },
//     { name: "Scaner", price: 4700, quantity: 3 },
//     { name: "Hymars", price: 6500, quantity: 7 },
// ];

// function calculateTotalPrice(productName) {
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Hymars"));

// ======================================================================================

// 21.Деструктуризація об'єктів  (середньоарифметичне вичислення)

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // деструктиризація
// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// ======================================================================================

// 22.Значення за замовчуванням (щоб не присвоювалось undefined)

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const { yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(icon);

// ======================================================================================

// 23.Зміна імені змінної

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

// ======================================================================================

// 24.Деструктуризація в циклах

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// преший варіант
// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// };

// for (const color of colors) {
//     const { hex, rgb } = color;
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// };

// console.log(hexColors);
// console.log(rgbColors);

// ======================================================================================

// 25.Глибока деструктиризація (деструктиризація властивостей вкладених об'єктів)

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };

// const {
//     today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//     tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
    
// } = forecast;

// console.log(highTomorrow);
// console.log(todayIcon);

// ======================================================================================

// 26. Патерн "об'єкт налаштувань" ( багато аргументів в одній вункції)

// function calculateMeanTemperature(forecast) {
//     const {
//         today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//     } = forecast;
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));

// ======================================================================================

// 27.Операція  SPREAD при передачі аргументів (математичні функції проведені в масиві)

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// ======================================================================================

// 28.Операція SPREAD під час створення нового масиву

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ======================================================================================

// 29.Операція SPREAD під час створення нового об'єкта

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// ======================================================================================

// 30.Задача картки завдань (незрозуміло ????)

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";

// return { completed, category, priority, ...data}
// };

// ======================================================================================

// 31.Операція REST для збирання всіх аргументів функції

// function add(...args) {
//     let totalArgs = 0;
//     for (const arg of args) {
//         totalArgs += arg;
//     }
//     return totalArgs;
// };

// console.log(add(12, 4, 11, 48));

// ======================================================================================

// 32.Операція REST для збирання частини аргументів функції

// function addOverNum(firstNumber, ...args) {
//     let total = 0;

//     for (const arg of args) if (arg > firstNumber) {
//         total += arg;
//     }

//     return total;
// };

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// ======================================================================================

// 33.Масив збігів (REST)

// function findMatches(first, ...other) {
//     const matches = [];
// for (let idx = 0; idx <= other.length; idx += 1) {
//     if (other.includes(first[idx])) {
//         matches.push(first[idx]);
//     }
// }
//     return matches;
// };

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ======================================================================================

// 34.Методи об'єкта (повернення рядка)

// const bookShelf = {
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     }

// };

// console.log(bookShelf.addBook("GARY"));

// ======================================================================================

// 35.Доступ до властивостей об'єкта в його методах ?????

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
//     },
    
// };

// console.log(bookShelf.updateBook("Haze", "Jenna HAZE"));

// ======================================================================================

// 37. Задача "Крамниця - Зілля у старої жаби" (показ товарів)

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
// };

// console.log(atTheOldToad.getPotions());

// ======================================================================================

// 38. Додаємо товари  ???????

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.getPotions());

// ======================================================================================

// 39. Видалення товару

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
//     removePotion(potionName) {
//         const potionIndex = this.potions.indexOf(potionName);
//         this.potions.splice(potionIndex, 1);
//     },
//     getPotions() {
//         return this.potions;
//     },
    
// };

// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.getPotions());

// ======================================================================================

// 40.Заміна товару

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.indexOf(oldName);
//         this.potions.splice(potionIndex, 1, newName);
//         return `Potion changes`
//     },
// };

// console.log(atTheOldToad.updatePotionName("Speed potion", "Super potion"));
// console.log(atTheOldToad.getPotions());

// ======================================================================================

// 41. Розширення інвентарю. Масив обєктів + методи

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
    
//     removePotion(potionName) {
//         for (const potion of this.potions) {
//             if (potion.name === potionName) {
//                 let potionIdx = this.potions.indexOf(potion);
//                 this.potions.splice(potionIdx, 1);
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },

//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
            
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     }
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "NEW SKIN"));
// console.log(atTheOldToad.removePotion("Stone skin"));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 620 }));
// console.log(atTheOldToad.getPotions());

// ======================================================================================