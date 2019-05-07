"use strict";

function User () {
  this._firstName = true;
  this._surname = true;
  this.setFirstName = function (firstName) {
    this._firstName = firstName;
  };
  this.setSurname = function (surname) {
    this._surname = surname;
  };
  this.getFullName = function () {
    return this._firstName + " " + this._surname
  };
};

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов

//Написать объект с геттерами и сеттерами
