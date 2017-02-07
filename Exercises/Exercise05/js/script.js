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
    responsiveVoice.speak("No seriously, change it.", voice, voiceParameters);
    responsiveVoice.speak("It's the worst name I've ever heard.", voice, voiceParameters);

  $('#firstname').hide();

  $('#newname').show(function (){
    $('#name2').click(function(){
      responsiveVoice.speak("Oh for the love of God, that name is more pathetic than the first one.", voice, voiceParameters);
      responsiveVoice.speak("I think you should just leave the webpage now, this is just embarassing for all of us.", voice, voiceParameters);
      responsiveVoice.speak("Goodbye person with the worst name in history.", voice, voiceParameters);
    });
  });


  });
}
