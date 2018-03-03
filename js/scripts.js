(function ($) {

  $(document).ready(function () {
    $('#municipality-picker-select').chosen({
      width: "100%"
    });

    var topBarHeight = $('.fixed-top-bar').height();
    var navigationHeight = $('.navigation-section').height();
    var headerOffset = $('.navigation-section').offset().top - topBarHeight;
    var body = $('body');
    var scroll;

    fixedNavigation();

    $(window).scroll(function (e) {
      fixedNavigation();
    });

    function fixedNavigation() {
      scroll = $(window).scrollTop();
      if (scroll >= headerOffset) {
        body.addClass('fixed-header');
        $('.nav-col').css('height', navigationHeight + 'px');
      }
      else {
        body.removeClass('fixed-header');
        $('.nav-col').css('height', '');
      }
    }

    $('.lang-picker-toggle').dropdown()

    var timers = document.querySelectorAll('.countdown-timer');

    timers.forEach(function (timer) {

      var endDate = timer.dataset.date;
      var countDownDate = new Date(endDate).getTime();
      var interval = setInterval(function() {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        timer.querySelector('.days .num').innerHTML = days;
        timer.querySelector('.hours .num').innerHTML = hours;
        timer.querySelector('.minutes .num').innerHTML = minutes;

        if (distance < 0) {
          clearInterval(interval);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }

      }, 1000);

    });

  });

})(jQuery);


// By Sohel Amin www.sohelamin.com or www.appzcoder.com
$(function() {
  // Find all YouTube videos
  var $allVideos = $("iframe[src^='http://www.youtube.com']"),
    // The element that is fluid width
    $fluidEl = "div.youtube-wrapper";
  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {
    $(this)
      .data('aspectRatio', this.height / this.width)
      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');
  });

  // When the window is resized
  // (You'll probably want to debounce this)
  $(window).resize(function() {
    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {
      var $el = $(this);
      var newWidth = $el.parent($fluidEl).width();
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));
    });
    // Kick off one resize to fix all videos on page load
  }).resize();
});
