$(document).ready(function(){

    $('#pobierz').click(function(){
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
         console.log(data);


            var p1 = $('<p> ').text = '<br><br> ID: ' + data.userId + ' <br>';
            var p2 = $('<p> ').text = 'Login: ' + data.userName + ' <br> ';
            var p3 = $('<p> ').text = 'URL: ' + data.userURL + ' <br> ';
            
            $('body').append(p1);
            $('body').append(p2);
            $('body').append(p3);
        })
    })
})