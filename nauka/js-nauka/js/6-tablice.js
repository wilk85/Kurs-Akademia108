'use strict';

// https://www.w3schools.com/js/js_array_methods.asp

let books = ['programowanie w js', 'siweca burzy', 'mistrz i małgorzata'];
console.log(books);
books[0] = 'gra o tron';
books[1] = 'wojna i pokój';
books[3] = 'zjawa';
console.log(books);

let oneBook = books[2];
console.log(`books2 = ${oneBook}`);

books[10] = 'ferdek kiepski'; //doda 6 pustych miejsc jeśli tablica ma 4 elementy
console.log(books);

books.push('zjadacz umysłów'); // dodaje na końcu
console.log(books);

books.pop(); //usuwa ostatni element z tablicy

books.unshift('mały książe'); // dodaje na początek element, pierwszy element
console.log(books); 
books.shift(); // usuwa pierwszy element tablicy
console.log(books);

console.log(books.join(', '));
console.log(books.reverse(', '));
console.log(books.sort());

let arr = [12, 'oj', true, null, [1,2], {name:'cyc'}];
console.log(arr);
console.log(arr[4][0]); // tablica w tablicy
console.log(arr[4][1]);

