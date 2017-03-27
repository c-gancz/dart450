$(document).ready(function() {

  faceTracker();

})

// The face tracking feature was taken and modified by user 2046 on CodePen. Here is the link to the work: http://codepen.io/2046/pen/wJGJZv
function faceTracker(){
  // The variables call on various elements made with HTML5 canvas and the viewer's webcam.
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Using tracker.js to find face with webcam.
  var tracker = new tracking.ObjectTracker('face');
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);

  tracking.track('#video', tracker, { camera: true });

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Functions that change certain CSS properties of the tracking box on the face.
    event.data.forEach(function(rect) {
      context.strokeStyle = 'yellow';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = 'bold 14px Helvetica';
      context.fillStyle = "yellow";
      context.lineWidth=5;
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

      // Calling on the function that makes the scanning text appear. Everytime the face
      // tracker scans the face, text describing what the face tracker is tracking will
      // appear.
      medicalScanning();
    });
  });
};

// This is the function that allows text to appear determining what the face tracker is scanning. 
function medicalScanning(){
    $('#scanning').show();
};
