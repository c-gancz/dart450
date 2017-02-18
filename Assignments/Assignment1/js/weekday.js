$(document).ready(function() {

  coffeeCounter();

  textMessage();

  messageOptions();

  textLoop();

});

function coffeeCounter(){
  var coffeeMil = 0;
  var counterSpeed = 400;
  var counterCoffee = $('#coffeecounter');
  var coffeeTalk = "OH MY GOD! You're trying to make her heart explode, aren't you?!"

  setInterval(regularSpeed,counterSpeed);

  $(counterCoffee).mouseover(function(){
      setInterval(fastSpeed,10);
      $(counterCoffee).css({
        'background-color':'red',
        'color':'white'
      });
      responsiveVoice.speak(coffeeTalk, "Australian Female", {
        rate: 1.2,
        pitch:1
      });
  });

  function regularSpeed(){
    $("#counter").text(coffeeMil);
      coffeeMil++;
    $('#coffeecounter').show();
  };

  function fastSpeed(){
    $("#counter").text(coffeeMil);
      coffeeMil++;
    $('#coffeecounter').show();
    $("#info").text('HEY STOP MAKING CHRISTINA DRINK COFFEE!!');

  };
};

function textMessage(){
  var textPopUp = $('.speech-bubble');
  var interval = 3000;
  var clickReply = $('.reply');
  var replyBox = $('textarea');
  var sendButton= $('button');

  setInterval(function () {
      $(textPopUp).fadeIn();
  },interval);

  $(clickReply).click(function (){
    $(replyBox).show();
    $(sendButton).show();
    $('#float').show();
  });
};

function messageOptions(){
  var options = [
    "Choose from your usual responses:",
    "Gooddd morning howw are youu??",
    "I'm on my way to school, where you at?",
    "I'm so tired I need sleep.",
    "Whaaaaattt?? No way.",
    "Soo bored and fed up!!"
  ];

  $('#one').text(options[0]);
  $('#2').text(options[1]);
  $('#3').text(options[2]);
  $('#4').text(options[3]);
  $('#5').text(options[4]);

};

function textLoop(){

  $('button').click(function(){

    const TOTAL_DIVS = 10;
    const INTERVAL = 1000;

    setInterval(function () {

      for (var i = 0; i < TOTAL_DIVS; i++) {
        var div = $('<div id="inputtext' + i + '" class="input"></div>')
        var replyInput = $('textarea').val();

        $(div).text(replyInput);
        $('#holder').append(div);
      }
    },INTERVAL);
  });
};
