// 1 możliwość tworzenia funkcji
function print(){
    console.log('funkcja');
}

print();

// 2 możliwość tworzenia funkcji - raczej nie używana
const addNumbers = function(){
    let num1 = 2;
    let num2 = 4;
    console.log(num1 + num2);
}

addNumbers();


function multiply(numb1, numb2) {
    console.log(numb1 * numb2);
}

multiply(3, 3);

let age = 33;

multiply(age, 2);

// można używać, ale lepiej nie stosować
/*
function multi(numm1, numm2 = 3) {
    console.log()
}
*/

function divide(par1, par2) {
    let divideResult = par1/par2;
    return divideResult;
    // return par1 / par2; <- łatwiejszy zapis

    console.log() // nie wyświetli się, return kończy działanie dalszej części skryptu
}

let result = divide(10,5);
 
console.log(result);

// wywołanie z return par1 / par2;
console.log(divide(100, 10));

divide(100, 10); // nie wyświetli nic

//========================================================

// Funkcje strzałkowe 

const add = () => {
    console.log(' \n funkcja strzałkowa');
    console.log(2+2);
}

add();

const substract = (par1, par2) => {
    return par1-par2;
}

console.log(substract(2,4));

//krótszy zapis
const sqareArea = a => a * a;
console.log(sqareArea(3)); 

console.clear();
// ========================= zadania


function takeNumber(par1) {
    let arr = [];

    if(par1<=0 || !Number.isInteger(par1)) return 'zły parametr';

    for(let i=0; i<par1; i++){
        arr.push(parseInt(Math.random()*10))
    }

    return arr;
}

let randArr = takeNumber(18);

console.log(randArr);

let cubes = randArr.map(function (num1) {
    return num1 +25;
});

console.log(cubes);
