"use strict";

function f(x) {
  console.log(arguments.length ? 1 : 0);
}

f(undefined); // 1
f(0); // 0

// Проверка на аргумент-undefined
// Как в функции отличить отсутствующий аргумент от undefined?
