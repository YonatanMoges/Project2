$(document).ready(function () {


    // let $btns = $('.project-area .button-group button');


    // $btns.click(function (e) {

    //     $('.grid-area .button-group button').removeClass('active');
    //     e.target.classList.add('active');

    //     let selector = $(e.target).attr('data-filter');
    //     $('.grid-area .grid').isotope({
    //         filter: selector
    //     });

    //     return false;
    // })

    $('.grid-area .button-group #btn1').trigger('click');

    $('.grid-area .grid .test-popup-link').magnificPopup({
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

    

    navbarFixed();

});