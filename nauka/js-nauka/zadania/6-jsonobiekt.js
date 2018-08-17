let pracownicyJson = {
	"pracownicy":[
		{"firstName": "Krystian", "lastName": "Dziopa"}, 
		{"firstName": "Anna", "lastName": "Szapiel"},
		{"firstName": "Piotr", "lastName": "Żmuda"}
	]
}

console.log(pracownicyJson);

pracownicyJson.pracownicy.forEach(function(i, index) {
	// console.log(item);
    // console.log(`${[index]}: ${i.firstName} ${i.lastName}`);

   let pp1 = document.createElement('p');
   let pp2 = document.createElement('p');
   let pp3 = document.createElement('p');

   pp1.innerText = index;
   pp2.innerText = i.firstName;
   pp3.innerText = i.lastName;
   
   document.body.appendChild(pp1);
   document.body.appendChild(pp2);
   document.body.appendChild(pp3);
})


   
