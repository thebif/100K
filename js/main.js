$(function(){

  // ------------------------------------
  // Handle In-Page Navigation Page Jumps
  // ------------------------------------

  $('.link-jump, .hero-jump').on('click',function(e){

      // prevent defalt click behavior
      e.preventDefault();

      // identify target
      var target = $(this).attr('href');
      var top = $(target).offset().top;

      // animate scroll to target
      $('html,body').animate({
        scrollTop: top
      },700);

  });

  // ----------------------------
  // Layout Cards in Masonry Grid
  // ----------------------------

  var $grid = $('.teams-grid');

  // add masonry grid-sizers for layout
  $grid.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');

  // layout .card elements in masonry grid after images have loaded
  $grid.imagesLoaded(function() {

    $grid.masonry({
      itemSelector: '.card',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      percentPosition: true
    });

  });

  // --------------------------------------------
  // Set Up Documents Accordian and Handle Events
  // --------------------------------------------

  // close all .doc-groups
  $('.doc-group').addClass('js-close-group');

  // add toggle button to all .doc-groups
  $('.doc-group').append('<div class="toggle-group icon-"></div>');

  // handle toggle events (css handles most of this -- .doc-group height, toggle text)
  $('.toggle-group, .doc-group > h1').on('click',function(){
    // open selected .doc-group
    $(this).parent().toggleClass('js-close-group js-open-group');
  });


  // --------------------------------------------
  // Helpers
  // --------------------------------------------

  // open rel=external links in a new window
  $('a[rel*=external]').attr('target','_blank').attr('title','Link opens in new window');


});