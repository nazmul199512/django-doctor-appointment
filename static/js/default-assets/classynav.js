/* ******************************
 * classyNav.js 1.0.0
 * Responsive Megamenu plugins
 * Copyright (c) 2018 Designing World - https://themeforest.net/user/designing-world
****************************** */

(function ($) {
    $.fn.classyNav = function (options) {

        // Variables
        var navContainer = $('.classy-nav-container');
        var classy_nav = $('.classynav ul');
        var classy_navli = $('.classynav > ul > li');
        var navbarToggler = $('.classy-navbar-toggler');
        var closeIcon = $('.classycloseIcon');
        var navToggler = $('.navbarToggler');
        var classyMenu = $('.classy-menu');
        var var_window = $(window);

        // default options
        var defaultOpt = $.extend({
            theme: 'light',
            breakpoint: 991,
            openCloseSpeed: 350,
            megaopenCloseSpeed: 700,
            alwaysHidden: false,
            openMobileMenu: 'left',
            dropdownRtl: false,
            stickyNav: false,
            stickyFooterNav: false
        }, options);

        return this.each(function () {

            // light or dark theme
            if (defaultOpt.theme === 'light' || defaultOpt.theme === 'dark') {
                navContainer.addClass(defaultOpt.theme);
            }

            // open mobile menu direction 'left' or 'right' side
            if (defaultOpt.openMobileMenu === 'left' || defaultOpt.openMobileMenu === 'right') {
                navContainer.addClass(defaultOpt.openMobileMenu);
            }

            // dropdown rtl
            if (defaultOpt.dropdownRtl === true) {
                navContainer.addClass('dropdown-rtl');
            }

            // navbar toggler
            navbarToggler.on('click', function () {
                navToggler.toggleClass('active');
                classyMenu.toggleClass('menu-on');
            });

            // close icon
            closeIcon.on('click', function () {
                classyMenu.removeClass('menu-on');
                navToggler.removeClass('active');
            });

            // add dropdown & megamenu class in parent li class
            classy_navli.has('.dropdown').addClass('cn-dropdown-item');
            classy_navli.has('.megamenu').addClass('megamenu-item');

            // adds toggle button to li items that have children
            classy_nav.find('li a').each(function () {
                if ($(this).next().length > 0) {
                    $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
                }
            });

            // expands the dropdown menu on each click
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
                $(this).parent('li').toggleClass('active');
            });

            // add padding in dropdown & megamenu item
            $('.megamenu-item').removeClass('has-down');

            // expands the megamenu on each click
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
            });

            // check browser width in real-time
            function breakpointCheck() {
                var windoWidth = window.innerWidth;
                if (windoWidth <= defaultOpt.breakpoint) {
                    navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
                } else {
                    navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
                }
            }

            breakpointCheck();

            var_window.on('resize', function () {
                breakpointCheck();
            });

            // always hidden enable
            if (defaultOpt.alwaysHidden === true) {
                navContainer.addClass('breakpoint-on').removeClass('breakpoint-off');
            }

            // sticky
            if (defaultOpt.stickyNav === true) {
                var_window.on('scroll', function () {
                    if (var_window.scrollTop() > 0) {
                        navContainer.addClass('classy-sticky');
                    } else {
                        navContainer.removeClass('classy-sticky');
                    }
                });
            }

            // footer sticky
            if (defaultOpt.stickyFooterNav === true) {
                navContainer.addClass('classy-sticky-footer');
            }
        });
    };
}(jQuery));
