//'use strict';

// typ liczbowy
let number = 5, num1 = 1.5;
console.log(number, num1);

// typ string
let name = 'bobek';
console.log(name);

let sentence = "This is adam's car"; // lub adam\'s
console.log(sentence);

let info = 'my name ' + sentence;
console.log(info);

let anotherInfo = `kilof, pałka i zapałka a także ${name}, widzieli jak siała baba mak na ${num1} ha ziemi`; 
// zapis bez plusów - interpolacja
console.log(anotherInfo);


// typ logiczny
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// typy specjalne
let age;
let car = null;
let count = 0;
console.log(age, car, count);

// dynamiczne typowanie danych
console.log('5'-3);
console.log('5'+3);
console.log(true+3+false);
console.log(age * count);

// sprawdzanie typów
console.log(typeof age, typeof car, typeof count, typeof info);
console.log(typeof 10/0); // nie dzielić przez zero!!!!!!!!!!
console.log(typeof ('adam'/5)); 
// powyższy nie jest numerem a typeof zwraca ją jako numer ^


