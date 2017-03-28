$(document).ready(function() {

  faceTracker();

  homeDashboard();

  getName();
});
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
      context.strokeStyle = '#fed402';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = 'bold 14px Helvetica';
      context.fillStyle = "#fed402";
      context.lineWidth=5;
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

      // Here I added a function that creates text displaying the actual rectangle x and y pixels from the face tracker in the login section.
      $('#pixels').text('x : ' + rect.x + ' px,' + ' y : ' + rect.y + ' px');

      // Calling on the function that makes the scanning text appear. Everytime the face
      // tracker scans the face, text describing what the face tracker is tracking will
      // appear.
      medicalScanning();
    });
  });
};

// This is the function that allows text to appear determining what the face tracker is scanning.
function medicalScanning(){
    // The various elements that the Virtual Doctor is hypothetically searching for to login.
    var conditions = [
      'Searching through medical archives',
      "Getting patient's schedule",
      'Scanning for emergency diagnoses',
      "Analyzing if patient is human",
      "Looking through patient's pharmaceuticals shopping records"
    ]

    // The variable that allows the elements in the conditions array to be chosen at random.
    var randomConditions = conditions[Math.floor(Math.random() * conditions.length)];
    // The h1 tag in my HTML will be a random element in my array.
    $('#scanning').text(randomConditions);
};

function getName(){
  $.getJSON('data/data.json', gotData);
  // Function that generates the first and last name of the person through an external .json file.
  function gotData (data) {
    // Combination of first and last names is chosen at random.
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    var firstname = getRandomElement(data.firstname);
    var lastname = getRandomElement(data.lastname);

    // Tells HTML to generate the random name.
    $('#name').text(firstname + ' ' + lastname);
  };
};

// This function allows the login page to eventually load the dashboard html page.
function homeDashboard(){
  setInterval(function(){
    location.href = "html/dashboard.html";
  },25000);
};
