$(document).ready(function() {

  coffeeCounter();

});

function coffeeCounter(){
  var coffeeMil = 0;
  var counterSpeed = 400;

  setInterval(regularSpeed,counterSpeed);

  $('#coffeecounter').mouseover(function(){
      setInterval(fastSpeed,10);
      $('#coffeecounter').css({
        'background-color':'red',
        'color':'white'
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
