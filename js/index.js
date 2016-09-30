$(function() {
  /**
   * Handle Bullets for Section 2
   */
  var skills = [
    10, 10, 10, 8, 8, 6, 6, 6, 4, 10
  ];

  $('.rating-column p').each(function(i) {
    $(this).html(convertToBullets(skills[i]));
  });

  function convertToBullets(x) {
    strFull = '';
    strDull = '';
    for (var i = 0; i < x; i++) {
      strFull += '&bull; ';
    }
    for (var i = 0; i < (10 - x); i++) {
      strDull += '&bull; ';
    }
    return '<span class="full">' + strFull + '</span> <span class="dull">' + strDull + '</span>';
	}

  /**
   * Slider for Section 3
   */
   var slide = 1;

   $('.work-headings h2:nth-child(1)').click(function() {
    var width = $(this).width();
    $('.underline').css({
      "width": width,
      "left": "0",
      "transform": "none"});

      console.log()
    $('#project1').show();
    $('#project2').hide();
    $('#project3').hide();
    slide = 1;
  });

  $('.work-headings h2:nth-child(2)').click(function() {
     var width = $(this).width();
     $('.underline').css({
       "width": width,
       "left": "50%",
       "transform": "translateX(-50%)"});
     $('#project1').hide();
     $('#project2').show();
     $('#project3').hide();
     slide = 2;
   });

   $('.work-headings h2:nth-child(3)').click(function() {
      var width = $(this).width();
      $('.underline').css({
        "width": width,
        "left": "calc(100% - " + width + "px)",
        "transform": "none"});
      $('#project1').hide();
      $('#project2').hide();
      $('#project3').show();
      slide = 3;
    });

    $('.next').click(function() {
      var nextSlide;
      if (slide == 1) {
        nextSlide = 2;
      } else if(slide == 2) {
        nextSlide = 3;
      } else {
        nextSlide = 1;
      }
       $('.work-headings h2:nth-child('+nextSlide+')').trigger('click');
       $(this).blur();
    });

    $('.prev').click(function() {
      var prevSlide;
      if (slide == 1) {
        prevSlide = 3;
      } else if(slide == 2) {
        prevSlide = 1;
      } else {
        prevSlide = 2;
      }
       $('.work-headings h2:nth-child('+prevSlide+')').trigger('click');
       $(this).blur();
    });
})
