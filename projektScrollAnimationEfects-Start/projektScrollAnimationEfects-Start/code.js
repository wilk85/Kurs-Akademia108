$(window).on('scroll', function() {

    const scrollValue = $(this).scrollTop();
    const windowHeight = $(this).height();

    // .about
    const $art2 = $('.art2');
    const $art3 = $('.art3');
    const $art4 = $('.art4');
    const whenStartArt2 = $art2.offset().top;
    const whenStartArt3 = $art3.offset().top;
    const whenStartArt4 = $art4.offset().top;
    const heightArt2 = $art2.outerHeight();
    const heightArt3 = $art3.outerHeight();
    const heightArt4 = $art4.outerHeight();

    if (scrollValue > whenStartArt2 + heightArt2/2 - windowHeight) {
        $art2.addClass('active');
    }

    if (scrollValue > whenStartArt3 + heightArt3/2 - windowHeight) {
        $art3.addClass('active');
    }

    if (scrollValue > whenStartArt4 + heightArt4/2 - windowHeight) {
        $art4.addClass('active');
    }

    // .quotes

    const $op1 = $('.op1');
    const $op2 = $('.op2');
    const whenStartOp1 = $op1.offset().top;
    const whenStartOp2 = $op2.offset().top;
    // const heightOp1 = $op1.height();
    // const heightOp2 = $op2.height();

    if (scrollValue > whenStartOp1 - windowHeight) {
        $op1.addClass('active');
        console.log('pokaz dupe', scrollValue);
    }

    if (scrollValue > whenStartOp2 - windowHeight) {
        $op2.addClass('active');
    }

    //cleaner
    if (scrollValue < 100) {
        $('article').removeClass('active');
    }

})