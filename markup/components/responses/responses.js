$(document).ready(function () {

    let owl = $('.responses-list');
    owl.owlCarousel({
        items: 3,
        navigation: false,
        pagination: false,
        rewindNav: true,
        scrollPerPage: false,
        autoPlay: 25000,
        stopOnHover: true,
        itemsDesktop: [1280, 3],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        touchDrag: true
    });

    $('.prev-control').click(function () {
        owl.trigger('owl.prev');
    });

    $('.next-control').click(function () {
        owl.trigger('owl.next');
    });

});

