$(document).ready(function () {

  var baseUrl = '/api/portfolio_items';

  //handlebars set up

  var source = $('#portfolio_items-template').html();
  var template = Handlebars.compile(source);

  //get all database items

  $.get(baseUrl, function (data) {
    var dataHtml = template({ portfolio_items: data});
    $("#portfolio_items-list").append(dataHtml);
  });

  //reveal info about portfolio item

  // $('.test_text').hide();

  // $('.test_pic').hover(function () {
  //   $(this).stop().animate({
  //       opacity: .1
  //   }, 200);
  //   $('.test_text').show();
  // }, function () {
  //   $(this).stop().animate({
  //       opacity: 1
  //   }, 500);
  //   $('.test_text').hide();
  // });

  //experimental

  // var id = 0;
  

  // while (id < 3) {
  //   $('#text' + id).hide();

  //   $('#pic' + id).hover(function () {
  //     $(this).stop().animate({
  //         opacity: .1
  //     }, 200);
  //     $(textid).show();
  //   }, function () {
  //     $(this).stop().animate({
  //         opacity: 1
  //     }, 500);
  //     $('#text' +  id).hide();
  //   });
  //   id ++;
  

  // };

  //reveal info about portfolio item for mobile

  // $('#test_pic').tap(function () {
  //   $(this).stop().animate({
  //       opacity: .1
  //   }, 200);
  //   $('#test_text').show();
  // }, function () {
  //   $(this).stop().animate({
  //       opacity: 1
  //   }, 500);
  //   $('#test_text').hide();
  // });


});




