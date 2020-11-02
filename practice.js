// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// !EX

// const arr2 = [];

// for (let i = 0; i < 10; i++) {
//   arr2[i] = i + 1;
// }
// console.log(arr2);

// !EX

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let el of arr) {
//   if (el === 5) {
//     console.log(el);
//     break;
//   }
// }

// !EX

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let newArr = [];
// let sum = 0;

// for (let el of matrix) {
//   for (let j of el) {
//     newArr.push(j);
//     sum += j;
//     console.log(j);
//   }
// }
// console.log(sum);

// !EX

// let str = `Hi, my name is Petuk`;
// let res = str.split(` `).join(` `);
// console.log(res);

// !EX  Проверка на полиндром

// let str = `aBBA`;
// let res = str.split(` `).reverse().join(` `);
// console.log(res.toLowerCase() === str.toLowerCase());

// !EX
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let a = 10;
// if (arr.includes(a)) {
//   console.log(`includes`);
// } else {
//   console.log(`not Includes`);
// }

// !EX

// let arr = [];

// arr.push(`1`);
// arr.push(`2`);
// arr.push(`3`);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.unshift(`0`);
// console.log(arr);
// arr.shift();
// console.log(arr);

// !EX
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let newArr = arr.slice(3);
// console.log(newArr);

// !EX

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// arr.splice(1, 2, `Bravo Petuk`);
// console.log(arr);

// !EX

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const arr4 = arr.concat(arr2).concat(arr3);
// console.log(arr4);

// !EX

// let arr = [1, 2, 3];
// let newArr = arr.concat([]);
// arr.push(4);
// console.log(newArr);
// console.log(arr);

// !EX

// const fn = function (n) {
//   return n;
// };
// const res = fn(1);
// console.log(res);

// !EX

// const fn = function (a = 0, b = 0) {
//   return Math.pow(a, b);
// };
// const res = fn(2);
// console.log(res);

// !EX

// const createPersone = function (name, profession, experience, sex, status) {
//   return {
//     name: name,
//     profession: profession,
//     experience: experience,
//     sex: sex,
//     status: status,
//   };
// };
// let john = createPersone(`John`, `Loh`, ` 5 Years`, ` Male`, `Lonely`);
// console.log(john);

// !EX
// const tupaArgumenti = function () {
//   for (let el of arguments) {
//     console.log(el);
//   }
// };
// tupaArgumenti(1, 2, 3, 4, 5, 6, 7, 87, 8, 6, 4);
// tupaArgumenti(2, 3, 45, 5, 65, 65, 51, 5, 125, 15, 15);

// !EX

// const fn = function (...arg) {
//   console.log(arg.join(` `));
// };
// fn(1, 2, 32, 24, 24, 1, 5, 251, 2);

// !EX
// const fn = function (n, ...arg) {
//   for (let i = 0; i < arg.length; i++) {
//     arg[i] = arg[i] * n;
//   }
//   console.log(arg);
// };
// fn(2, 32, 24, 24, 1, 5, 251, 2);

// !EX
// let total = 1000;
// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log(`Введите число больше нуля`);
//     return;
//   }
//   if (amount > balance) {
//     console.log(`Недостаточно средств`);
//     return;
//   }
//   total = balance - amount;
//   console.log(`Ваш баланс - ${total}`);
// };

// withdraw(0, total);
// withdraw(100, total);
// withdraw(400, total);

// !EX

//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const fizzBuzz = function (n) {
//   for (i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`fizzbuzz`);
//     } else if (0 === i % 3) {
//       console.log(`fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz(25);

// !EX
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let sum = 0;

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// !EX
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// const multiplyNumeric = function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (obj[key] === NaN) {
//       console.log(`Это не номер`);
//       return;
//     } else {
//       let allSum = 0;
//       allSum = obj[key] * 2;
//       console.log(allSum);
//     }
//   }
// };
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
//   a: 1,
//   multiplyNumeric,
// };
// multiplyNumeric(menu);

// !EX
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
// let person = {
//   name: "Петр",
//   surname: "Петров",
//   age: "20 лет",
// };

// !EX

// let car = {
//   speed: 0,
//   color: `black`,
//   isEngineOn: false,
//   isLightsOn: false,
//   speedOn(n) {
//     if (car.isEngineOn === true) {
//       car.speed += n;
//     } else {
//       console.log(`Заведите машину`);
//     }
//   },
//   speedOf(n) {
//     if (car.isEngineOn === true) {
//       car.speed -= n;
//     } else {
//       console.log(`Невозможно сбросить скорость`);
//     }
//   },
//   engineToggle() {
//     car.isEngineOn = true;
//     return;
//   },
//   lightsToggle() {
//     car.isLightsOn = true;
//   },
// };

// car.engineToggle();
// console.log(car.isEngineOn);
// car.lightsToggle();
// console.log(car.isLightsOn);

// car.speedOn(100);
// console.log(car.speed);
// car.speedOf(50);
// console.log(car.speed);

// let engineToggle = function engineToggle() {
//   car.isEngineOn = true;
//   return;
// };
// let lightsToggle = function lightsToggle() {
//   car.isLightsOn = true;
// };
// let speedOn = function speedOn(n) {
//   if (isEngineOn === true) {
//     car.speed += n;
//     console.log(car.speed);
//   } else {
//     console.log(`Заведите машину`);
//   }
// };
// let speedOf = function speedOf(n) {
//   if (isEngineOn === true) {
//     car.speed -= n;
//     console.log(car.speed);
//   } else {
//     console.log(`Невозможно сбросить скорость`);
//   }
// };

// !EX

// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
// const workers = [
//   { name: "Alex", salary: 100, isActive: true },
//   { name: "Rita", salary: 80, isActive: false },
//   { name: "John", salary: 100, isActive: true },
//   { name: "Derek", salary: 200, isActive: false },
// ];

// let fairedWorker = function uFired(n) {
//   for (let worker of workers) {
//     if (worker.isActive === false && worker.salary > 100) {
//       let indexOfWorker = workers.indexOf(worker);
//       console.log(`${worker.name} U fired`);
//       workers.splice(indexOfWorker, 1);
//     }
//   }
//   console.log(workers);
// };
// fairedWorker(workers);

// !EX

// Напишите ф-цию, которая принимает аргументом массив обьектов и строку с названием камня.
// Ф-ция считает сколько будет стоить то к-во камней, которой записано в объекте
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];
// let wholePrice = 0;
// let calculateWholePrice = function price(a, b) {
//   for (let stone of b) {
//     if (a === stone.name) {
//       wholePrice = stone.price * stone.quantity;
//     }
//   }
//   console.log(wholePrice);
// };

