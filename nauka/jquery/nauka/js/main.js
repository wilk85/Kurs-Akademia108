// .ready() - odpowiednik 'DOMContentLoaded'
// $ - jQuery(element)   tak się łąpię w wordpress w wersji 1.4
$(document).ready(function(){
    $('#first').css('background', 'red').hide('slow').show('slow');
    console.log($('#first'));
})

// czy obiekt jest jquery - wrzucić do konsoli powinno wyjść w.fn.init [div#first]

