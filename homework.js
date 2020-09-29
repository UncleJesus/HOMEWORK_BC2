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
let a = 123;
console.log(a);
const getItemsString = function (array) {
  // Write code under this line
  array.join(` `);
  console.log(`asfasffs`);
  return;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(`sqafasfaf`);
