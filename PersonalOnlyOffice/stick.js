STICK = (function() {
    var stickydivTop;
    
    var $stickydiv, $window;
    
    var init = function() {
        $stickydiv = $("#stickydiv");
        $window = $(window);

        stickydivTop = parseInt($stickydiv.css("top"));
        window.onscroll = onscroll;
    }

    function onscroll() {
        var position = "", top = "";
        if ($window.scrollTop() >= stickydivTop) {
            position = "fixed";
            top = "0";
        }

        $stickydiv.css("position", position);
        $stickydiv.css("top", top);
    }

    return {
        init: init
    };

})();

$(document).ready(function(){
    STICK.init();
});

// $(document).ready(function(){

//     var stickydivPos, style, stickydivTop;
    
//     stickydivPos = document.getElementById("stickydiv");
//     style = getComputedStyle(stickydivPos);
//     stickydivTop = parseInt(style.top);
//     window.onscroll = onscroll;

//     function onscroll() {
//         var html = document.documentElement;
//         var body = document.body;
//         var scrollTop = html.scrollTop || body && body.scrollTop || 0;
//         scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
        
//         var position = "", top = "";
//         if (scrollTop >= stickydivTop) {
//             position = "fixed";
//             top = "0";
//         }

//         stickydivPos.style.position = position;
//         stickydivPos.style.top = top;
//     }
    
// });