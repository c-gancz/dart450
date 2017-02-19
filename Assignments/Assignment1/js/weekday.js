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
    "Choose from your usual responses, or type in the box to formulate your own message.",
    "Gooddd morning howw are youu??",
    "I'm on my way to school, where you at?",
    "I'm so tired I need sleep.",
    "Whaaaaattt?? No way.",
    "Soo bored and fed up!!"
  ];

  var abusiveResponses = [
    "Focus dammit. Stop texting would you?",
    "If you keep texting you will not finish your work, and if you don't finish your work, you will fail.",
    "Distractions... Distractions... Distractions."
  ]

  var optionDivs = ["#one", "#2", "#3", "#4", "#5", "#6"]

  var randomDivs = optionDivs[Math.floor(Math.random() * optionDivs.length)];

  var randomResponse = abusiveResponses[Math.floor(Math.random() * abusiveResponses.length)];

  $('#one').text(options[0]);
  $('#2').text(options[1]);
  $('#3').text(options[2]);
  $('#4').text(options[3]);
  $('#5').text(options[4]);
  $('#6').text(options[5]);

  $(randomDivs).click(function(){
    $(optionDivs[0]).text(randomResponse);
    $(optionDivs[1]).text(randomResponse);
    $(optionDivs[2]).text(randomResponse);
    $(optionDivs[3]).text(randomResponse);
    $(optionDivs[4]).text(randomResponse);
    $(optionDivs[5]).text(randomResponse);
    $(optionDivs[6]).text(randomResponse);

    $('.responses').addClass('animate');
    $('.responses').css({
      'width':'20%',
      'position':'relative',
      'font-size':'30px',
      'padding':'40px',
      'text-align':'center',
      'margin-bottom': '50px',
      'display':'inline-block',
      'margin-right':'7.5%',
      'cursor':'auto'
    });

    $('#float').css({
      'margin-left':'7.5%',
      'margin-top':'-372px'
    });
  });


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

  $('#holder').mouseover(function(){
      $('#holder').css({
        'font-size':'30px',
        'color':'red'
      });
  });

  $('#holder').mouseout(function(){
    $('#holder').css({
      'font-size':'18px',
      'color':'black'
    });
  })
};
