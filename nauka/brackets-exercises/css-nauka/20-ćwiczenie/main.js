document.getElementById('red').addEventListener('click', function(e){
    e.stopPropagation();
    //stop propagacji wykonuje daną funkcję i blokuje funkcję przypisaną do 
    // rodzica || klikająć w body zawsze zabierze nam klasę .hide
    document.getElementById('main-nav').classList.toggle('hide');
})

document.body.addEventListener('click', function(){
    document.getElementById('main-nav').classList.remove('hide');
})

//po kliknieciu w main-nav stopPropagation() żeby wyłączyć funkcję z body(rodzica)
document.getElementById('main-nav').addEventListener('click', function(e){
    e.stopPropagation();
})