// calculateWholePrice(`Изумруд`, stones);
// calculateWholePrice(`Бриллиант`, stones);
// calculateWholePrice(`Сапфир`, stones);
// calculateWholePrice(`Щебень`, stones);

// !EX

// const calculator = function (num, callback) {
//   return callback(num);
// };
// const plus = function (num) {
//   return Number(prompt("Enter your num: ")) + num;
// };
// const minus = function (num) {
//   return prompt("Enter your num: ") - num;
// };
// let resultPlus = calculator(10, plus);
// console.log(resultPlus);
// let resultMinus = calculator(10, minus);
// console.log(resultMinus);

// !EX

// // Напишите функцию которая принимает 3 параметра: название, цена, колбек
// // Колбек создаёт объект с товаром и выводит его в консоль

// const threeParameters = function (name, price, callback) {
//   callback(name, price);
// };

// let callbackFunction = function (name, price) {
//   let tovar = { name, price };
//   emptyMassive.push(tovar);
// };
// let emptyMassive = [];
// console.log(emptyMassive);

// threeParameters(`Grisha`, 30, callbackFunction);
// threeParameters(`Dima`, 20, callbackFunction);
// threeParameters(`Sasha`, 25, callbackFunction);
// threeParameters(`Kolya`, 35, callbackFunction);
// threeParameters(`Vova`, 64, callbackFunction);

