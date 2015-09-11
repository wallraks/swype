/*PRELOADER*/
$(window).load(function () {

    // Preloader
    $('.loading').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    // Spy Scroll
    $('[data-spy="scroll"]').each(function () 
        { var $spy = $(this).scrollspy('refresh'); 
    });
});



// Paralax Background 
$('.bgEffect').each(function () {
    var $obj = $(this);
    $(window).scroll(function () {
        var yPos = -($(window).scrollTop() / $obj.data('speed'));
        var bgpos = '50% ' + yPos + 'px';
        $obj.css('background-position', bgpos);
    });
});

// Sequence Slider Options
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 2000,
        preloader: true,
        preloadTheseFrames: [1],

    };
    
    var mySequence = $("#sequence").sequence(options).data("sequence");

// Scroll Reveal 
$(document).ready(function () {
    var config = {
        move: '50px',
        over: '0.80s',
        easing: 'ease-in-out',
        viewportFactor: 0.33,
        reset: false,
        init: true
    };

    var deviceAgent = navigator.userAgent.toLowerCase();
    var isTouchDevice = Modernizr.touch ||
        (deviceAgent.match(/(iphone|ipod|ipad)/) ||
            deviceAgent.match(/(android)/) ||
            deviceAgent.match(/(iemobile)/) ||
            deviceAgent.match(/iphone/i) ||
            deviceAgent.match(/ipad/i) ||
            deviceAgent.match(/ipod/i) ||
            deviceAgent.match(/blackberry/i) ||
            deviceAgent.match(/bada/i));

    if (isTouchDevice) {
        return false;
    } else {
        window.scrollReveal = new scrollReveal(config);
    }



});

// Slider owlCarousel

$(document).ready(function () {

    $("#clients").owlCarousel({
        pagination: false,
        autoPlay: 1500,
        stopOnHover: true,
        responsive: true,
    });

    $("#text-slider").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        slideSpeed: 1000,
        autoPlay: true,
        navigation: false,
        transitionStyle: true,
        transitionStyle: "goDown"

    });

    //Sticky Navigation
    $(".navbar").sticky({
        topSpacing: 0
    });



    // Hover on Team 
    $(".member").hover(
        function () {
            $(this).find(".member-overlay").stop(true, true).fadeIn();
            $('.portfolio-overlay i').addClass('animated fadeInLeft');
        },
        function () {
            $(this).find(".member-overlay").stop(true, true).fadeOut();
        }
    );


    // Hover on Portfolio
    $(".og-grid li").hover(
        function () {
            $(this).find(".portfolio-overlay").stop(true, true).fadeIn();
            $('.portfolio-overlay i').addClass('animated fadeInLeft');
        },
        function () {
            $(this).find(".portfolio-overlay").stop(true, true).fadeOut();
        }
    );


    // Portfolio Initial
    Grid.init();

    // Menu hide on Click - Mobile
    $('.nav a').on('click', function () {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });

    // MixItUp - Portfolio Filter
    $('#og-grid').mixItUp();

    // Tabs Portfolio active
    $(".tabs ul li").click(function () {
        $('li').removeClass("active-tab");
        $(this).addClass("active-tab");
    });

    // Smooth Scroll
    smoothScroll.init({
        speed: 800, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        offset: 55, // Integer. How far to offset the scrolling anchor location in pixels

    });




});




/*Chart Circles*/
$(window).scroll(function () {

    if ($(window).scrollTop() > $("#about").offset().top) {
        $('.chart').easyPieChart({
            lineWidth: 5,
            trackColor: "#a7acac",
            barColor: "#192536",
            animate: 2000,
            scaleColor: false
        });
    }
});




/*Rotate On hover */
$(".circle-services span").hover(
    function () {
        $(this).addClass("animated rotateIn");
    }, function () {
        $(this).removeClass("animated rotateIn");
    }
);


/*Social Icons on hover team overlay*/
$(".social").hover(
    function () {
        $("a.facebook").addClass("animated fadeInLeft");
        $("a.twitter").addClass("animated fadeInDown");
        $("a.pinterest").addClass("animated fadeInRight");
    },
    function () {
        $("a.facebook").removeClass("animated fadeInLeft");
        $("a.twitter").removeClass("animated fadeInDown");
        $("a.pinterest").removeClass("animated fadeInRight");
    }
);






/* GOOGLE MAP*/
