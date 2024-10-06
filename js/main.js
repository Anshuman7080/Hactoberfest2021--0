(function ($) {
    "use strict";

    // Loader
    const loader = () => {
        setTimeout(() => {
            $('#loader').removeClass('show');
        }, 1);
    };
    loader();

    // Initiate WOW.js
    new WOW().init();

    // Back to Top Button
    const $backToTop = $('.back-to-top');
    $(window).scroll(() => {
        $backToTop.toggle($(this).scrollTop() > 200);
    });
    $backToTop.click(() => {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar
    $(window).scroll(() => {
        $('.navbar').toggleClass('nav-sticky', $(this).scrollTop() > 0);
    });

    // Smooth Scrolling for Navbar Links
    $(".navbar-nav a").click(function (event) {
        if (this.hash) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: $(this.hash).offset().top - 45 }, 1500, 'easeInOutExpo');
            $('.navbar-nav .active').removeClass('active');
            $(this).addClass('active');
     
