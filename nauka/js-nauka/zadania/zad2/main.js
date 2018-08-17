
let btn = document.querySelector('button').addEventListener('click', oblicz);

function oblicz(e) {
    e.preventDefault;
    let wplata = document.querySelector('#wplata').value;
    parseFloat(wplata);
    let iloscLat = document.querySelector('iloscLat').value;
    parseFloat(iloscLat);
    let okresKapitalizacji = document.querySelector('okresKapitalizacji').value;
    parseFloat(okresKapitalizacji);
    let oprocentowanie = document.querySelector('oprocentowanie').value / 100;
    console.log(okresKapitalizacji);
   
    console.log(wplata);
};