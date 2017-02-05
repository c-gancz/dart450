$(document).ready(function (){

  openDoors();

});

//////////////////// FUNCTIONS APPEAR HERE /////////////////////

function openDoors (){
  var leftDoor = $('#left');
  var rightDoor = $('#right');
  var bothDoors = $('#twodoors');

$(bothDoors).click(function (){
  $(leftDoor).css({
    'margin-left':'-600px',
    'position:':'absolute'
  });

  $(rightDoor).css({
    'margin-left':'1200px',
    'position':'absolute'
  });

});

}
