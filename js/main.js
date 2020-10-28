
//the code from this function will filter the pictures, from ALL, POPULAR, LATEST, FOLLOWING, and UPCOMING
$(document).ready(function () {


    let $btns = $('.project-area .button-group button');

     //gets the current click button with the current event (function(e))
    $btns.click(function (e) {
        //removes the active class from the ALL button
        $('.project-area .button-group button').removeClass('active');
        //adds active class to the button that was clicked
        e.target.classList.add('active');

        //getting the data-filter attribute from the button clicked
        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});