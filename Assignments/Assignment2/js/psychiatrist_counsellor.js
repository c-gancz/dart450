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
                $('#elizarobot').show();
              }

              // Else statement hiding the Eliza Robot when width of the psychologist section is smaller
              // than 500px and height smaller than 600px.
              else {
                $('#elizarobot').hide();
              };


          } // Closing the jQuery UI resize function.
    }); // Closing the entire psychologist reveal/conceal function.

}); // Closing the function of the enlarge-on button.



}); //End of document.ready function
