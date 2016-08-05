$(document).ready(function () {

  var baseUrl = '/api/portfolio_items';

  //handlebars set up

  var source = $('#portfolio_items-template').html();
  var template = Handlebars.compile(source);

  //reveal info about portfolio item

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

  //reveal info about portfolio item for mobile

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




