
// In order to enable/disable the draggable function, there must be a universal variable which calls it.
var draggable;

$(document).ready(function() {

  // Calling the function to add the profile information to the assistant.
  addProfile();

  // Calling the function to change the background-color of the buttons when enabling/disabling the assistant options.
  buttonColour();

  //Functions that allow the buttons on the assistant to enable/disable audio, resizing, and rearranging.
  $('#enlarge-on').click(enlargeOn);

  $('#enlarge-off').click(enlargeOff);

  $('#rearrange-on').click(rearrangeOn);

  $('#rearrange-off').click(rearrangeOff);

  $('#audio-on').click(audioAssist);

  // Because the draggable element is an array, in order to disable the draggable function it needs to run through a loop.
  draggable = Draggable.create('.draggable');
  for (var i = 0; i < draggable.length; i++) {
    draggable[i].disable();
  }

});

///////////////////////////// FUNCTIONS ////////////////////////////////

// FUNCTION 1: This is the function that enables me to retrieve the profile information from the URL.
var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();

// FUNCTION 2: This is the function that takes the URL profile information and plugs it into the Assistant section.
  function addProfile(){
      $('#profilename').append(decodeURI(QueryString.name));
      $('#profileage').append(decodeURI(QueryString.age));
      $('#profileresidence').append(decodeURI(QueryString.residence));
      $('#profilediagnosis').append(decodeURI(QueryString.diagnosis));
  };

// The resizable and rearranging elements were inspired by Jamie Jefferson's pen on CodePen at: //http://codepen.io/jamiejefferson/pen/qLAwj
// FUNCTION 3: Turn on the resizable function.
function enlargeOn(){
  // Makes the sections resizable.
  $('.resizable').resizable();

  // Avoid clicks on the resize handles.
  $('.ui-resizable-handle').attr('data-clickable', true);
};

// FUNCTION 4: Turn off the resizable function.
function enlargeOff(){
  // Makes the elements draggable.
    $('.resizable').resizable('destroy');
};

// FUNCTION 5: Turn on the rearranging function.
function rearrangeOn(){
  // Enables the sections to be rearranged.
  for (var i = 0; i < draggable.length; i++) {
    draggable[i].enable();
  }

};

// FUNCTION 6: Turn off the rearranging function.
function rearrangeOff(){
  // Disables the sections from being rearranged.
  for (var i = 0; i < draggable.length; i++) {
    draggable[i].disable();
  }
};

//FUNCTION 7: Using blast.js and responsiveVoice.js to read out all the text on the dashboard.
  function audioAssist(){

    // Setting the variables for the type of voice and parameters in responsiveVoice.
    var voice = 'US English Female';
    var voiceParameters = {
      pitch: 1,
      rate: 1,
    }

    // Telling the entire body of HTML to be "blasted" (read all the text content on the page).
    $('body').blast({
      // Telling blast to pick up only sentences.
      delimiter: 'element'
    });

    // Connecting the text that is picked up blast.js and have responsiveVoice.js read it out.
    $('.blast').mouseover(function () {
      responsiveVoice.speak($(this).text(),voice,voiceParameters);

      // The text being read out is highlighted by changing the background-color of the sentence.
      $(this).css({
        'background-color':'black'
      });
    });

      // Telling my background-color to return to its original colour after hovering out of the text.
      $('.blast').mouseout(function(){
        $(this).css({
          'background-color':'rgba(255, 255, 255, 0)'
        });
      })

      // The function cancelling the responsiveVoice function when you click "off" the audio assist.
      $('#audio-off').click(function(){

        $('.blast').mouseover(function () {
          responsiveVoice.cancel();

          // The background-color will be transparent as opposed to yellow when the audio-assist is turned off.
          $(this).css({
            'background-color':'rgba(255, 255, 255, 0)'
          });
      });

    });
  };

// FUNCTION 8: This function allows the buttons' background color to change when the enlarging, displacing, and audio is enabled or disabled.
function buttonColour(){

  $('#enlarge-on').click(function(){
    // When the enlarge button is on, its background-color becomes light blue.
    $('#enlarge-on').css({
      'background-color':'#1ca4d6'
    });

    // When the enlarge-on button is clicked, the enlarge-off returns to its original background-color.
    $('#enlarge-off').css({
      'background-color':'#fed402'
    });
  });

  $('#enlarge-off').click(function(){
    // When the enlarge-off button is clicked, the enlarge-on returns to its original background-color.
    $('#enlarge-on').css({
      'background-color':'#fed402'
    });

    // When the enlarge-off button is clicked, its background-color becomes light blue.
    $('#enlarge-off').css({
      'background-color':'#1ca4d6'
    });
  });

  $('#rearrange-on').click(function(){
    // When the rearrange button is on, its background-color becomes light blue.
    $('#rearrange-on').css({
      'background-color':'#1ca4d6'
    });

    // When the rearrange-on button is clicked, the rearrange-off returns to its original background-color.
    $('#rearrange-off').css({
      'background-color':'#fed402'
    });
  });

  $('#rearrange-off').click(function(){
    // When the rearrange-off button is clicked, the rearrange-on returns to its original background-color.
    $('#rearrange-on').css({
      'background-color':'#fed402'
    });

    // When the rearrange-off button is clicked, its background-color becomes light blue.
    $('#rearrange-off').css({
      'background-color':'#1ca4d6'
    });
  });

  $('#audio-on').click(function(){
    // When the audio button is on, its background-color becomes light blue.
    $('#audio-on').css({
      'background-color':'#1ca4d6'
    });

    // When the audio-on button is clicked, the audio-off returns to its original background-color.
    $('#audio-off').css({
      'background-color':'#fed402'
    });
  });

  $('#audio-off').click(function(){
    // When the audio-off button is clicked, the audio-on returns to its original background-color.
    $('#audio-on').css({
      'background-color':'#fed402'
    });

    // When the audio-off button is clicked, its background-color becomes light blue.
    $('#audio-off').css({
      'background-color':'#1ca4d6'
    });
  });

};
