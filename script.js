var stickydivPos = document.getElementById("stickydiv");
var style = getComputedStyle(stickydivPos);
var stickydivTop = parseInt(style.top);
window.onscroll = function() {
    var html = document.documentElement;
    var body = document.body;
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
    //var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= stickydivTop) {
        stickydivPos.style.position = "fixed";
        stickydivPos.style.top = "0";
    } else {
        stickydivPos.style.position = "";
        stickydivPos.style.top = "";
    };
};