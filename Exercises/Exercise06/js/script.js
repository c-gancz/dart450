/*

Color Controller
Pippin Barr

Use tracking.js to detect the colours red, green, and blue and to
change the color of a div on our page based on which we can see.

*/

// Constants to determine how much of a color counts as being present
// or absent in an image.
const LOW = 80;
const HIGH = 180;

// A variable to store the color we should make the div,
// this is what we'll change based on tracking data and then apply
// to the actual div
var divColor = {
  r: 200,
  g: 200,
  b: 200
}

// An array defining the names of the colors we'll track
var trackingColors = ['red', 'green', 'blue'];

$(document).ready(function() {

  // First we'll set the div's background color to our current color
  setBGColor(divColor.r,divColor.g,divColor.b);

  // Next we'll set up our webcam with getUserMedia
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {      
    navigator.getUserMedia({video: true}, handleVideo, videoError);
  }

});

// handleVideo (stream)
//
// When getUserMedia gets hold of the user's webcam, it calls this function
// with the argument "stream" which is the stream of the webcam data
function handleVideo(stream) {
  // First get the URL of the stream
  var streamURL = window.URL.createObjectURL(stream);
  // Now hold of the element on the page that can contain the video
  // (the video element with id 'webcam') and set its src attribute
  // to the URL we created for the stream...
  $('#webcam').attr({
    src: streamURL
  });
  // And now that the webcam is available, we can start actually tracking
  // colors with our tracking.js code...
  startTracking();
}

// videoError (e)
//
// If there's a problem with getting the webcam, this will get called.
// For now it just sets the background color to red to show something
// went wrong. Not very sophisticated.
function videoError(e) {
  $('body').css({
    'background-color': 'red'
  })
}

// startTracking()
//
// Called once we've got the webcam available
function startTracking() {

  // First we need to register our three colours since they're
  // not available by default. We use the color tracker's function
  // registerColor, passing it the name of our color and the function
  // that will determine what is of that color
  tracking.ColorTracker.registerColor('red', checkRed);
  tracking.ColorTracker.registerColor('green', checkGreen);
  tracking.ColorTracker.registerColor('blue', checkBlue);

  // Now set up our tracker
  var colorTracker = new tracking.ColorTracker(trackingColors);

  // Tell it what function to call while tracking
  colorTracker.on('track', handleTrackingEvent);

  // Start the tracker with the webcam's video element and the tracker
  tracking.track('#webcam', colorTracker);
}

// handleTrackingEvent (event)
//
// Called each frame of video with data about tracking
function handleTrackingEvent (event) {
  // Check if anything was detected...
  if (event.data.length === 0) {
    // No colors were detected in this frame.
  }
  else {
    // If something was detected, check each one and adjust
    // our div's color
    event.data.forEach(function(rect) {

      console.log(rect);

      // First adjust all colors downward. We'll use
      // Math.max to avoid having them become negative
      divColor.r = Math.max(0,divColor.r - 1);
      divColor.g = Math.max(0,divColor.g - 1);
      divColor.b = Math.max(0,divColor.b - 1);

      // Now based on what colour was detected, adjust that
      // colour value up for the div.
      // Use Math.min to avoid having the number go above 255
      if (rect.color == 'red') {
        divColor.r = Math.min(255, divColor.r + 2);
      }
      else if (rect.color == 'green') {
        divColor.g = Math.min(255, divColor.g + 2);
      }
      else if (rect.color == 'blue') {
        divColor.b = Math.min(255, divColor.b + 2);
      }
    });
  }

  // Finally, set the div's color on the page itself
  setBGColor(divColor.r,divColor.g,divColor.b);
}

// setBGColor (r,g,b)
//
// Use jQuery .css() to set the color of the div's background
function setBGColor(r,g,b) {
  $('#color').css({
    'background-color': 'rgba(' + r + ',' + g + ',' + b + ',1)'
  });
}

// checkRed (r,g,b)
//
// Returns true if the RGB values passed can be considered red,
// false if not
function checkRed (r,g,b) {
  if (r > HIGH && g < LOW && b < LOW) {
    return true;
  }
  return false;

  // We could also write this more briefly as:
  // return (r > 200 && g > 80 && b < 80);
}

// checkGreen (r,g,b)
//
// Returns true if the RGB values passed can be considered green,
// false if not
function checkGreen (r,g,b) {
  if (r < LOW && g > HIGH && b < LOW) {
    return true;
  }
  return false;
}

// checkBlue (r,g,b)
//
// Returns true if the RGB values passed can be considered blue,
// false if not
function checkBlue (r,g,b) {
  if (r < LOW && g < LOW && b > HIGH) {
    return true;
  }
  return false;
}
