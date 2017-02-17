$(document).ready(function() {

  coffeeCounter();

  textMessage();

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
  });
};
