$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo-malito.png");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo-malito-dark.png");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();

    //===== 



});

function nextSlideBootstrap() {
    var currentSlide = $('#carousel').find('.active');
    var nextSlide = currentSlide.next();
    if (nextSlide.length == 0) {
        nextSlide = $('#carousel').find('.carousel-item').first();
    }
    nextSlide.addClass('active');
    currentSlide.removeClass('active');
}

function prevSlideBootstrap() {
    var currentSlide = $('#carousel').find('.active');
    var prevSlide = currentSlide.prev();
    if (prevSlide.length == 0) {
        prevSlide = $('#carousel').find('.carousel-item').last();
    }
    prevSlide.addClass('active');
    currentSlide.removeClass('active');
}