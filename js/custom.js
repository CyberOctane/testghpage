(function ($) {
    "use strict"; // Start of use strict

    /*-------- Loading Section ----------*/

    $(window).on("load", function () {
        $("#loader").fadeOut("slow", function () {
            $(this).remove();
        });
    });

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
        $("#clients-list-mobile").owlCarousel({
            loop: true,
            margin: 10,
            singleItem: true,
            autoplay: true,
            autoHeight: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            dots: false,
            responsive: {
                0: {
                    items: 3
                },
                481: {
                    items: 4
                },
                639: {
                    items: 6
                },
                767: {
                    items: 5
                }
            }
        });
    });

    $(document).ready(function () {
        $("#clients-list-desktop").owlCarousel({
            loop: true,
            margin: 10,
            singleItem: true,
            autoplay: true,
            autoHeight: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            dots: false,
            responsive: {
                992: {
                    items: 3
                }
            }
        });
    });

    var mainbottom = $('#about-us').offset().top;

    // on scroll,
    $(window).on('scroll', function () {
        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('#main-nav').addClass('past-main');
        } else {
            $('#main-nav').removeClass('past-main');
        }
    });

})(jQuery);