// !EX

// let money = 85;
// Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
// const filter = function (arrayOfCars, money, callback) {
//   const arrayOfNewCars = [];
//   for (let car of arrayOfCars) {
//     const passed = callback(car);
//     if (passed) {
//       arrayOfNewCars.push(car);
//     }
//   }
//   console.log(arrayOfNewCars);
// };

// const priceOfCar = function (a) {
//   return a.cost < money;
// };

// let cars = [
//   { name: "ferrari", cost: 100 },
//   { name: "lambo", cost: 90 },
//   { name: "bmw", cost: 80 },
//   { name: "subaru", cost: 60 },
// ];
// const priceOfcars = filter(cars, money, priceOfCar);

// !EX

// const counter = function (n) {
//     let state = n;
//     const onDecrement = function (n) {
//         state -= n;
//         console.log(state);
//     }
//     const onIncrement = function (n) {
//         state += n;
//         console.log(state);
//     }
//     return { onDecrement, onIncrement }
// }
// // counter() === {
// //     onDecrement: <fn>,
// //     onIncrement: <fn>
// //     }
// // counter().onIncrement();
// // counter().onIncrement();
// // counter().onIncrement();
// let counterA = counter(10);
// counterA.onIncrement(2);
// counterA.onIncrement(10);
// counterA.onIncrement(500);
// counterA.onDecrement(500);
// // let counterB = counter();
// // counterB.onDecrement();
// // counterB.onDecrement();
// // counterB.onDecrement();
// // counterB.onDecrement();
// console.log(counter());

// !EX

// const shopMechanism = function () {
//   let state = [];
//   const addItem = function (name, price, color) {
//     state.push({ name, price, color });
//   };
//   const discount = function () {
//     for (let el of state) {
//       el.price *= 0.9;
//     }
//   };
//   const showCart = function () {
//     console.log(state);
//   };
//   const clearCart = function () {
//     state = [];
//   };
//   return { addItem, discount, showCart, clearCart };
// };
// let customerA = shopMechanism();
// customerA.addItem("Guitar", 100, "black");
// customerA.addItem("T-shirt", 30, "black");
// customerA.addItem("Car", 1000, "black");
// customerA.discount();
// customerA.clearCart();
// customerA.showCart();

// !EX

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:

// const sum = function (a) {
//   let sum = 0;
//   return function makeSum(b) {
//     sum = a + b;
//     console.log(sum);
//   };
// };

// sum(1)(2);
// sum(5)(-1);

// !EX

// const carShopMechanism = function () {
//   let carShopArr = [];
//   let addItem = function (nameOfCar, colorOfCar, priceOfCar) {
//     carShopArr.push({ nameOfCar, colorOfCar, priceOfCar });
//     if (carShopArr.length > 5) {
//       allCarsArr = [...allCarsArr, ...carShopArr.splice(0)];
//     }
//   };
//   let clearCart = function () {
//     carShopArr = [];
//   };

//   let showCart = function () {
//     console.log(carShopArr);
//   };
//   let discount = function () {
//     for (car of carShopArr) {
//       car.priceOfCar *= 0.9;
//     }
//   };
//   let addYear = function (n, name) {
//     for (car of carShopArr) {
//       if (car.nameOfCar === name) {
//         car.nameOfCar = `${car.nameOfCar}-${n}`;
//       }
//     }
//   };
//   return { addItem, clearCart, showCart, discount, addYear };
// };

