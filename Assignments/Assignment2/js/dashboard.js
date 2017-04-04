
// In order to enable/disable the draggable function, there must be a universal variable which calls it.
var draggable;

$(document).ready(function() {

  // Calling the function to add the profile information to the assistant.
  addProfile();

  //Functions that allow the buttons on the assistant to enable/disable audio, resizing, and rearranging.
  $('#enlarge-on').click(enlargeOn);

  $('#enlarge-off').click(enlargeOff);

  $('#rearrange-on').click(rearrangeOn);

  $('#rearrange-off').click(rearrangeOff);

  $('#audio-on').click(function(){
      audioAssist();
  });

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
      rate: 1.2,
    }

    // Telling the entire body of HTML to be "blasted" (read all the text content on the page).
    $('body').blast({
      // Telling blast to pick up only sentences.
      delimiter: 'sentence'
    });

    // Connecting the text that is picked up blast.js and have responsiveVoice.js read it out.
    $('.blast').mouseover(function () {
      responsiveVoice.speak($(this).text(),voice,voiceParameters);

      // The text being read out is highlighted by changing the background-color of the sentence.
      $(this).css({
        'background-color':'yellow'
      });
    });

      // Telling my background-color to return to its original colour after hovering out of the text.
      $('.blast').mouseout(function(){
        $(this).css({
          'background-color':'rgba(255, 255, 255, 0)'
        });
      })

      // Functions telling responsiveVoice what to say when user hovers over a button.
      $('#audio-off').mouseover(function(){
        responsiveVoice.speak('Turn off audio assist',voice,voiceParameters);
      });

      $('#enlarge-on').mouseover(function(){
        responsiveVoice.speak('Click to enlarge',voice,voiceParameters);
      });

      $('#enlarge-off').mouseover(function(){
        responsiveVoice.speak('Click to lock your services in place',voice,voiceParameters);
      });

      $('#rearrange-on').mouseover(function(){
        responsiveVoice.speak('Click to rearrange your services',voice,voiceParameters);
      });

      $('#rearrange-off').mouseover(function(){
        responsiveVoice.speak('Click to lock your services in place',voice,voiceParameters);
      });

  };
