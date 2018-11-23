$(document).ready(function(){
    $('.carousel-collaborate').slick({
        appendArrows: $('.arrows-collaborate'),
        prevArrow: '<button id="prev-col" type="button" class="prev-click"></button>',
        nextArrow: '<button id="next-col" type="button" class="next-click"></button>',
        dots: true,
        dotsClass: "dots-carousel",
    });
    $('.carousel-user-exp').slick({
        infinite: true,
        slidesToShow: 2,
        appendArrows: $('.arrows-user-exp'),
        prevArrow: '<button id="prev-cust" type="button" class="prev-click"></button>',
        nextArrow: '<button id="next-cust" type="button" class="next-click"></button>',
    });
});