// let carShop = carShopMechanism();
// let allCarsArr = [];
// carShop.addItem(`BMW`, `Черный`, 340);
// carShop.addItem(`Alfa Romeo`, `Желтый`, 430);
// carShop.addItem(`Acura`, `Серый`, 3540);
// carShop.addItem(`Aston Martin`, `Фиолетовый`, 3234140);
// carShop.addItem(`Audi`, `Черный`, 12740);
// carShop.addItem(`Bentley`, `Красный`, 7640);
// carShop.addItem(`Bugatti`, `Синий`, 140);
// carShop.addItem(`Buick`, `Красный`, 9440);
// carShop.addItem(`Cadillac`, `Белый`, 28145740);
// carShop.addItem(`Cadillac`, `Белый`, 28145740);
// carShop.addItem(`Cadillac`, `Белый`, 28145740);
// carShop.addItem(`Bugatti`, `Синий`, 140);
// carShop.addItem(`Bugatti`, `Синий`, 140);
// carShop.addItem(`Bugatti`, `Синий`, 140);
// carShop.addItem(`Cadillac`, `Белый`, 28145740);
// console.log(allCarsArr);
// carShop.addYear(10, `Cadillac`);
// carShop.showCart();

// !EX

// const greet = function () {
//   console.log(
//     `You've bought ${(this.weight && this.color) || ""} for ${
//       this.price
//     }, weight: ${this.weight || 0} `
//   );
// };
// const hotel = { name: "Resort Hotel" };
// const hotel2 = { name: "Rixos" };
// // greet.call(hotel, 'Genadii');
// // greet.apply(hotel2, ['Vasilii']);
// const car1 = { name: "Ferrari", color: "red", price: 100 };
// const car2 = { name: "BMW", color: "black", price: 80 };
// // greet.call(car1);
// // greet.call(car2);
// let ferrari = greet.bind(car1);
// let bmw = greet.bind(car2);
// car2.weight = 100500;
// ferrari();
// bmw();

// !EX

// let obj, method;
// obj = {
//   go: function () {
//     console.log(`this is:`, this);
//   },
// };

// obj.go();
// (method = obj.go)();
// (obj.go || obj.stop).call(obj);

// !EX

// function makeUser() {
//   return {
//     name: `John`,
//     ref: function () {
//       return this.name;
//     },
//   };
// }
// let user = makeUser;
// alert(user.ref());

// !EX
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().showStep();

// !EX

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// // let loginOK = user.loginOk.bind(user, user.name);
// // let loginFail = user.loginFail.bind(user, user.name);
// // askPassword(user.loginOk, user.loginFail);
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// !EX
// Дан массив с числами(Написать самим). Ваша ф-я возвращает среднее арифметическое его элементов
// let massive = [5, 6, 7, 8];

// let middleNumber = function (n) {
//   let sum = 0;
//   let sredneeChislo = 0;
//   for (let i = 0; i < n.length; i += 1) {
//     sum += n[i];
//   }
//   sredneeChislo = sum / n.length;
//   console.log(sum);
//   console.log(sredneeChislo);
// };

// middleNumber(massive);
// !EX
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// Анаграмма - слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// !EX
// Напишите функцию f, которая будет обёрткой вокруг другой функции g. Функция f обрабатывает первый аргумент сама, а остальные аргументы передаёт в функцию g, сколько бы их ни было.

// function f(n, ...arr) {
//   /* ваш код */

//   console.log(`${n}`, g(arr));
// }
// function g(arr) {
//   let sum = 0;
//   for (let el of arr) {
//     sum += el;
//   }
//   return sum;
// }
// f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
// f("тест2", 1, 2, 3);
// f("тест3", 1, 2, 3, 4); // f выведет "тест2", дальше g посчитает сумму "6"
// // Код функции f не должен зависеть от количества аргументов.
// !EX
// const CarCreator = function(name, model, type, color) {
// this.name = name;
// this.model = model;
// this.type = type;
// this.color = color;
// this.pi = 3.14;
// this.presentation = function () {
// console.log(`${this.name}, ${this.color}`)
// }
// this.soldTo = function(name) {
//   console.log(`${this.name} was sold to ${name}`)
// }
// }
// let ferrari = new CarCreator('Ferrari', '487', 'coupe', 'red');
// let bmw = new CarCreator('BMW', '487', 'coupe', 'red');
// ferrari.presentation();
// bmw.presentation();
// ferrari.maxSpeed = 420;
// console.log(ferrari);
// console.log(bmw);
// ferrari.soldTo('Vasya');

