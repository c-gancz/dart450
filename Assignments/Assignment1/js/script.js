$(document).ready(function (){

  $(openDoors).click(myCircles);

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

function myCircles (){
  var circle1 = $('<div class="circle"></div>');
  var circle2 = $('<div class="circle"></div>');
  var circle3 = $('<div class="circle"></div>');
  var circle4 = $('<div class="circle"></div>');
  var circles = [circle1, circle2, circle3, circle4]

  $('body').append(circles);
}
