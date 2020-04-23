/*$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

*/

//  Mobile view Responsive menu display and hide
$(document).ready(function () {
    $(".btn-menu").on('click', function () {
        $(".navbar-custom").slideToggle("slow");
        $("a").click(function () {
            $(".navbar-custom").slideUp("slow");
        });
    });
});


// on window rezise removies
$(window).resize(function () {
    if ($(window).maxWidth > 640) {
        $(".navbar-custom").removeAttr("style");
    }
});


// Smooth Page scrolling 
$('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, "slow", 'swing', function () {
        window.location.hash = target;
    });
});


$(function () {
    $(".custom-top a").click(function (e) {
        e.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });
});

// Map Alocation

function SatishMap() {
    var options = {
        center: {
            lat: 42.6305575,
            lng: -71.353621
        },
        zoom: 8
    }
    var map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: {
            lat: 42.6305575,
            lng: -71.353621
        },
        map: map,

    });

var SatishInfo = new google.maps.InfoWindow({
        content: 'Welcome to My location'
    });
    marker.addListener('click', function () {
        SatishInfo.open(map, marker);
    });
}