let tablica = [1,2,3,10,11,5.5];

function policz(arr){
    let suma = 0;
    let iloczyn = 1;
    
    for(let i=0; i<arr.length; i++){
        suma += arr[i];
        iloczyn = iloczyn * arr[i];
    }
    console.log(`Suma dodawania z tablicy ${tablica} to: ${suma}`);
    console.log(`Iloczyn całej tablicy ${tablica} to: ${iloczyn}`);
}

policz(tablica);