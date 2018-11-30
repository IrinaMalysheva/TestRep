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