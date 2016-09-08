$(document).ready(function () {

    let owl = $('.car-carousel');
    owl.owlCarousel({
        items: 4,
        navigation: false,
        pagination: false,
        rewindNav: true,
        scrollPerPage: false,
        autoPlay: 5000,
        stopOnHover: true,
        itemsCustom: [
            [1280, 4],
            [1024, 3]
        ]
    });


    $('.car-carousel__control-item-prev').click(function () {
        owl.trigger('owl.prev');
    });

    $('.car-carousel__control-item-next').click(function () {
        owl.trigger('owl.next');
    });

});
