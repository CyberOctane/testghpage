$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#hamMenu',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
        sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        navigation: true,
        // navigationTooltips: ['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'],
        responsiveHeight: 500,
        scrollBar:true,
        sectionSelector: '.section',
        scrollOverflow:true,
        //easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });
});