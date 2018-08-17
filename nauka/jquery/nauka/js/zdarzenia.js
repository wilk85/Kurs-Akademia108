$(document).ready(function(e){

    // $('a').click(function(e){
    //     e.preventDefault();
    //     console.log(e);
    //     console.log('123');
        
    // })

    // metoda on() pozwala na obsługę więcej niż jednego zdarzenia danego elementu

    $('a').on({
        "click": function(e){
            e.preventDefault();
            console.log(123);
        },
        "mouseover": function(){
            $(this).css('color', 'red');
        },
        "mouseout": function(){
            $(this).css('color', "yellow");
        }
    })
})