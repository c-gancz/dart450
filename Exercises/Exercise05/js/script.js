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
    responsiveVoice.speak("I don't like that name. Change your name... No seriously, change it.", voice, voiceParameters);

  $('#firstname').hide();

  $('#newname').show(function (){
    $('#name2').click(function(){
      responsiveVoice.speak("Oh for the love of God, that name is more pathetic than the first one. I think you should just leave the webpage now, this is just embarassing for all of us.", voice, voiceParameters);
      $('section').remove();
      $('body').css({
        'background-color':'black'
      });
    });
  });


  });
}
