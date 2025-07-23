$(document).ready(function () {
    $('.slider-blocks').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,

        prevArrow: "<button type='button' class='btn-slick-prev btn btn-slider'><img src='img/arrow-left.svg' alt='arrov'></button>",
        nextArrow: "<button type='button' class='btn-slick-next btn btn-slider'><img src='img/arrow-right.svg' alt='arrov'></button>",
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 901,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }

        ]
    });
    

    $(".block-subscription").click(function (e) {
        e.preventDefault();
        $('.block-subscription').removeClass('active')
        $(this).addClass('active')
    });

    $(".burger").click(function(){
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
        $(".header").toggleClass("hidden")
        $("body").toggleClass("hidden")
    })
});