$('.top-menu__item:has(.dropdown-menu-wrapper)').addClass('dropdown-parent');
$('.dropdown-parent').on('click', function (e) {
    $('.dropdown-menu-wrapper', e.target).slideToggle(500);
});
