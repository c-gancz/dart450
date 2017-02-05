$(document).ready(function() {

  funSquares();

  var circle = $('<div id="circle"></div>');
    $('body').append(circle);

  $(circle).click(function (){
    $(funSquares).show(function (){
      $(funSquares).css({
        'position':'absolute'
      });
    });
  });

  $(circle).mouseover(function (){
    $(funSquares).show();
  });

});

function funSquares() {
  var wordString = [' This ', ' is ', 'fun!'];
    $('body').append(wordString);

  var square1 = $('<section id="square1"></section>');
  var square2 = $('<section id="square2"></section>');
  var square3 = $('<section id="square3"></section>');
  var square4 = $('<section id="square4"></section>');

  var arrayInstructions = [square1, square2, square3, square4]
      $('body').append(arrayInstructions);

  $('section').hide(arrayInstructions);

}
