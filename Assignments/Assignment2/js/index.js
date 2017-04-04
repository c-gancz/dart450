$(document).ready(function() {

  //This script uses an external JSON file.
  $.getJSON('data/data.json', gotData);

  faceTracker();

  homeDashboard();


});

///////////////////////// FUNCTIONS /////////////////////////////////


// FUNCTION 1: To enable face tracking using tracking.js
// The face tracking code was taken by user 2046 on CodePen and modified for my own use. Link to the work: http://codepen.io/2046/pen/wJGJZv

function faceTracker(){

  // The variables call on various elements made with HTML5 canvas and the viewer's webcam.
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Using tracking.js to find face with webcam.
  var tracker = new tracking.ObjectTracker('face');

  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);

  tracking.track('#video', tracker, { camera: true });

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Functions where I changed certain CSS properties of the tracking box on the face to meet the style of my website.
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

      // Calling on the function that makes the random "what the doctor is scanning" appear.
      medicalScanning();
    });
  });
};


// FUNCTION 2: Allows text to appear determining what the face tracker is hypothetically scanning/searching for.

function medicalScanning(){

    // An array of various elements that the Virtual Doctor is hypothetically searching for to login.
    var conditions = [
      'Searching through medical archives',
      "Getting patient's schedule",
      'Scanning for emergency diagnoses',
      "Analyzing if patient is human",
      "Looking through patient's pharmaceuticals shopping records"
    ]

    // The variable that allows the elements in the conditions array to be chosen at random.
    var randomConditions = conditions[Math.floor(Math.random() * conditions.length)];

    // Telling my HTML to display this random chosen element from my array.
    $('#scanning').text(randomConditions);

};


// FUNCTION 3: Creates a user profile by taking data from an external JSON file..
// Data JSON file made with various lists from Dariusk Corpora at https://github.com/dariusk/corpora

  function gotData (data) {

      // The function that allows me to get a random selection from the data in the JSON file.
      function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
      }

      // The variables that use the random selection function and apply it to specific categories of the user profile.
      firstname = getRandomElement(data.firstname);
      lastname = getRandomElement(data.lastname);
      age = getRandomElement(data.age);
      residence = getRandomElement(data.municipalities);
      diagnosis = getRandomElement(data.diagnosis);

      // Tells HTML to generate the random user profile at a set time.
      setInterval(function(){
        // Show the user profile that was hidden with CSS.
        $('#profile').show();

        // Functions that make the HTML show the random name, age, location, and diagnosis.
        $('#name').text(firstname + ' ' + lastname);
        $('#age').text(age);
        $('#location').text(residence);
        $('#diagnosis').text(diagnosis);

        // Functions that removes the initial webcam and login on the same page.
        $('#webcam').remove();
        $('#login').remove();

        // This happens 15 seconds after the page loads.
      },15000);
  };


// FUNCTION 4: Allows the login page to eventually load the Virtual Doctor dashboard page.

  function homeDashboard(){

    setInterval(function(){
      location.href = "html/dashboard.html?name=firstname";

    // This happens 25 seconds after the page loads.
    },25000);

};
