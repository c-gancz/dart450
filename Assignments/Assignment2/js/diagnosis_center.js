
$(document).ready(function(){

  // The function that allows elements to appear/disappear in the diagnosis center
  // while resizing it.
  $('#diagnosiscenter').resizable({

      // Function from jQuery UI allowing me to get the changing width and height values
      // of the object that is being resized.
      resize: function(event, ui) {
            var w = ui.size.width;
            var h = ui.size.height;

            // If statement allowing diagnosisReveal(); to only appear when the width
            // is larger than 400.
            if (w > 400) {
              diagnosisReveal();
            }

            // Else statement making diagnosisConceal(); happen when width is smaller
            // than 400.
            else {
              diagnosisConceal();
            }

            console.log(ui.size);
            // Telling my console to log the changing width and height values.

        } // Closing the jQuery UI resize function.
  });// Closing the entire diagnosis center reveal/conceal function.



});


/////////////////////////////// FUNCTIONS //////////////////////////////////////

// FUNCTION 1: What appears when the width of the diagnosis center reaches a certain number.
function diagnosisReveal(){

  $('#diagnosiscenter').css({
    'background-color':'red'
  });

};

// FUNCTION 2: The elements that are concealed when the width of the diagnosis center
// minimizes to a certain size. 
function diagnosisConceal(){

  $('#diagnosiscenter').css({
    'background-color':'blue'
  });

};