// !EX
// Cоздайте ф - ю конструктор, ItemToSale принимающую параметрами(size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.

// let statstics = {
//   soldGenaral: 0,
//   soldTshirts: 0,
//   soldJackets: 0,
// };
// const ItemToSale = function (size, type, color) {
//   this.size = size;
//   this.type = type;
//   this.color = color;
//   this.saveToSatatistics = function () {
//     if (this.type === `Tshirt`) {
//       statstics.soldGenaral += 1;
//       statstics.soldTshirts += 1;
//     }
//     if (this.type === `Jacket`) {
//       statstics.soldGenaral += 1;
//       statstics.soldJackets += 1;
//     }

//     return statstics;
//   };
// };
// let tshirt = new ItemToSale(`30`, `Tshirt`, `black`);
// let jacket = new ItemToSale(`45`, `Jacket`, `green`);

// tshirt.saveToSatatistics();
// tshirt.saveToSatatistics();
// tshirt.saveToSatatistics();
// jacket.saveToSatatistics();
// console.log(statstics);

// !EX
// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

// let allVotes = {};

// const President = function (nameOfVoter) {
//   this.nameOfVoter = nameOfVoter;
//   this.vote = function (presidentName) {
//     if (presidentName === `Bush`) {
//       allVotes[presidentName] = `${this.nameOfVoter}`;
//     }
//     if (presidentName === `Trump`) {
//       allVotes[presidentName] = `${this.nameOfVoter}`;
//     }
//     if (presidentName === `Obama`) {
//       allVotes[presidentName] = `${this.nameOfVoter}`;
//     }
//     return allVotes;
//   };
// };
// let voterDima = new President(`Dima`);
// let voterOleg = new President(`Oleg`);
// let voterArtem = new President(`Artem`);

// voterDima.vote(`Obama`);
// voterArtem.vote(`Trump`);
// voterOleg.vote(`Bush`);
// voterDima.vote(`Trump`);

// console.log(allVotes);

// !EX
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
// const Calculator = function () {
//   this.read = function () {
//     this.a = +prompt(`Введте а`);
//     console.log(this.a);
//     this.b = +prompt(`Введте b`);
//     console.log(this.b);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// };
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// !EX
// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:
// let Accumulator = function (startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt(`Введите число`);
//     console.log(this.value);
//   };
// };
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений
// !EX
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// !EX
// class Animal {
//   constructor(arr) {
//     this.name = arr[0];
//     this.nick = arr[1];
//     this.breed = arr[2];
//     this.sayMyow = function (randomVoice) {
//       console.log(`${this.nick} says ${randomVoice}...  `);
//     };
//   }
// }
// let voices = ["Myow", "bark", "gav", "bleat"];
// let randomVoice = voices[Math.round(Math.random() * (voices.length - 1))];
// let cat = new Animal(["cat", "Piton", "britan"]);
// cat.sayMyow(randomVoice);
// !EX
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//     this.getSalary = function () {
//       return this.rate * this.days;
//     };
//   }
// }

// let worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// !EX

// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы - геттеры.Наш класс теперь будет работать так:
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//     this.getSalary = function () {
//       return this.rate * this.days;
//     };
//   }
// }

// let worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// !EX
// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
// Наш класс теперь будет работать так:
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }

//   set setRate(value) {
//     this.rate = value;
//   }
//   set setDays(value) {
//     this.days = value;
//   }
// }

