$(document).ready(function(){

  // When the page loads, hide the Eliza Robot.
  $('#elizarobot').hide();

  // Only when the enlarge button is on will this function happen.
  $('#enlarge-on').click(function(){

    // The function that allows elements to appear/disappear in the psychologist/counsellor
    // while resizing it.
    $('#psychologist').resizable({

        // Function from jQuery UI allowing me to get the changing width and height values
        // of the object that is being resized.
        resize: function(event, ui) {
              var widthPsychologist = ui.size.width;
              var heightPsychologist = ui.size.height;

              // If statement allowing the Eliza Robot to only appear when the width of the psychologist section
              // is larger than 500px and height longer than 600px.
              if (widthPsychologist > 500 && heightPsychologist > 600) {
                elizaReveal();

                // Make the height of the conversation approximately the height of the section
                $('textarea').css({
                  'height': heightPsychologist-450+"px"
                });
              }

              // Else statement hiding the Eliza Robot when width of the psychologist section is smaller
              // than 500px and height smaller than 600px.
              else {
                elizaConceal();
              };

          } // Closing the jQuery UI resize function.
    }); // Closing the entire psychologist reveal/conceal function.

}); // Closing the function of the enlarge-on button.

}); //End of document.ready function

/////////////////////////  FUNCTIONS  //////////////////////////////

// FUNCTION 1: What will be revealed when the psychologist section is enlarged.
function elizaReveal(){

  // Show the eliza robot
  $('#elizarobot').show();

  // Make the psychologist background green
  $('#psychologist').css({
    'background-color':'green',
  });

  // Make the image get larger
  $('#psychologist img').addClass("svg");

  // Change the text
  $('#psychologist p').text('Talk to me. Tell me how you feel by writing your feelings down.');

  // Change the paragraph colour to white
  $('#psychologist p').css({
    'color':'white'
  });
};

// FUNCTION 2: The state the psychologist section returns to when it is minimized.
function elizaConceal(){

  // Hide the eliza robot
  $('#elizarobot').hide();

  // Return the background color to the original blue
  $('#psychologist').css({
    'background-color':'#1ca4d6'
  });

  // Return the paragraph text to its original text
  $('#psychologist p').text('This service will listen to you and guide you in the right direction.');

  // Return the paragraph colour to dark blue
  $('#psychologist p').css({
    'color':'#10143e'
  });
};
