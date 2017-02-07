$(document).ready(function (){

  nameResponse();

});

function nameResponse (){
  $('#name').click(function (){
    var voice = 'US English Female';
    var voiceParameters = {
      pitch: 1,
      rate: 0.9,
      volume: 1
    }

    responsiveVoice.speak("I don't like that name. Change your name!", voice, voiceParameters);
  });
}
