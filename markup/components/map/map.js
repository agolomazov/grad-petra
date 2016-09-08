$(document).ready(function () {
    /*eslint-disable */

    function init() {

        let myMap;

        myMap = new ymaps.Map("map", {
            center: [59.934870, 30.330452],
            zoom: 16,
            controls: []
        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark([59.936106, 30.322974] , {},
            { iconLayout: 'default#image',
                iconImageHref: '/static/img/content/baloon.png',
                iconImageSize: [30, 48],
                iconImageOffset: [-20, -47] });

        myMap.geoObjects.add(myPlacemark);
    }
    ymaps.ready(init);
    /*eslint-enable */
});
