$(document).ready(function () {
    let owl = $('.responses__list').owlCarousel({
        items: 2,
        navigation: false,
        pagination: false,
        responsiveClass: true,

        responsiveBaseWidth: '.responses__list',
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [1100, 3]
    });
    $('.responses').equalize({
        target: ['.responses__item']
    });
    $('.responses__controls-prev').click(function () {
        owl.trigger('owl.prev');
    });

    $('.responses__controls-next').click(function () {
        owl.trigger('owl.next');
    });
    let height = $('.responses__item').height();
    console.log(height);
    $('.responses__new').css('height: ' + height);
});

