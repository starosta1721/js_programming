"use strict";

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }
};

// Цепочка вызовов
//
// Есть объект «лестница» ladder:
// Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:
// ladder.up().up().down().up().down().showStep(); // 1