// let worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// !EX
// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:
// let str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
// !EX
// const inventors = [
//   {
//     first: "Albert",
//     last: "Einstein",
//     year: 1879,
//     passed: 1955,
//   },
//   {
//     first: "Isaac",
//     last: "Newton",
//     year: 1643,
//     passed: 1727,
//   },
//   {
//     first: "Galileo",
//     last: "Galilei",
//     year: 1564,
//     passed: 1642,
//   },
//   {
//     first: "Marie",
//     last: "Curie",
//     year: 1867,
//     passed: 1934,
//   },
//   {
//     first: "Johannes",
//     last: "Kepler",
//     year: 1571,
//     passed: 1630,
//   },
//   {
//     first: "Nicolaus",
//     last: "Copernicus",
//     year: 1473,
//     passed: 1543,
//   },
//   {
//     first: "Max",
//     last: "Planck",
//     year: 1858,
//     passed: 1947,
//   },
//   {
//     first: "Katherine",
//     last: "Blodgett",
//     year: 1898,
//     passed: 1979,
//   },
//   {
//     first: "Ada",
//     last: "Lovelace",
//     year: 1815,
//     passed: 1852,
//   },
//   {
//     first: "Sarah E.",
//     last: "Goode",
//     year: 1855,
//     passed: 1905,
//   },
//   {
//     first: "Lise",
//     last: "Meitner",
//     year: 1878,
//     passed: 1968,
//   },
//   {
//     first: "Hanna",
//     last: "Hammarström",
//     year: 1829,
//     passed: 1909,
//   },
// ];

// // ?- Вывести массив имён учёных/изобретателей

// const namesOfInventors = inventors.map(
//   (inventor) => `${inventor.first} ` + `${inventor.last}`
// );
// console.log(namesOfInventors);

// // ?- Вывести массив тех кто родился в 19-ом веке

// const namesOfInventorsWhoBorn = inventors.filter((inventor) => {
//   if (19 === Math.floor(inventor.year / 100 + 1)) {
//     return inventor;
//   }
// });
// console.log(namesOfInventorsWhoBorn);

// //? - Вывести массив тех, кто прожил больше 50-ти лет
// const namesOfInventorsWho50YearsOld = inventors.filter((inventor) => {
//   if (inventor.passed - inventor.year > 50) {
//     return inventor;
//   }
// });
// console.log(namesOfInventorsWho50YearsOld);

// // ?- Вывести фамилии тех, в чьём имени есть буква "е"

// const e = inventors.filter((el) => {
//   return el.first.includes(`e`) || el.first.includes(`E`);
// });

// //? - Получить массив объектов отсортированный по имени (по алфавиту).
// const n = inventors.map((el) => el.first).sort();
// console.log(n);

// //? - Найти сумму лет жизни всех учёных
// const s = inventors.reduce((sum, el) => {
//   return (sum += el.passed - el.year);
// }, 0);
// console.log(s);
// !EX
// const body = document.querySelector(`body`);
// const ul = document.querySelector(`ul`);

// let li;
// for (let i = 0; i < 5; i++) {
//   li = document.createElement(`li`);
//   li.classList.add(`round`);
//   ul.append(li);
// }

// !EX
// const body = document.querySelector(`body`);
// for (let i = 0; i < 5; i++) {
//   const div = document.createElement(`div`);
//   div.classList.add(`round`);
//   body.append(div);
// }
// const divList = document.querySelectorAll(`div`);
// divList.forEach((el, i) => {
//   el.textContent = `${i + 1}`;
// });
// !EX
// const body = document.querySelector(`body`);
// for (let index = 0; index < 3; index++) {
//   const img = document.createElement(`img`);
//   body.append(img);
//   let random = Math.floor(Math.random() * 200);
//   img.src = `https://picsum.photos/id/${random}/200/300`;
// }

// !EX
// window.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll event handler invocation every 300ms.");
//   }, 300)
// );

// document.querySelector("input").addEventListener(
//   "input",
//   _.debounce(() => {
//     console.log(
//       "Input event handler invocation after 300ms of inactivity past burst."
//     );
//   }, 300)
// );
// import gallery from `./gallery.js`;

// !EX
// /1) Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый
// li с текстом 'пункт'.
// const itemList = document.querySelector("ul");
// const button = document.querySelector(".buttonLi");
// const addItemToUl = () => {
//   const li = document.createElement(`li`);
//   li.textContent = `Пункт`;
//   itemList.append(li);
//   return itemList;
// };

