var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

$(document).ready(function() {
  $('.color-button').on('click', function() {
    var $el = $(this).data();
    console.log($el);
    $('.container').append('<div class="color-cube ' + $el.color + '"></div>');
    if ($el.color === 'red') {
      redCount++;
      $('#red').text(redCount);
    } else if ($el.color === 'yellow') {
      yellowCount++;
      $('#yellow').text(yellowCount);
    } else if ($el.color === 'green') {
      greenCount++;
      $('#green').text(greenCount);
    }else if ($el.color === 'blue') {
      blueCount++;
      $('#blue').text(blueCount);
    }
  });
});
