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
