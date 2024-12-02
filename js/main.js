$(function () {
    $('.hero-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false
      }
    },
  ]
    });

    $('.reviews-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1141,
      settings: {
        slidesToShow: 3,
      }
    },
        {
      breakpoint: 846,
      settings: {
        slidesToShow: 2,
      }
    },
        {
      breakpoint: 585,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
    });

    $('.menu-btn').on('click', function () {
        $('.menu-list').toggleClass('menu-list-active');
    });
});