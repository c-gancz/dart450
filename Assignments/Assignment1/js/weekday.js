$(document).ready(function() {

  coffeeCounter();

});

function coffeeCounter(){
  var coffeeMil = 0;
  var counterSpeed = 400;
  var coffeeTalk = "OH MY GOD! You're trying to make her heart explode, aren't you?!"

  setInterval(regularSpeed,counterSpeed);

  $('#coffeecounter').mouseover(function(){
      setInterval(fastSpeed,10);
      $('#coffeecounter').css({
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
