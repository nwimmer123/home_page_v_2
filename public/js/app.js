$(document).ready(function(){

  $('#andersen_text').hide();

  $('#andersen_pic').hover(function() {
    $('#andersen_text').show();
    $('#andersen_pic').hide();
  });

  $('#andersen_pic').mouseover(function() {
    console.log("CLICKED");
    $('#andersen_text').show();
    $('#andersen_pic').hide();
  });

});