__webpack_require__.r(__webpack_exports__);
/* harmony import */
var _scss_cad_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./scss/cad.scss */ "./public_html/wp-content/themes/cad/assets/scss/cad.scss");
/* harmony import */
var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! jquery */ "jquery");
/* harmony import */
var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
// Main CSS.


var $body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
var $window = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window);
var $headerBreakPoint = 1024;
/**
 * Smooth scrolls to a target and optionally executes a callback.
 *
 * @param  {Object}   target
 * @param  {number}      offset
 * @param  {function} callback
 * @return {void}
 */

function smoothScroll(target, offset, callback) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({
        scrollTop: target.offset().top - offset
    }, 1000, 'swing', function() {
        if ('function' === typeof callback) {
            callback();
        }
    });
}

if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs').length !== 0) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs a').on('click', function(e) {
        e.preventDefault();

        if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('active')) {
            var clickTarget = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('target');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs a').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs-content[data-target!="' + clickTarget + '"]').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs-content[data-target="' + clickTarget + '"]').addClass('active');
        }
    });

    if (window.location.hash) {
        var hashVal = window.location.hash.substring(1);
        var activeTab = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs').find('a[data-target="' + hashVal + '"]');

        if (activeTab.length) {
            activeTab.trigger('click');
        }
    }
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()('#page-parts-listing__read-more').on('click', function(e) {
    e.preventDefault();
    var clickRef = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('href');

    if ($body.find(clickRef).length !== 0) {
        smoothScroll(jquery__WEBPACK_IMPORTED_MODULE_1___default()(clickRef), 0, null);
    }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('#show-remaining-member-committees').on('click', function() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hide();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#member-committees-first-block').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#remaining-member-committees').html());
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#remaining-member-committees').remove();
});

if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs__selectors').length !== 0) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-selector a').on('click', function(e) {
        e.preventDefault();

        if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('active')) {
            var clickTarget = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('tab');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-selector a').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-content[data-tab!="' + clickTarget + '"]').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-content[data-tab="' + clickTarget + '"]').addClass('active');
        }
    });
}
/*-----------------------------------------------------------------------------------*/

/*	Mobile Menu
/*-----------------------------------------------------------------------------------*/


jquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__hamburger').on('click', function(e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).next('.site-header__menu-container').toggleClass('site-header__menu-container--show');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__menu-container__close').on('click', function(e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.site-header__menu-container').toggleClass('site-header__menu-container--show');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__primary .menu > li > a, .site-header__primary .menu > li > .sub-text').on('click.nav-menu', function(e) {
    if ($window.width() <= $headerBreakPoint) {
        var megaMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).siblings('.site-header__mega-menu');

        if (0 !== megaMenu.length) {
            e.preventDefault();
            megaMenu.addClass('site-header__mega-menu--show');
        }
    }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__mega-menu__back').on('click.nav-menu', function(e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().removeClass('site-header__mega-menu--show');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__search__button').on('click.search-sub-menu', function(e) {
    e.preventDefault();

    if ($window.width() <= $headerBreakPoint) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).siblings('.site-header__search__container').addClass('site-header__search__container--show');
    }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__search__back').on('click.nav-menu', function(e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().removeClass('site-header__search__container--show');
});
/*-----------------------------------------------------------------------------------*/

/*	Facet filters
/*-----------------------------------------------------------------------------------*/

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters-container__filter-labels p').on('click.filter-items', function() {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
    var isActive = $this.hasClass('active') ? true : false;

    if (!isActive) {
        var filterBlock = $this.attr('id');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters-container__filter-labels p').removeClass('active');
        $this.addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters > div').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters > div[data-filter="' + filterBlock + '"]').addClass('active');
    }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.filter-button button').on('click', function() {
    $body.find('.facetwp-filters-container').addClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.close-filters').on('click', function() {
    $body.find('.facetwp-filters-container').removeClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').on('click', function() {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').hasClass('active')) {
        if ($window.width() >= 1024) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideUp();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
        }
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').slideUp();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').removeClass('active');

        if ($window.width() >= 1024) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideDown();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-type-sort').on('click', function() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').slideUp();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').removeClass('active');

    if ($window.width() >= 1024) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideDown();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-type-search input').on('focus', function() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').slideUp();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').removeClass('active');

    if ($window.width() >= 1024) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideDown();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
});
/*-----------------------------------------------------------------------------------*/

/*	Schedules Read More
/*-----------------------------------------------------------------------------------*/

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.schedule-detail__show-more', function() {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
    $this.fadeOut(500);
    $this.closest('.schedule-detail__main-content.collapsed').animate({
        'max-height': '40000px'
    }, 1000);
});

if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail').length !== 0) {
    var contentHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail__main-content').outerHeight();

    if (850 < contentHeight) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail__main-content').addClass('collapsed');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail__main-content').append('<div class="schedule-detail__show-more"><p>Read More <span class="icon-arrow-down2"></span></p></div>');
    }
}
/*-----------------------------------------------------------------------------------*/

/*	Homepage slider
/*-----------------------------------------------------------------------------------*/


jquery__WEBPACK_IMPORTED_MODULE_1___default()('.homepage__slides .wrapper').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.homepage__slider-with-nav').each(function() {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
    var prevNav = $this.parent().find('.homepage__slider-with-nav__prev');
    var nextNav = $this.parent().find('.homepage__slider-with-nav__next');
    $this.slick({
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        prevArrow: prevNav,
        nextArrow: nextNav
    });
});
/*-----------------------------------------------------------------------------------*/

/*	Sidebar navigation list on Debate volumes page.
/*-----------------------------------------------------------------------------------*/

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sidebar-navigation').each(function() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.sidebar-navigation__handle').on('click.open-sidebar', function() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).next('.sidebar-navigation__content').addClass('active');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.sidebar-navigation__content__close').on('click.close-sidebar', function() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.sidebar-navigation__content').removeClass('active');
    });
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.social-links-block').each(function() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.social-links-block__handle').on('click.toggle-social-links', function() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).next('.social-links-block__wrap').slideToggle();
    });
});

if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cmswt-Filter-data_date').length !== 0) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.filter-date-toggle').on('click', function() {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().toggleClass('toggle-active');
    });
}

//# sourceURL=webpack:///./public_html/wp-content/themes/cad/assets/theme.js?