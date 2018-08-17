document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOM loaded!');
});

// document.getElementById('subt').addEventListener('click', function(){
//     let x = document.getElementById('inpt').value;
//     document.getElementById('text').textContent = x;
//     console.log(x);
// });


document.getElementById('subt').addEventListener('click', wypisz);

function wypisz(){
    let val = document.getElementById('inpt').value;
    console.log(`Twoje imię to: ${val}`);
    return val;
}

wypisz();


