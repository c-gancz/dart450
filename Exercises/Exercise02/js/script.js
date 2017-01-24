
$(document).ready(function(){
  var hello = '#hello';
  var clicktoshow = '#click';
  var instructions ='#instructions';
  var year2013 = '#2013';
  var year2014 = '#2014';
  var year2015 = '#2015';
  var year2016 = '#2016';
  var year2017 = '#2017';

  $("button").click(function(){
    var yearentry = $('#yearentry').val();

    if (yearentry == "2013") {
      $(year2013).show();
      $(hello).hide();
      $(clicktoshow).hide();

      $(year2014).hide();
      $(year2015).hide();
      $(year2016).hide();
      $(year2017).hide();
    }

    if (yearentry == "2014") {
      $(year2014).show();
      $(hello).hide();
      $(clicktoshow).hide();

      $(year2013).hide();
      $(year2015).hide();
      $(year2016).hide();
      $(year2017).hide();
    }

    if (yearentry == "2015") {
      $(year2015).show();
      $(hello).hide();
      $(clicktoshow).hide();

      $(year2013).hide();
      $(year2014).hide();
      $(year2016).hide();
      $(year2017).hide();
    }

    if (yearentry == "2016") {
      $(year2016).show();
      $(hello).hide();
      $(clicktoshow).hide();

      $(year2013).hide();
      $(year2015).hide();
      $(year2014).hide();
      $(year2017).hide();
    }

    if (yearentry == "2017") {
      $(year2017).show();
      $(hello).hide();
      $(clicktoshow).hide();

      $(year2013).hide();
      $(year2015).hide();
      $(year2016).hide();
      $(year2014).hide();
    }
  });

  $(hello).hide();
  $(instructions).hide();

  $(clicktoshow).click(function(){
    $(hello).show();
    $(instructions).show();
  });

  $('.hide').hide();

});
