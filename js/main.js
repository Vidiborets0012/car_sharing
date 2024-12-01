$(function () {
    $('.hero-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });

    $('.reviews-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.menu-btn').on('click', function () {
        $('.menu-list').toggleClass('menu-list-active');
    });
});