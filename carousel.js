$(document).ready(function(){
    var prevArrow = '<button type="button" class="prev click"></button>';
    var nextArrow = '<button type="button" class="next click"></button>';

    $('.carousel-create').slick({
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        dots: true,
        dotsClass: "dots-carousel dots-carousel-create",
        asNavFor: '.carousel-create-head',
    });

    $('.carousel-create-head').slick({
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.carousel-create'
    });

    $('.carousel-collaborate').slick({
        appendArrows: $('.arrows-collaborate'),
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        dots: true,
        dotsClass: "dots-carousel dots-carousel-collaborate",
    });

    $(".carousel-user-exp").slick({
            slidesToShow: 2,
            infinite: true,
            appendArrows: $('.arrows-user-exp'),
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            responsive: [
                {
                  breakpoint: 1041,
                  settings: {
                    slidesToShow: 1,
                         }
                }]
    });
});