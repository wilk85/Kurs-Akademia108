
function sortowanie(napis){
    let tablicaNapis = napis.split('');
    let posortowanyNapis = tablicaNapis.sort();
    let koncowy = posortowanyNapis.join('');
    console.log(koncowy); 
}

sortowanie('akademia108');
