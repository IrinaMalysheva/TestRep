STICK = (function() {
    var stickydivPos, style, stickydivTop;
    
    var init = function() {
        stickydivPos = document.getElementById("stickydiv");
        style = getComputedStyle(stickydivPos);
        stickydivTop = parseInt(style.top);
        window.onscroll = onscroll;
    }

    function onscroll() {
        var html = document.documentElement;
        var body = document.body;
        var scrollTop = html.scrollTop || body && body.scrollTop || 0;
        scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
        //var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        var position = "", top = "";
        if (scrollTop >= stickydivTop) {
            position = "fixed";
            top = "0";
        }

        stickydivPos.style.position = position;
        stickydivPos.style.top = top;
    }

    
    return {
        init: init
    };

})();

window.addEventListener("load", STICK.init);