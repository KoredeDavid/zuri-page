$(".learn").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#learnmore").offset().top  
    }, 1000);
});

$(".dot").click(function(){
    var x = document.getElementsByClassName("right")[0];
    console.log(x.className)
    if (x.className === "right") {
        console.log('ok')
        x.className += " responsive";
    } else {
        x.className = "right";
        console.log(123)
    }
})