"use strict";

function sumArgs() {
  var arr = [];
  var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      arr[i] = arguments[i];
    };
  arr.forEach(function(element) {
    sum += element;
  });
  console.log(sum);
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

Проблема: console.log(); выводит правильный результат, но алерт выдает undefined
// Перепишите суммирование аргументов
// Есть функция sum, которая суммирует все элементы массива:
// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }
// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
