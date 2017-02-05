$(document).ready(function (){

mySquares();

});

function mySquares (){

  var divsToAdd = 100;
  var currentDiv = 0;

  while (currentDiv < divsToAdd) {
    var square = $('<div class = square></div>');
    $('body').append(square);
    currentDiv = currentDiv + 1;
  }
}
