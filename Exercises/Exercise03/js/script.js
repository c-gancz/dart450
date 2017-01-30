$(document).ready(function(){

  var uglypolitics = $('#uglypolitics');
  $(uglypolitics).click(function(){
  const MAX_SECTIONS = 6;

  for (var i = 0; i < MAX_SECTIONS; i++) {
      var section = $('<section id="section' + i + '"><h1>CLICK TRUMP<h1><img src="img/trump.jpg"></section>');
      $('body').append(section);

      $(section).css({
        "box-sizing":"border-box",
        "width": "200px",
        "height": "200px",
        "background-color": "green",
        "color":"yellow",
        "display": "inline-block",
        "margin":"20px",
        "padding":"30px",
        "line-height":"40px",
      });

      $('img').css({
        "width":"100%",
      });

      $(section).click(clinton)
  }
  });

});

  function clinton () {
    var clinton = $('<div><img src="img/clinton1.jpg"><h1>CLICK ME</h1></div>');
    $(clinton).css({
      "display": "inline-block",
      "top": "-2000px",
      "color": "red",
    });
    $('body').append(clinton);
    $(clinton).click(obama);
  }

  function obama (){
    var obama = $('<div><img src="img/obama1.jpg"></div>');
    $(obama).css({
      "display": "inline-block",
    });
    $('body').append(obama);
  }
