'use strict';

console.log(Math.PI);
console.log(Math.E);
console.log(Math.LOG2E);

function circle(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(`Pole koła to ${circle(3)}`);

let randNum = (parseInt(Math.random()*10));  // od 0 - 9 - obcinanie dziesiętnych parseInt
console.log(randNum);




