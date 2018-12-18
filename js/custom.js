(function ($) {
    "use strict"; // Start of use strict

    /* --------- Wow Init ------ */
    new WOW().init();

    /*-------- Owl Carousel ----------*/

    /*----- Hero Section -----*/
    $(document).ready(function () {
        $(".hero").owlCarousel({
            items: 1,
            loop: true,
            singleItem: true,
            autoplay: true,
            autoHeight: true,
            animateOut: 'fadeOut',
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false
        });
    });
    
    /*----- Clients Section -----*/
    $(document).ready(function () {
        $("#clients").owlCarousel({
            loop: true,
            singleItem: true,
            autoplay: true,
            autoHeight: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            dots: false,
            responsive:{
                0:{items:1.5},
                1200:{items:3}
            }
        });
    });

    var mainbottom = $('#about-us').offset().top;

    // on scroll,
    $(window).on('scroll', function () {
        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('#mainNav').addClass('past-main');
        } else {
            $('#mainNav').removeClass('past-main');
        }
    });

    // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 8000
    //     }
    // });

})(jQuery);