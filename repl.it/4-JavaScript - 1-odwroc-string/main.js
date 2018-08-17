

function napisOdwrotnie(napis) {
   let pobierzNapis = napis.split('');
   let odwrocony = pobierzNapis.reverse();
   let koncowy = odwrocony.join('');
   
   console.log(koncowy);
   return koncowy;
}

napisOdwrotnie('Akademia108');



//ZWRACANIE WARTOSCI BEZ PARAMETRU I PRINT
// function myVar() {
//     let x = 10;
//     return x;
// }

// console.log(myVar());