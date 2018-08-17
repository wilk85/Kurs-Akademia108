function oblicz(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += Math.pow(arr[i], 2);
        
    }
    return sum;
}

let wynik = oblicz([1,3,6,4,10]);
console.log(`Suma wszystkich elementów podniesionych do kwadratu to: ${wynik}`);
