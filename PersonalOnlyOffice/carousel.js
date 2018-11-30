CAROUSELS = (function() {
    var nextArrow = '<button type="button" class="next click"></button>';
    var prevArrow = '<button type="button" class="prev click"></button>';

    function init() {
        $('.carousel-create').slick({
            asNavFor: '.carousel-create-head',
            dots: true,
            dotsClass: "dots-carousel dots-carousel-create",
            nextArrow: nextArrow,
            prevArrow: prevArrow,
        });

        $('.carousel-create-head').slick({
            asNavFor: '.carousel-create',
            arrows: false,
            cssEase: 'linear',
            fade: true,
            speed: 500,
        });

        $('.carousel-collaborate').slick({
            dots: true,
            dotsClass: "dots-carousel dots-carousel-collaborate",
            appendArrows: $('.arrows-collaborate'),
            nextArrow: nextArrow,
            prevArrow: prevArrow,
        });

        $(".carousel-user-exp").slick({
                appendArrows: $('.arrows-user-exp'),
                nextArrow: nextArrow,
                prevArrow: prevArrow,
                slidesToShow: 2,
                responsive: [
                    {
                    breakpoint: 1041,
                    settings: {
                        slidesToShow: 1,
                            }
                    }]
        });
    }
    return {
        init: init
    };

})();
