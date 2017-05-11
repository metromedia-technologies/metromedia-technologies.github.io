'use strict';

(function ($) {
  var $window = $(window);
  var $date = $('.date__lockup');
  var $year = $('.about__year');
  var $dotYear = $('.dot__date');
  var $heading = $('.about__heading');
  var $body = $('.about__body');
  var $event1 = $('.about__event-1');
  var $event2 = $('.about__event-2');

  var year = 1987;

  $date.stick_in_parent({ offset_top: 70 });

  $(document).ready(function () {
    $event1.addClass('about--showing');
    $heading.eq(0).addClass('about--showing');
    $body.eq(0).addClass('about--showing');

    $year.animate({ opacity: 1 }, 400);
  });

  $(window).resize(function () {
    if ($(window).width() <= 809) {
      $dotYear.css('display', 'inline-block');
    } else if ($(window).width() > 809) {
      $dotYear.css('display', 'none');
    }
  });

  $window.scroll(function () {
    var scrollTop = $window.scrollTop();

    if (isScrolledIntoView($('.about__event-2'), $(window).height() - 140)) {
      $event2.addClass('about--showing');
      $heading.eq(1).addClass('about--showing');
      $body.eq(1).addClass('about--showing');
    }

    console.log($year.offset().top, $event2.offset().top);

    if ($date.offset().top >= $event1.offset().top - 70 && $year.offset().top <= $event2.offset().top - 75 && year != 1987) {
      dateChange(1987);
    }
    if ($dotYear.offset().top >= $event1.offset().top - 70 && $dotYear.offset().top <= $event2.offset().top - 140 && year != 1987) {
      dateChange(1987);
    }

    if ($date.offset().top >= $event2.offset().top - 65 && year != 1995) {
      dateChange(1995);
    }
    if ($dotYear.offset().top >= $event2.offset().top - 140 && year != 1995) {
      dateChange(1995);
    }
  });

  function dateChange(newDate) {
    year = newDate;
    $year.velocity("stop", true);
    $dotYear.velocity("stop", true);

    $year.velocity("transition.slideUpBigOut", {
      duration: 250,
      complete: function complete() {
        $year.html(newDate);
      }
    }).velocity("transition.slideUpBigIn", {
      duration: 250
    });

    if ($dotYear.css('display') != 'none') {
      $dotYear.velocity("transition.slideUpBigOut", {
        duration: 250,
        complete: function complete() {
          $dotYear.html(newDate);
        }
      }).velocity("transition.slideUpBigIn", {
        duration: 250
      });
    }
  }

  function isScrolledIntoView(elem, offsetDistance) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + offsetDistance;

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
})(jQuery);