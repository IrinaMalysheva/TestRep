$(document).ready(function(){

    $('.carousel-create').slick({
        // arrows: true,
        // appendArrows: $('.arrows-create'),
        prevArrow: '<button id="prev-cr" type="button" class="prev-click"></button>',
        nextArrow: '<button id="next-cr" type="button" class="next-click"></button>',
        dots: true,
        dotsClass: "dots-carousel-create",
    });

    $('.carousel-create-head').slick({
        arrows: false,
        // appendArrows: $('.arrows-create'),
        // prevArrow: '<button id="prev-cr" type="button" class="prev-click"></button>',
        // nextArrow: '<button id="next-cr" type="button" class="next-click"></button>',
        // dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.carousel-collaborate').slick({
        appendArrows: $('.arrows-collaborate'),
        prevArrow: '<button id="prev-col" type="button" class="prev-click"></button>',
        nextArrow: '<button id="next-col" type="button" class="next-click"></button>',
        dots: true,
        dotsClass: "dots-carousel",
    });

    $(".carousel-user-exp").slick({
            slidesToShow: 2,
            infinite: true,
            appendArrows: $('.arrows-user-exp'),
            prevArrow: '<button id="prev-cust" type="button" class="prev-click"></button>',
            nextArrow: '<button id="next-cust" type="button" class="next-click"></button>',            
            responsive: [
                {
                  breakpoint: 1041,
                  settings: {
                    slidesToShow: 1,
                         }
                }]
    });

    $('#next-cr').click(function(){
        $(".carousel-create-head").slick('slickNext');
    });
    $('#prev-cr').click(function(){
        $(".carousel-create-head").slick('slickPrev');
    });
});