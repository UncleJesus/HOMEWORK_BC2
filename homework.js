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

function formatString(string, maxLength = 40) {
  // Write code under this line
  let stringLength = string.length;
  let updatedString = ``;

  if (stringLength <= maxLength) {
    return `${string}`;
  } else {
    updatedString = string.slice(0, maxLength);
    return `${updatedString}...`;
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
//'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
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

function filterArray(array) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (Number.isFinite(array[i])) {
      numbers += array[i];
    }
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, "100"]));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]
