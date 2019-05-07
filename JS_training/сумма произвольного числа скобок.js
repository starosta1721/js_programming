
"use strict";

var sumi = 0;
function sum() {
    for (var i = 0; i < arguments.length; i++) {
      sumi = sumi + arguments[i];
    }
  console.log(sumi);
  return sum;
};
sum(6)(-1)(-2)(-3);


var sumi = 0;
function sum() {
  sumi += arguments[0];
  console.log(sumi);
  return sum;

};
sum(6)(-1)(-2)(-3);

Сумма произвольного количества скобок

Напишите функцию sum, которая будет работать так:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
