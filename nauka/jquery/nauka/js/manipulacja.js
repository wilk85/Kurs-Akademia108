$(document).ready(function(){
    // metody text() i html()
    // gdy nie ustawiamy parametrów pobieramy wartości z selektora
    // jeśli ustawimy parametr to ustawiamy wartość w selektorze
    console.log($('#first').text());
    console.log($('#first').html());

    $('#first').html('<p>123456</p>');//bez znaczników
    $('#first').text('<p>123456</p>');//ze znacznikami
    // funkcje dodające treści append() prepend() before() after() - można wstawiać znaczniki html
     // dodaje tekst na koncu, za całym tekstem paragrafu
    $('#paragraf').append('<span> dodany metodą append() </span>')
    // dodaje tekst na początku, przed całym tekstem paragrafu
    $('#paragraf').prepend('<span> dodany metodą prepend() </span>')
    // dodaje tekst na górze, nad całym tekstem paragrafu
    $('#paragraf').before('<p> dodany metodą before() </p>')
    // dodaje tekst na dole, pod całym tekstem paragrafu
    $('#paragraf').after('<p> dodany metodą after() </p>')

    // funkcje empty() i remove()
    // empty usuwa zagnieżdżone znaczniki
    // remove usuwa cały element znacznika wraz z zagnieżdźonymi znacznikami

    $('#paragraf').empty() //zostawiło znacznik p
    $('#paragraf').remove();//usunęło cały znacznik p


    // funkcja css() - zmienia wartość css, zmieniając jedną wartość można użyć zapisu .css('', '')zmieniając więcej niż jedną wartość należy użyć obiektu .css({ })
    $('#first').css({
        "width": "20%",
        "height": "150px",
        "background": "violet"
    });

    // metoda val() bez parametru łapie i zwraca wartość pierwszego inputa
    console.log($('#formularz input').val()); //wynik 123 - pierwszy element wypisany w konsoli

    // val(parametr) ustawiam we wszystkich inputach dopasowanych znacznikiem
    $('#formularz input').val('lorem'); // wynik zmiana w 3 inputach value jest wpisany lorem

})

$(window).scroll(function(){
    console.log($(this).scrollTop());
    console.log($('#main-nav').outerHeight());

    if($(this).scrollTop() >= $('#main-nav').outerHeight()){
        $('#main-nav').addClass('affix');
    } else {
        $('#main-nav').removeClass('affix');
    }
})