$(document).ready(function() {

  'use strict';

  // =================
  // Randomise author order
  // =================

  var authors = $(".c-author");
  var brs = $(".c-author-br");
  if (authors.length == 4 && Math.random() > 0.5) {
    authors.eq(0).before(authors.eq(1));
    authors.eq(0).before(brs.eq(0));
    authors.eq(2).before(authors.eq(3));
    authors.eq(2).before(brs.eq(1));
  }

  // =================
  // Responsive layout
  // =================

  // Init Masonry
  var $masonry_grid = $('.js-grid').masonry({
    itemSelector: '.js-grid__col',
    percentPosition: true
  });

  // Layout Masonry after each image loads
  $masonry_grid.imagesLoaded().progress(function() {
    $masonry_grid.masonry('layout');
  });

  // =================
  // Responsive videos
  // =================

  $('.o-wrapper').fitVids();

  // ===============
  // Off Canvas menu
  // ===============

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
  });

  // ========================
  // Post Card Images Fade
  // ========================

  $('.js-fadein').viewportChecker({
    classToAdd: 'is-inview', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true
  });

  // ======
  // Search
  // ======

  var search_field = $('.js-search-input'),
      search_results = $('.js-search-result'),
      toggle_search = $('.js-search-toggle'),
      search_result_template = "\
        <div class='c-search-result__item'>\
          <a class='c-search-result__title' href='{{link}}'>{{title}}</a>\
        </div>";

  toggle_search.click(function(e) {
    e.preventDefault();
    $('.js-search').addClass('is-active');
    $('body').css('overflow','hidden');
    $('html').css('overflow','hidden');


    // If off-canvas is active, just disable it
    $('.js-off-canvas-container').removeClass('is-active');

    setTimeout(function() {
      search_field.focus();
    }, 500);
  });

  function closeSearch() {
    $('.c-search').removeClass('is-active');
    $('body').css('overflow','auto');
    $('html').css('overflow','auto');
  }

  $(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
       closeSearch();
    }
  });

  $('.js-search-close').click(function() {
    closeSearch();
  });

  search_field.ghostHunter({
    results: search_results,
    onKeyUp         : true,
    rss             : base_url + '/feed.xml',
    info_template   : "<h4 class='c-search-result__head'>Number of posts found: {{amount}}</h4>",
    result_template : search_result_template,
    zeroResultsInfo : false,
    before: function() {
      search_results.fadeIn();
    }
  });

});