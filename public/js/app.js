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

});




