$(document).ready(function(){
    $('#btn').click(function(){
        $('#square').animate({
            "right": "100px",
            "height": "100px",
            "width": "100px"
        }, 3000, function(){
            $('#square').animate({"backgroundColor": 'blue'}, 3000, function(){
                var p1 = $('<h2>').text('Animacja zakonczona').css({
                    'color': 'white', 
                    'text-align': 'center',
                    'font-size': '20px'
                });
                $('#square').append(p1);
            })
        })
        
    })
})