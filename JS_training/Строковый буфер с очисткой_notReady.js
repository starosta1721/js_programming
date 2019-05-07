"use strict";

function makeBuffer() {
  var i = "";
     function buffer(value) {
      if (value === undefined) {value = ""};
      i = i + value;
     return i;
    }
    buffer.clear = function () {
      i = "";
    }
}

var buffer = makeBuffer();

// Строковый буфер с очисткой
// Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:
