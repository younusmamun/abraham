/*
* ----------------------------------------------------------------------------------------
 Author       : Design_Dude
 Template Name: Abraham Portfolio Template
 Version      : 1.0
* ----------------------------------------------------------------------------------------
*/

(function ($){
    'use strict';

    jQuery(document).ready(function() {


        /*
         * ----------------------------------------------------------------------------------------
         *  PRELODER JS
         * ----------------------------------------------------------------------------------------
         */

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  NAVIGATION
         * ----------------------------------------------------------------------------------------
         */

        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */
        function initParallax() {
          $('#home').parallax("50%", 30);
          $('#counter').parallax("50%", 50);
          $('#about').parallax("50%", 100);
          $('#service').parallax("50%", 20);
          $('#work').parallax("50%", 40);
          $('#address').parallax("50%", 100);
          $('#contact').parallax("50%", 50); }
        initParallax();


        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        $('.test-popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
            
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  TYPER JS
         * ----------------------------------------------------------------------------------------
         */

        $('.home-title p span.test').typed({
            strings: ["AM WEB DESIGNER","LOVE TO DESIGN"],
            loop: true,
            startDelay: 1000,
            backDelay: 2000
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  OWL CAROUSEL ON TESTIMONIAL JS
         * ----------------------------------------------------------------------------------------
         */

        $(".owl-carousel").owlCarousel({
            items: 1,
            autoplay: true,
            loop:true,
            navigation: true,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [992, 2],
            itemsTablet: [767, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
            autoplayHoverPause:true


        });

         /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */


        $(function() {
          $('#home a, .my-navbar a').on('click', function(event) {
            var $anchor = $(this);
              $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
              }, 1000);
                event.preventDefault();
          });
        });

                /*
         * ----------------------------------------------------------------------------------------
         *  Form Email Send
         * ----------------------------------------------------------------------------------------
         */

        var form = $('#contact-form');
        form.submit(function(event){
            event.preventDefault();
            //console.log('Perfect I am in!');
            var form_status = $('<div class="form_status"></div>');
            var data = {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            };
            $.ajax({
                url: $(this).attr('action'),
                type: "POST",
                dataType: "json",
                data: {'data': data},
                beforeSend: function(){
                    form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
                },
                success: function (data) {
                    if(data == 1){
                        form_status.html('<p class="text-success">Thank you, your message has been sent successfully.</p>').delay(3000).fadeOut();
                    }
                    else{
                        form_status.html('<p class="text-error">Sorry, email not sent</p>').delay(3000).fadeOut();
                    }
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });


    });

}) (jQuery);
    
