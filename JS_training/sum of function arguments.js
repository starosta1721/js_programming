"use strict";

function sum() {
  var summ = 0;
  for (var i = 0; i < arguments.length; i++) {
    summ += arguments[i];
  }
console.log(summ);
}

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);


// Сумма аргументов
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов
