$(document).ready(function(){


    function ajaxBitcoin(){
         //po wejściu na stronę już pobiera wartość
        var currentBuy = parseFloat($('#buy').html());
        var currentSell = parseFloat($('#sell').html());
       
        $.getJSON('https://blockchain.info/pl/ticker', function(data){
        // console.log(data.PLN.buy);
        // console.log(data.PLN.sell);
        // console.log(data);
        $('#buy').html(parseFloat(data.PLN.buy));
        $('#sell').html(parseFloat(data.PLN.sell));

        if(currentBuy > parseFloat(data.PLN.buy)){
            $('#sell-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
        } else if(currentBuy < parseFloat(data.PLN.buy)){
            $('#sell-arrow').removeAttr('class').addClass('fas fa-arrow-up').css('color', 'green');
        } else {

               $('#sell-arrow').removeAttr('class').addClass('fas fa-minus-square').css('color', 'blue');
        
        }

        if(currentSell > parseFloat(data.PLN.sell)){
            $('#buy-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
        } else if(currentSell < parseFloat(data.PLN.sell)){
            $('#buy-arrow').removeAttr('class').addClass('fas fa-arrow-up').css('color', 'green');
        } else {

               $('#buy-arrow').removeAttr('class').addClass('fas fa-minus-square').css('color', 'blue');
        
        }

        console.log('odwieżono');
        
     })

    }

    setInterval(ajaxBitcoin, 5000);

    
})