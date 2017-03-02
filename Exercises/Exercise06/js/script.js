
<<<<<<< HEAD
=======
////////////// VARIABLES AND CONSTANTS OUTSIDE OF DOCUMENT////////////

>>>>>>> origin/master
const LOW = 80;
const HIGH = 180;

var divColor = {
  r: 200,
  g: 200,
  b: 200
}

var trackingColors = ['red', 'green', 'blue'];

<<<<<<< HEAD
$(document).ready(function() {
=======
////////////// CODE BEING GENERATED AT WHEN DOC LOADS ////////////

$(document).ready(function(){
>>>>>>> origin/master

  setBGColor(divColor.r,divColor.g,divColor.b);

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {      
    navigator.getUserMedia({video: true}, handleVideo, videoError);
  }

});

<<<<<<< HEAD
// Webcam Video Popup
function handleVideo(stream) {
=======
////////////// FUNCTIONS START HERE ////////////

function handleVideo(stream) {

>>>>>>> origin/master
  var streamURL = window.URL.createObjectURL(stream);

  $('#webcam').attr({
    src: streamURL
  });
<<<<<<< HEAD
  // Starts tracking colour
=======

>>>>>>> origin/master
  startTracking();
}

function videoError(e) {
  $('body').css({
    'background-color': 'red'
  })
}

function startTracking() {
<<<<<<< HEAD
=======

>>>>>>> origin/master
  tracking.ColorTracker.registerColor('red', checkRed);
  tracking.ColorTracker.registerColor('green', checkGreen);
  tracking.ColorTracker.registerColor('blue', checkBlue);

  var colorTracker = new tracking.ColorTracker(trackingColors);

  colorTracker.on('track', handleTrackingEvent);

  tracking.track('#webcam', colorTracker);
}

<<<<<<< HEAD
function handleTrackingEvent (event) {
=======
unction handleTrackingEvent (event) {

>>>>>>> origin/master
  if (event.data.length === 0) {
  }

  else {
    event.data.forEach(function(rect) {

      console.log(rect);

      divColor.r = Math.max(0,divColor.r - 1);
      divColor.g = Math.max(0,divColor.g - 1);
      divColor.b = Math.max(0,divColor.b - 1);

      if (rect.color == 'red') {
        divColor.r = Math.min(255, divColor.r + 2);
<<<<<<< HEAD

        $('#color').fadeIn(function(){
          $('#color').text("I'm burning up!!");
        });
      }
      else if (rect.color == 'green') {
        divColor.g = Math.min(255, divColor.g + 2);

        $('#color').fadeIn(function(){
          $('#color').text("I think I'm gunna be sick.");
        });
      }
      else if (rect.color == 'blue') {
        divColor.b = Math.min(255, divColor.b + 2);

        $('#color').fadeIn(function(){
          $('#color').text("I'm feeling blue.");
        });
=======
      }
      else if (rect.color == 'green') {
        divColor.g = Math.min(255, divColor.g + 2);
      }
      else if (rect.color == 'blue') {
        divColor.b = Math.min(255, divColor.b + 2);
>>>>>>> origin/master
      }
    });
  }

  setBGColor(divColor.r,divColor.g,divColor.b);
<<<<<<< HEAD
}

function setBGColor(r,g,b) {
  $('#color').css({
    'background-color': 'rgba(' + r + ',' + g + ',' + b + ',1)'
  });
}

function checkRed (r,g,b) {
  if (r > HIGH && g < LOW && b < LOW) {
    return true;
  }
  return false;
}

function checkGreen (r,g,b) {
  if (r < LOW && g > HIGH && b < LOW) {
    return true;
  }
  return false;
}

function checkBlue (r,g,b) {
  if (r < LOW && g < LOW && b > HIGH) {
    return true;
  }
  return false;
}
=======
  }

  function setBGColor(r,g,b) {
    $('#color').css({
      'background-color': 'rgba(' + r + ',' + g + ',' + b + ',1)'
    });
  }

  function checkGreen (r,g,b) {
    if (r < LOW && g > HIGH && b < LOW) {
      return true;
    }
    return false;
  }

  function checkBlue (r,g,b) {
    if (r < LOW && g < LOW && b > HIGH) {
      return true;
    }
    return false;
  }
>>>>>>> origin/master
