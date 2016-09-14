$(document).ready(function () {
    $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({ full_width: true });

$(document).ready(function () {
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

$(document).ready(function () {
    $("#sticker").sticky({ topSpacing: 0 });
});

$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});

$(document).ready(function () {
    $('.carousel').carousel();
});

var options = [
    {
        selector: 'li', offset: 200, callback: function(el) {
            Materialize.accordionOpen($(el));
        } 
    },
];
Materialize.scrollFire(options);

$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [200, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [200, 1], // betweem 900px and 601px
        itemsTablet: [200, 1], //2 items between 600 and 0
        itemsMobile: true // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    })

});