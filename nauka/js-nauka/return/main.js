'use strict';

function zrobKawe(rodzajKawy, moneta){
    let zrobionaKawa = 'kawa';
    let reszta = 0;

    if(rodzajKawy == 1){
        zrobionaKawa = 'czarna';
        reszta = moneta -2;
    } else if(rodzajKawy == 2){
        zrobionaKawa = 'czarna z mlekiem';
        reszta = moneta -3;
    } else if(rodzajKawy == 3){
        zrobionaKawa = 'latte';
        reszta = moneta -2;
    } else {
        zrobionaKawa = 'zły wybór';
    }
    
    
    //zwracanie więcej niż jednej wartości np w tablicy lub jako obiekt json
    // return [zrobionaKawa, reszta];
    return {
        zrobionaKawa: zrobionaKawa,
        reszta: reszta
    };
}

//wyciąganie wartości z return poza funkcję

let kawa = zrobKawe(2, 5);
console.log(kawa);
