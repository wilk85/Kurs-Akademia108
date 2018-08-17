$(document).ready(function(){
    $('#count-sum').click(function(){
        var sum = 0;
        $('.salary').each(function(){
            sum += parseInt($(this).text());
        })
            $('#sum').text(sum);
    })
        
})