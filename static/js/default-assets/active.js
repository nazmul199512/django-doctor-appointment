(function($) {
  'use strict';
  var dento_window = $(window);

  // *******************************
  // :: 1.0 Preloader Active Code
  // *******************************

  dento_window.on('load', function() {
    $('#preloader').fadeOut('1000', function() {
      $(this).remove();
    });
  });

  // *******************************
  // :: 2.0 ClassyNav Active Code
  // *******************************

  if($.fn.classyNav) {
    $('#dentoNav').classyNav();
  }

  // ***********************************
  // :: 3.0 Welcome Carousel Active Code
  // ***********************************

  if($.fn.owlCarousel) {
    var welcomeSlider = $('.welcome-slides');
    welcomeSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      nav: true,
      navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
      dots: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    })
    welcomeSlider.on('translate.owl.carousel', function() {
      var layer = $("[data-animation]");
      layer.each(function() {
        var anim_name = $(this).data('animation');
        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
      });
    });
    $("[data-delay]").each(function() {
      var anim_del = $(this).data('delay');
      $(this).css('animation-delay', anim_del);
    });
    $("[data-duration]").each(function() {
      var anim_dur = $(this).data('duration');
      $(this).css('animation-duration', anim_dur);
    });
    welcomeSlider.on('translated.owl.carousel', function() {
      var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
      layer.each(function() {
        var anim_name = $(this).data('animation');
        $(this).addClass('animated ' + anim_name).css('opacity', '1');
      });
    });
  }

  // **************************************
  // :: 4.0 Testimonials Slides Active Code
  // **************************************

  if ($.fn.owlCarousel) {
    $(".testimonials-slides").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        nav: true,
        navText: ["<i class='arrow_carrot-left'</i>", "<i class='arrow_carrot-right'</i>"],
        dots: false
    });
  }

  if($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  // :: 5.0 Wow Active Code
  if(dento_window.width() > 767) {
    new WOW().init();
  }
  // :: 6.0 CounterUp Active Code
  if($.fn.counterUp) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }
  // :: 7.0 Magnific-popup Video Active Code
  if($.fn.magnificPopup) {
    $('.video-play-button').magnificPopup({
      type: 'iframe'
    });

    $('.gallery_img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
      preloader: true
    });
  }
  // :: 8.0 Masonary Gallery Active Code
  if($.fn.imagesLoaded) {
    $('.dento-portfolio').imagesLoaded(function() {
      // filter items on button click
      $('.portfolio-menu').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });
      // init Isotope
      var $grid = $('.dento-portfolio').isotope({
        itemSelector: '.single_gallery_item',
        percentPosition: true,
        masonry: {
          columnWidth: '.single_gallery_item'
        }
      });
    });
  }
  // :: 9.0 Gallery Menu Style Active Code
  $('.portfolio-menu button.btn').on('click', function() {
    $('.portfolio-menu button.btn').removeClass('active');
    $(this).addClass('active');
  })
  // :: 10.0 Jarallax Active JS
  if($.fn.jarallax) {
    $('.jarallax').jarallax({
      speed: 0.2
    });
  }
  // // :: 11.0 niceScroll Active Code
  // if ($.fn.niceScroll) {
  //     $(".timelineBody").niceScroll();
  // }
  // :: 12.0 ScrollUp Active Code
  if($.fn.scrollUp) {
    dento_window.scrollUp({
      scrollSpeed: 2000,
      scrollText: '<i class="arrow_up"</i>'
    });
  }
  // :: 13.0 Sticky Active Code
  dento_window.on('scroll', function() {
    if(dento_window.scrollTop() > 40) {
      $('.main-header-area').addClass('sticky');
    } else {
      $('.main-header-area').removeClass('sticky');
    }
  });

  if ($.fn.barfiller) {
    $('#bar1').barfiller({
      barColor: '#00aeef'
    });
    $('#bar2').barfiller({
      barColor: '#00aeef'
    });
    $('#bar3').barfiller({
      barColor: '#00aeef'
    });
  }

  // // :: 14.0 onePageNav Active Code
  // if ($.fn.onePageNav) {
  //     $('#nav').onePageNav({
  //         currentClass: 'active',
  //         scrollSpeed: 1500,
  //         easing: 'easeOutQuad'
  //     });
  // }
  // // :: Animated Headline Active Code
  // if ($.fn.animatedHeadline) {
  //   $('.animated-ratate').animatedHeadline();
  // }
  //
  // if ($.fn.animatedHeadline) {
  //   $('.animated_Headline').animatedHeadline({
  //   animationType: 'loading-bar'
  //   });
  // }
  // // :: Accordian Active Code
  //     var dd = $('dd');
  //     dd.filter(':nth-child(n+3)').hide();
  //     $('dl').on('click', 'dt', function () {
  //         $(this).next().slideDown(500).siblings('dd').slideUp(500);
  //     })
  //     // :: PreventDefault a Click
  //     $("a[href='#']").on('click', function ($) {
  //         $.preventDefault();
  //     });
})(jQuery);
