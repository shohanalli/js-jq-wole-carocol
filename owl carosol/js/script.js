$(document).ready(function(){
$('.first').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            autoplay:false,
            nav:false,
            items:2
        },
        425:{
            dots:false,
            items:4
        },
        768:{
            items:6
        }
    }
})
});

$(document).ready(function(){
    $('.last').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        nav:false,
     
        responsive:{
            0:{
                autoplay:true,
                
                items:2
            },
            425:{
                dots:false,
                items:4
            },
            768:{
                items:6
            }
        }
    })
    });
    

