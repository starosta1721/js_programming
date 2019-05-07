"use strict";

function sum(a) {

  return function (b) {
    return a + b;
  }
};

sum(1)(2);



// Сумма через замыкание
// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
