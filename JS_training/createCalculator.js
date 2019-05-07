"use strict";

var calculator = {
  a: 0,
  b: 0,
  read: function () {
    this.a = +prompt("Enter first number", "0");
    this.b = +prompt("Enter second number", "0");
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Создайте калькулятор
//
// Создайте объект calculator с тремя методами:
//
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений
