'use strict'; // tryb ścisły nie pozwala na definiowanie zmiennych bez deklaracji  czyli bez let 

// Zmienne ES5
var number; // deklaracja zmiennej
number = 10;

console.log(number);

// Zmienne ES6
let name= 'Bonzo'; // deklaracja z przypisaniem wartości
console.log(name);

// var może redeklarować zmienną
//let nie może deklarować drugi raz tej samej zmiennej

// deklarowanie kilku zmiennych
/*
let number = 15, name = 'zibi';

*/

// stałe w js
const numberMonth = 12;
console.log(numberMonth);