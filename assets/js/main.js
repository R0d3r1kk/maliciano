
$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        getDirectories();
        $('.preloader').delay(500).fadeOut(500);
    });

    //===== Gallery Images
    var getDirectories = () => {
        $.ajax({
            url: "./assets/php/actions.php",
            type: "POST",
            content_type: "application/json",
            data: {
                action: "get_images",
            },
            success: function (data) {
                console.log(data);
                var dotComaReplaced = data.replaceAll(";", "");
                var bracketReplaced = dotComaReplaced.replace("[", "");
                var bracketReplaced = bracketReplaced.replace("]", "");
                var imgList = bracketReplaced.split(",");


                imgList.map(imgpath => {
                    var imgpath = imgpath.replace("..", "");
                    var imgpath = imgpath.replaceAll("\"", "");
                    var imgpath = imgpath.replaceAll("\\", "");
                    var path = "./assets" + imgpath;
                    var ca_item = $("<div class='carousel-item'></div>")
                        .append(img_create(path, 'img-item d-block w-100'));
                    $('#carousel-image-container').append(ca_item);
                });
            },
            error: function (err) {
                console.log(err);
            }
        });
    }



    function img_create(src, clases, alt = "...", title = null) {
        var img = document.createElement('img');
        img.src = src;
        clases.split(" ").map(cls => img.classList.add(cls));


        // Get the modal
        var modal = document.getElementById("GalleryModal");
        var modalImg = document.getElementById("ImgPreview");
        var captionText = document.getElementById("ImgCaption");

        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementById("ModalClose");

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
        if (alt != null) img.alt = alt;
        if (title != null) img.title = title;
        return img;
    }

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

            var sectionOffset = $(this.hash).offset().top - 200;

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