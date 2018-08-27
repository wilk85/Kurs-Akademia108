$(document).ready(function(){
    ifScrolled();    
       
    $("a").on('click', function(event) {
        if (this.hash !== "") {   
            event.preventDefault();
            var hash = this.hash;  
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){    
            window.location.hash = hash;
            });
        } 
        });
         
})
$(window).scroll(function(){
    ifScrolled();
})

function ifScrolled(){
    if($(window).width() > 991){
        if($('#main-nav').outerHeight() < $(window).scrollTop()){
            $('#main-nav').addClass('scrolled');
        } else {
            $('#main-nav').removeClass('scrolled');
        }
    }
}