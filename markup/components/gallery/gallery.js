$(document).ready(function () {
    $('#gallery__items-list').mixItUp({
        selectors: {
            target: '.gallery__item-image',
            filter: '.filter'
        },
        animation: {
            enable: true,
            effects: 'fade stagger(50ms)',
            duration: 600,
            easing: 'ease'
        }
    });
});
