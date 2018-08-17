let arrayOne = [1,3,41,70.1,0x10,2,23.02,78,34,1e2,45,67,98];
function bblSort(tablica){
    for(let i=0; i<tablica.length; i++){
        for(let j=0; j<tablica.length; j++){
            if(tablica[j+1]<tablica[j]){
                let temp = tablica[j];
                tablica[j] = tablica[j+1];
                tablica[j+1] = temp;
            }
        }
    }
    return tablica;
}
console.log(bblSort(arrayOne));
