$(function() {
  // Ranks for Skills in Section 2
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
})
