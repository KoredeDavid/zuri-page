$(".learn").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#details").offset().top   //id of div to be scrolled
    }, 1000);
});