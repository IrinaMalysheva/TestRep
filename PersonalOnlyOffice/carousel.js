$(document).ready(function(){
    $('.carousel-collaborate').slick({
        appendArrows: $('.arrows-collaborate'),
        prevArrow: '<button id="prev-col" type="button" class="prev-click"></button>',
        nextArrow: '<button id="next-col" type="button" class="next-click"></button>',
        dots: true,
        dotsClass: "dots-carousel",
    });

    CUE = (function() {
        
        var choseCarUserExp = function() {
            window.onresize = onresize;
        }
    
        function onresize() {
            if (window.innerWidth > 1040) {
                $(function () {
                    $(".carousel-user-exp").slick({
                        infinite: true,
                        slidesToShow: 2,
                        appendArrows: $('.arrows-user-exp'),
                        prevArrow: '<button id="prev-cust" type="button" class="prev-click"></button>',
                        nextArrow: '<button id="next-cust" type="button" class="next-click"></button>',            
                    });
                });
            } else {
                $(function () {
                    $(".carousel-user-exp").slick({
                        appendArrows: $('.arrows-user-exp'),
                        prevArrow: '<button id="prev-cust" type="button" class="prev-click"></button>',
                        nextArrow: '<button id="next-cust" type="button" class="next-click"></button>',
                    });
                });
            }
        }
    
        return {
            choseCarUserExp: choseCarUserExp
        };
    
    })();

    CUE.choseCarUserExp();

    
    // function checkbodyWidth() {
    //     if (window.innerWidth > 1040) {
    //         $(function () {
    //             $(".carousel-user-exp").slick({
    //                 infinite: true,
    //                 slidesToShow: 2,
    //                 appendArrows: $('.arrows-user-exp'),
    //                 prevArrow: '<button id="prev-cust" type="button" class="prev-click"></button>',
    //                 nextArrow: '<button id="next-cust" type="button" class="next-click"></button>',            
    //             });
    //         });
    //     } else {
    //         $(function () {
    //             $(".carousel-user-exp").slick({
    //                 appendArrows: $('.arrows-user-exp'),
    //                 prevArrow: '<button id="prev-cust" type="button" class="prev-click"></button>',
    //                 nextArrow: '<button id="next-cust" type="button" class="next-click"></button>',
    //             });
    //         });
    //     }
    // }
    // //checkbodyWidth();
    // $(window).resize(checkbodyWidth());

    // $('.carousel-user-exp').slick({
    //     infinite: true,
    //     slidesToShow: 2,
    //     appendArrows: $('.arrows-user-exp'),
    //     prevArrow: '<button id="prev-cust" type="button" class="prev-click"></button>',
    //     nextArrow: '<button id="next-cust" type="button" class="next-click"></button>',
    // });
});