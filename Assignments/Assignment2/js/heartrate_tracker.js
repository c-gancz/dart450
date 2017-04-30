$(document).ready(function(){

  // Enable the clicking counter function to track the clicks on the heart rate tracker.
  clickCounter();

  // When the page loads, hide the heart tracker ball.
  $('#ball').hide();

  // Only when the enlarge button is on will this function happen.
  $('#enlarge-on').click(function(){

    // The function that allows elements to appear/disappear in the heart rate tracker
    // while resizing it.
    $('#heartrate').resizable({

        // Function from jQuery UI allowing me to get the changing width and height values
        // of the object that is being resized.
        resize: function(event, ui) {
              var widthHeartrate = ui.size.width;
              var heightHeartrate = ui.size.height;

              // If statement allowing the heart rate ball to only appear when the width of the heart rate tracker section
              // is larger than 500px and height longer than 600px.
              if (widthHeartrate > 500 && heightHeartrate > 600) {
                heartrateReveal();
              }

              // Else statement hiding the ball when width of the heart rate tracker section is smaller
              // than 500px and height smaller than 600px.
              else {
                heartrateConceal();
              };

          } // Closing the jQuery UI resize function.
    }); // Closing the entire psychologist reveal/conceal function.

}); // Closing the function of the enlarge-on button.

});

//////////////////////// FUNCTIONS ////////////////////////////////

// FUNCTION 1: To track the number of clicks on the heart rate tracker.
function clickCounter(){

   var i = 0;

   $("#ball").click(function(){
       console.log(i++);

       if (i==10) {
          // Once 10 clicks have been made, the heart rate results appear.
          heartResults();
        }

   });
};

// FUNCTION 2: What is revealed when the heart rate tracker is enlarged.
function heartrateReveal(){
  $('#ball').show();

  // Change the background color to orange
  $('#heartrate').css({
    'background-color':'rgb(255, 99, 0)'
  });

  // Make the image get larger
  $('#heartrate img').addClass("svg");

  // Fix the position of the image when its enlarged
  $('#heartrate img').css({
    'position':'relative',
    'margin-top':'-75px'
  });

  // Change the text with instructions on clicking the ball to get your first reading
  $('#heartrate p').text('Click the ball until you get your first reading.');

  // Make the paragraph text turn white
  $('#heartrate p').css({
    'color':'white'
  });
};

// FUNCTION 3: The state the heart rate tracker returns to when the heart rate tracker is minimized.
function heartrateConceal(){
  $('#ball').hide();

  // Change the background color back to blue
  $('#heartrate').css({
    'background-color':'#1ca4d6'
  });

  // Make the image get smaller
  $('#heartrate img').removeClass("svg");

  // Return the image to its original position
  $('#heartrate img').css({
    'position':'fixed'
  });

  // When minimized return the regular text
  $('#heartrate p').text('Track your heart rate to see your current heart health levels');

  // Make the paragraph return back to blue
  $('#heartrate p').css({
    'color':'#10143e'
  });
};

// FUNCTION 4: Heart rate results once the ball has been cliked 10 times
function heartResults(){

  // The random rate generated is between 100-170, making it very unrealistically elevated
  var randomRate = Math.floor((Math.random() * 71) + 100);

  // Hide the ball when showing the results
  $('#ball').hide();

  // The paragraph text changes to the heart rate resukts
  $('#heartrate p').text('Based on your rising heart rate when clicking the ball, your average heart rate on a daily basis is');

  // The empty h2 in my HTML becomes the random number generated for the heart rate
  $('.rate').text(randomRate);
};
