$(function () {

    //preloader js 
    $(window).load(function () {
        $('.preloader_main').delay(1000).fadeOut(1000);
    })

    //    top scrollbar
    $(window).scroll(function () {
        var scrolltop = $(window).scrollTop();
        if (scrolltop > 200) {
            $('.top').fadeIn(1000)
        } else {
            $('.top').fadeOut(1000)
        }
    })
    $('.top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    //    menu js
    var scrolltop = $('.customnav').offset().top;
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll >= scrolltop) {
            $('.customnav').addClass('fixtop');
        } else {
            $('.customnav').removeClass('fixtop');
        }
    });

    //wow js
    new WOW().init();


    //    scrollspy menu
    $('body').scrollspy({
        target: '.customnav',
        offset: 80
    });
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

    //    banner js
    $('.banner').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow'
    });

    //counter js
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    //    filter part
    $('.filter-container').filterizr();

    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

    //    progress bar
    $('.progressbar').each(function () {
        var t = $(this);
        var dataperc = t.attr('data-perc'),
            barperc = Math.round(dataperc * 5.56);
        t.find('.bar').animate({
            width: barperc
        }, dataperc * 25);
        t.find('.label').append('<div class="perc"></div>');

        function perc() {
            var length = t.find('.bar').css('width'),
                perc = Math.round(parseInt(length) / 5.56),
                labelpos = (parseInt(length) - 2);
            t.find('.label').css('left', labelpos);
            t.find('.perc').text(perc + '%');
        }
        perc();
        setInterval(perc, 0);
    });

    //    team part
    $('.team_text_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.team_img_active'
    });
    $('.team_img_active').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.team_text_active',
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 800,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '.lefts_arrow',
        nextArrow: '.rights_arrow',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
     ]
    });

    //    feedback part
    $('.feedback_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 800,
    });

    //    plan part
    $('.venobox').venobox({
        titleBackground: 'red',
        titlePosition: 'top',
        titleColor: 'red',
        framewidth: '566px',
        spinner: 'double-bounce',
        closeColor: '#f1f1f1',
        closeBackground: '#00ada7',
    });
    //
    //    //   blog part
    $('.blog_content_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 800,
        prevArrow: '.leftss_arrow',
        nextArrow: '.rightss_arrow',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //    blog last part slide
    $('.blog-last-part-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]

    });

    //    google map
    var googleMapSelector = $('#map'),
        myCenter = new google.maps.LatLng(23.734337, 90.392739);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'images/logo-3.png'
        });
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }


});
