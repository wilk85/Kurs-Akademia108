// odpalamy jquery z sparsowanym json - pobieranie tylko GET
$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
    console.log(data);
})