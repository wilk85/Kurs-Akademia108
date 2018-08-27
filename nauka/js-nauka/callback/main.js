'use strict';

function klik(){
    console.log('klik');
}

let button = document.getElementById('button');

//1 sposób podpięcia to do html / onclick = klik()
//2 sposób podpięcia funkcji pod click
button.onclick = klik;
//3 sposób 
button.addEventListener('click', klik);

//callback = funkcje gdy zainstnieją odpowiednie warunki które się określa
//funkcja która nie uruchamia się wtedy gdy ją przypisujemy
//gdy ją przypisujemy to nie wywołujemy, podajemy tylko referencję
// np klik