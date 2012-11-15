/*--
//
//PracticeUpdate Scripts
//
 --*/
;(function(){
  /*-- Mustache - Top-bar --*/
    $.getJSON('content/json/top-bar.json', function(data) {
      $.get('assets/mustache/top-bar.mustache', function(template) {
        //alert('Load was performed.');
        var html = Mustache.to_html(template, data);
        $('.page-header').html(html);
        //Disable "Learn" during beta phase -- Remove once Learn/CME goes live
        $('.top-bar a.learn').attr('data-reveal-id', 'modal-feature-disabled');
      });
    });

  /*-- Mustache - Main Search Panel --*/
  //$.get('assets/mustache/main-search.mustache', function(template) {
  //  var html = Mustache.to_html(template);
  //  $('.main-search').html(html);
  //});


  /* Mustache - homepage footer template */
  $.get('assets/mustache/page-footer.mustache', function(template) {
      //alert('Load was performed.');
      var html = Mustache.to_html(template);
      $('.page-footer').html(html);
    });

  /* Mustache - explore slider template */
  $('.explore-feature').orbit({pauseOnHover: false, directionalNav: false, bullets: true, fluid: '16x9'});
  //   console.log("explore slider initialized");
  /*-- Modals --*/
  //Import Modals
  $.get('assets/mustache/modals.mustache', function(template) {
    var html = Mustache.to_html(template);
    $('body').append(html);
  });
})(jQuery, this);

/*--
//
//Begin Original Foundation Scripts
//
 --*/
;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $('input, textarea').placeholder();
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);