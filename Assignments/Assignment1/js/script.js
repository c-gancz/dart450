$(document).ready(function (){

introDoors();

inputResponse();




});

//////////////////// FUNCTIONS APPEAR HERE /////////////////////


function introDoors (){
  var doors = $('.sliding-doors');
  var input = $('.input');

  $(doors).mouseover(function (){
    $(input).fadeIn(3000);
  });

  $(input).mouseover(function (){
    $(doors).css({
      'background-color':'orange'
    });
  });

  $(input).mouseout(function(){
    $(doors).css({
      'background-color':'rgb(179, 49, 186)'
    });
  });
};

function inputResponse (){

  $('button').click(function(){
    var inputValue = $('#inputvalue').val();
    var inputDisappear = $('.input');
    var doorsDisappear = $('.sliding-doors');
    var date = new Date();
    var today = date.getDay();
    var todayName = 'Nothing.'

    if (today == 0) {
      todayName = 'Sunday';
    }
    else if (today == 1) {
      todayName = 'Monday, which is kind of a crappy day.';
    }
    else if (today == 2) {
      todayName = 'Tuesday';
    }
    else if (today == 3) {
      todayName = 'Wednesday';
    }
    else if (today == 4) {
      todayName = 'Thursday';
    }
    else if (today == 5) {
      todayName = 'Friday';
    }
    else if (today == 6) {
      todayName = 'Saturday';
    }

    var voiceResponse = 'Hello there,' + inputValue + ', Welcome to my life on a weekly basis. Today is ' + todayName;
    responsiveVoice.speak(voiceResponse, "Australian Female", {
      rate: 0.9,
      pitch:1
    });

    $(inputDisappear).remove();
    $(doorsDisappear).fadeOut(2000);
  });
};
