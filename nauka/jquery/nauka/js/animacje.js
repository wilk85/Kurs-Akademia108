// animacja szerokości i wysokości

$(document).ready(function(){
    $('#show').click(function(){
        // $('#showHide').show(3000);
        // $('#showHide').fadeIn(3000);
        $('#showHide').slideDown(3000, function(){
            $(this).css('background', 'red');
        });
    })

    // animacja zanikania i pojawiania się

    $('#hide').click(function(){
        // $('#showHide').hide(3000);
        // $('#showHide').fadeOut(3000);
        $('#showHide').stop().slideUp(3000);
        // .stop(true, false) zakancza od razu zanimacje, jedno true zatrzymuje ja w danym momentcie klikniecia lub bez true
    })

    $('#toggle').click(function(){
        // $('#showHide').toggle(3000);
        // $('#showHide').fadeToggle(3000);
        $('#showHide').slideToggle(3000);
    })

    $('#animacja').animate({
        "width": "300px",
        "height": "300px",
        "background": "blue",
        "border-radius": "50%"
    },3000);
})