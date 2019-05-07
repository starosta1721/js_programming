"use strict";

function User(fullName) {
  this.fullName = fullName;
  Object.defineProperty(this, "firstName", {
    get: function() {
      var split1 = this.fullName.split(" ");
      return split1[0];
    },
    set: function(value) {
      split1 = this.fullName.split(" ");
      split1[0] = value;
      this.fullName = split1.join(" ");
    }
  });
  Object.defineProperty(this, "lastName", {
    get: function() {
      var split2 = this.fullName.split(" ");
      return split2[1];
    },
    set: function(value) {
      split2 = this.fullName.split(" ");
      split2[1] = value;
      this.fullName = split2.join(" ");
    }
  });
}



var vasya = new User("Василий Попкин");
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин
vasya.lastName = 'Сидоров';
alert( vasya.fullName );

// Добавить get/set-свойства
// Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
// Имя и фамилия всегда разделяются пробелом.
//
// Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:
// Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чему.
