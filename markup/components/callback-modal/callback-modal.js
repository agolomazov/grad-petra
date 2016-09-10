$(document).ready(function () {
    let modal = $('.callback-modal');
    let params = {
        variant: 'callback-modal'
    };

    $('#new-response-btn').on('click', function (e) {
        e.preventDefault();
        $.featherlight(modal, params);
    });
});
