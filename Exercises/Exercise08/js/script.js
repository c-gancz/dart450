

$(document).ready(function() {

  $('#audio').click(function(){

    $('#audio').css({
      'background-color':'yellow'
    });

    audioAssist();

  });


});

function audioAssist(){
  var voice = 'US English Female';
  var voiceParameters = {
    pitch: 1,
    rate: 0.9,
    volume: 1
  }

  $('#everything').blast({
    delimiter: 'sentence'
  });

  $('.blast').mouseover(function () {
    responsiveVoice.speak($(this).text(),voice,voiceParameters);

    $(this).css({
      'background-color':'yellow'
    });
  });

    $('.blast').mouseout(function(){
      $(this).css({
        'background-color':'rgba(255, 255, 255, 0)'
      });
    })

    $('#username').mouseover(function(){
      responsiveVoice.speak('Username',voice,voiceParameters);
    });

    $('#password').mouseover(function(){
      responsiveVoice.speak('Password',voice,voiceParameters);
    });
};
