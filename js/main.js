$(function () {
    $('.hero-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $('.reviews-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});