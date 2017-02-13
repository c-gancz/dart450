$(document).ready(function (){

introDoors();
inputValue();


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

function inputValue (){

  $('button').click(function(){
    var inputValue = $('#inputvalue').val();
    var voiceResponse = 'Hey there' + inputValue + 'You have an interesting name. Not as interesting as mine though, and definetly not as interesting as my life.';
    var inputDisappear = $('.input');
    var doorsDisappear = $('.sliding-doors');

    responsiveVoice.speak(voiceResponse, "US English Female", {
      rate:0.7,
      pitch:1
    });

    $(inputDisappear).remove();
    $(doorsDisappear).fadeOut(2000);
  });

};
