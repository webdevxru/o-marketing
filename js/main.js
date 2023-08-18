var mixer = mixitup('.portfolio__content', {

    animation: {
        "duration": 250,
        "nudge": true,
        "reverseOut": false,
        "effects": "fade"
    }
});

$('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"> <img src="/images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"> <img src="/images/arrow-right.svg" alt=""></button>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false
          }
        },

]});

$('.menu__btn').on('click', function(){
    $('.header__top-inner').toggleClass('active');
})