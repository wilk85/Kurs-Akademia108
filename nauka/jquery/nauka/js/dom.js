//jquery each() indeks[element]
// js for() element[indeks]
// nie wszystkie metody jquery mogą wykonywać się na grupach elementów w tym przypadku muzimy użyć .each() i wyciągać pojedyncze elementy

$(document).ready(function(){
    $('.list-item').each(function(index, elem){
        console.log(elem); // element js
        console.log($(this)); // element jquery
        $(this).find('a').css('color', 'red');
    })
})

