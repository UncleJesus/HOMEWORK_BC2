// !MODULE 1

//?  --------------------Задание 1

// const name = "«Генератор защитного поля»"; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// // console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// // console.log(secondMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

//?  --------------------Задание 2

// const invoice = 150;
// const stock = 100;

// // Write code under this line
// let message = "Заказ оформлен, с вами свяжется менеджер";
// if (invoice <= stock) {
//   console.log(message);
// } else {
//   message = `На складе недостаточно товаров!`;
//   console.log(message);
// }

// ?  --------------------Задание 3
// const userPassword = "jqueryismyjam";

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// // Write code under this line
// if (userPassword === "jqueryismyjam") {
//   message = ACCESS_IS_ALLOWED;
//   console.log(message);
// } else {
//   message = ACCESS_DENIED;
//   console.log(message);
// }
// if (userPassword === null) {
//   message = CANCELED_BY_USER;
//   console.log(message);
// }

//  ?  --------------------Задание 4
// const orderPieces = 7;
// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let totalPrice = orderPieces * pricePerDroid; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;
// if (credits >= totalPrice) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else {
//   message = ACCESS_DENIED;
// }
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// }
// console.log(message);

// ?   --------------------   Задание 5

// const countryName = prompt(`Введите страну`);

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   // Write code on this line
//   switch (country) {
//     case `Китай`:
//       price = 100;
//       break;
//     case `Австралия`:
//       price = 170;
//       break;
//     case `Индия`:
//       price = 80;
//       break;
//     case `Ямайка`:
//       price = 120;
//       break;
//   }
// }
// if (price > 0) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } else {
//   message = `В выбранную страну доставка недоступна.`;
// }
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// }
// console.log(message);

// Ты успешно завершил домашнее задание 1-го модуля!

// !MODULE 2

// ? Задание 1

// const getItemsString = function (array) {
//   // Write code under this line
//   let result = ``;
//   for (let i = 0; i < array.length; i++) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// getItemsString([5, 10, 15]);

// ? Задание 2

// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   (pricePerWord = pricePerWord * message.split(` `).length); // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// ? Задание 3

// function findLongestWord(string) {
//   let stringLength = string.split(` `);
//   let longest = 0;
//   let word = ``;
//   for (let i = 0; i < stringLength.length; i++) {
//     if (longest < stringLength[i].length) {
//       longest = stringLength[i].length;
//       word = stringLength[i];
//     }
//   }
//   return word;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // 'jumped'

// console.log(findLongestWord("Google do a roll"));
// // 'Google'

// console.log(findLongestWord("May the force be with you"));
// // 'force'

// ? Задание 4

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let stringLength = string.length;
//   let updatedString = ``;

//   if (stringLength <= maxLength) {
//     return `${string}`;
//   } else {
//     updatedString = string.slice(0, maxLength);
//     return `${updatedString}...`;
//   }
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// //'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// 'Vestibulum facilisis, purus ne...'

// ? Задание 5
// function checkForSpam(str) {
//   "use strict";
//   // Write code under this line
//   let lowerString = str.toLowerCase();
//   return lowerString.includes(`spam`) || lowerString.includes(`sale`);
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ? Задание 6
// function mapArray(array) {
//   "use strict";
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// ? Задание 7

// function filterArray(array) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // // [1]

// console.log(filterArray([0, -0, 100, "100"]));
// // // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// ? Задание 8
// function reduceArray(array) {
//   "use strict";

//   let total = 0;
//   // Write code under this line
//   if (array !== []) {
//     for (let i = 0; i < array.length; i++) {
//       total += array[i];
//     }
//   }
//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// ? Задание 9

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   if (login.length >= min && login.length <= max) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   for (let i = 0; i < allLogins.length; i += 1) {
//     return allLogins.includes(login);
//   }
// }

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   for (let i = 0; i < allLogins.length; i += 1) {
//     if (isLoginUnique(allLogins, login)) {
//       return REFUSAL;
//     } else if (!isLoginValid(login)) {
//       return ERROR;
//     } else {
//       allLogins.push(login);
//       return (message = SUCCESS);
//     }
//   }
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, "Ajax"));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// ? Задание 9  КРАТКОЕ РЕШЕНИЕ

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   return login.length >= min && login.length <= max;
// }

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === false) {
//     message = ERROR;
//   } else if (isLoginUnique(allLogins, login) === false) {
//     message = REFUSAL;
//   } else {
//     allLogins.push(login);
//     message = SUCCESS;
//   }
//   return message;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// !MODULE 3

// ? Задание 1

// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// //Write code under this line
// user.mood = "happy";
// user[`full time`] = true;
// user.hobby = "skydiving";
// user.premium = false;

// console.log(user);

// const keys = Object.keys(user);
// // Write code under this line
// for (let key of keys) {
//   message = `${key}:${user[key]}\n`;
//   console.log(message);
// }

// console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

// ? Задание 2
// const countProps = function (obj) {
//   "use strict";

//   // Write code under this line
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// ? Задание 3

// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line
//   let max = 0;
//   let bestEmployee = ``;
//   for (let employee in employees) {
//     let numOfTasks = employees[employee];
//     if (numOfTasks > max) {
//       max = numOfTasks;
//       bestEmployee = employee;
//     }
//   }
//   return bestEmployee;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

// ? Задание 4

// const countTotalSalary = function (employees) {
//   "use strict";
//   // Write code under this line
//   let totalSum = 0;
//   for (let employee in employees) {
//     let salaryOFEmployee = employees[employee];
//     totalSum += salaryOFEmployee;
//   }
//   return totalSum;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// ? Задание 5

// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   let propOfProduct = [];
//   for (let item of array) {
//     let value = item[prop];
//     if (value !== undefined) {
//       propOfProduct.push(value);
//     }
//   }

//   return propOfProduct;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
// //  []

// ? Задание 6

// function calculateTotalPrice(array, prop) {
//   "use strict";
//   // Write code under this line
//   let totalPrice = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].name === prop) {
//       totalPrice += array[i].price * array[i].quantity;
//       console.log(totalPrice);
//     }
//   }
//   return totalPrice;
// }
// //   let totalPrice = 0;
// //   for (let eachProduct of array) {
// //     let item = eachProduct[prop];

// //     if (prop === item) {
// //       totalPrice = eachProduct.price * eachProduct.quantity;
// //     }
// //   }
// //   return totalPrice;
// // }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080

// console.log(calculateTotalPrice(products, "Сканер"));
// // 10200

// console.log(calculateTotalPrice(products, "Захват"));
// // 2400

// console.log(calculateTotalPrice(products, "Дроид"));
// // 2800

// !MODULE 3
// ? Задание 1
// // Write code under this line
// const addIndex = (element, index) => element + index;
// // Write code under this line
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   "use strict";
//   // Write code under this line
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]

// ? Задание 2
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     let arr = array;
//     if (cb(element, index, arr) === true) {
//       numbers.push(element);
//     }
//   }

//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// ? Задание 3

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   "use strict";
//   let i;
//   let accum;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// ? Задание 4
// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3', 'order-4']

// ? Задание 5
// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter((item) => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   const act = action(itemName);
//   const msg = `Invoking action on ${itemName}`;
//   return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//   "Medkit",
//   inventory.add.bind(inventory) // Write code in this line
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//   "Gas mask",
//   inventory.remove.bind(inventory) // Write code in this line
// );

// const arrayRemove = [...inventory.items];

// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']
