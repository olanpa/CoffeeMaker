$(window).on('load', function () {
    var $preloader = $('#prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(function () {
        $("#tabs").tabs();
    });
//bootstrap slider gallery
    var carousel = $('#carouselGallery'),
        count = $('.item', carousel).length,
        slideCarousel = function () {
            var index = $('.item.active', carousel).index() + 1;
            $('#current').text(index);
            $('#count').text(count);
        };
    $('#carouselGallery').carousel({interval:false});
    carousel.on('slid.bs.carousel', slideCarousel).trigger('slid.bs.carousel');


    $('#carousel-testimonials').carousel({
        interval: false
    });
    //плавна прокрутка page
    $('a[href^="#"]').click( function(){
        var scroll_el = this.hash;
        //or $(this).prop('hash') or $(this).attr('href')
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 750);
        }
    });
});