// const addItemOnLi = (event) => {
//   event.target.nodeName === `LI` ? (event.target.textContent += ` !`) : ``;
// };
// itemList.addEventListener(`click`, addItemOnLi);
// button.addEventListener(`click`, addItemToUl);

// Это должно работать и для вновь добавленных li.
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
// !EX
// const ul = document.querySelector("ul");
// const li = document.querySelector("li");
// const form = document.querySelector("form");
// const btn = document.querySelector("#submit-btn");
// const text = document.querySelector("p");
// const input = document.querySelector("input");

// const changeElemText = (elem) => {
//   const name = prompt(`Введите свое Имя`);
//   elem.target.textContent = name;
// };
// const addElement = (elem) => {
//   elem.preventDefault();
//   ul.insertAdjacentHTML(`beforeend`, `<li><p>${input.value}</p></li>`);
// };
// text.addEventListener(`click`, changeElemText);
// form.addEventListener(`submit`, addElement);
//2) Дан список с именами юзеров ul>li>p. Под таблицей сделайте форму form>input+input, с помощью которой можно будет добавить нового юзера в список.
//  Сделайте так, чтобы при клике на любой елемент появлялся prompt, с помощью которого можно изменить текст имени.
//  Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
// !EX
// const galleryItems = [
//   { preview: "./img/1s.jpeg", fullview: "./img/1L.jpeg", alt: "alt text 1" },
//   { preview: "./img/2s.jpeg", fullview: "./img/2L.jpeg", alt: "alt text 2" },
//   { preview: "./img/3s.jpeg", fullview: "./img/3L.jpeg", alt: "alt text 3" },
//   { preview: "./img/4s.jpeg", fullview: "./img/4L.jpeg", alt: "alt text 4" },
//   { preview: "./img/5s.jpeg", fullview: "./img/5L.jpeg", alt: "alt text 5" },
//   { preview: "./img/6s.jpeg", fullview: "./img/6L.jpeg", alt: "alt text 6" },
// ];

// const image = document.querySelector(".image-gallery");
// const fullview = document.querySelector(".fullview");
// const preview = document.querySelector(".preview");

// galleryItems.forEach((el) => {
//   preview.insertAdjacentHTML(
//     "beforeend",
//     `<li class = "gallery-item">
//   <img class = "gallery-img"
//   width = "320"
//   src = "${el.preview}"
//   data-fullview ="${el.fullview}"
//   alt ="${el.alt}"/>
//   </li>`
//   );
// });

// fullview.insertAdjacentHTML(
//   "beforeend",
//   `<img class = "fullview-img"
//  width = "1280"
//  src=${galleryItems[0].fullview}
//  alt=${galleryItems[0].alt}/>`
// );

// const getPicture = function (e) {
//   e.target.nodeName === "IMG"
//     ? (document.querySelector(".fullview-img").src = e.target.dataset.fullview)
//     : ``;
// };
// preview.addEventListener(`click`, getPicture);
// !EX
// const start = document.querySelector(".start");
// const stop = document.querySelector(".stop");
// const timer = document.querySelector(".timer");

// let time = 0;
// let intervalId;
// const startTimer = function () {
//   intervalId = setInterval(() => {
//     timer.textContent = (time += 1) / 10 + `s`;
//   }, 100);
//   start.setAttribute(`disabled`, true);
// };

// const stopTimer = function () {
//   clearInterval(intervalId);
//   start.setAttribute(`disabled`, false);
// };

// start.addEventListener("click", startTimer);
// stop.addEventListener("click", stopTimer);

// !EX
// const fn = async function () {
//   let result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   let f = result.json();
//   return f;
// };

// fn().then((data) => console.log(data));
// !EX
let url = "https://pokeapi.co/api/v2/pokemon/ditto";
const fn = async function (url) {
  let response = await fetch(url);
  if (response.status === 200) {
    let result = await response.json();
    return result;
  } else {
    console.error(`Error ${response.status}`);
  }
};
console.log(fn(url));

// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
// !EX
