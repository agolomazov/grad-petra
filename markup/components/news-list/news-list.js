$(document).ready(function () {

    const windowWidth = $(window).outerWidth();

    if (windowWidth > 800) {
        $('.list-posts').equalize({
            target: '.news-list__item'
        });

        $('.news-list__item-title').equalize();
    }

    $(window).resize(function () {
        if (windowWidth > 800) {
            $('.list-posts').equalize({
                target: '.news-list__item'
            });

            $('.news-list__item-title').equalize();
        }
    });

});

