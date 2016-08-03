$(document).ready(function () {

  $('#test_text').hide();

  $('#test_pic').hover(function () {
    $(this).stop().animate({
        opacity: .1
    }, 200);
    $('#test_text').show();
  }, function () {
    $(this).stop().animate({
        opacity: 1
    }, 500);
    $('#test_text').hide();
  });

  $('#test_pic').tap(function () {
    $(this).stop().animate({
        opacity: .1
    }, 200);
    $('#test_text').show();
  }, function () {
    $(this).stop().animate({
        opacity: 1
    }, 500);
    $('#test_text').hide();
  });

});