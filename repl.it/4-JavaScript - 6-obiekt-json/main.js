let pracownicyJson = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(pracownicyJson);

pracownicyJson.pracownicy.forEach(function(index, i){
   
    console.log(`${[i]}: ${index.firstName} ${index.lastName}`);
})