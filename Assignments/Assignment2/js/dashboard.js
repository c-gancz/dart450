// In order to enable/disable the draggable function, there must be a universal variable which calls it.
var draggable;

$(document).ready(function() {

  //Functions that allow the buttons on the assistant to enable/disable audio, resizing, and rearranging.
  $('#enlarge-on').click(enlargeOn);

  $('#enlarge-off').click(enlargeOff);

  $('#rearrange-on').click(rearrangeOn);

  $('#rearrange-off').click(rearrangeOff);

  // Because the draggable element is an array, in order to disable the draggable function it needs to run through a loop.
  draggable = Draggable.create('.draggable');
  for (var i = 0; i < draggable.length; i++) {
    draggable[i].disable();
  }

  $('#info').append("Your name is " + decodeURI(QueryString.name));
});

///////////////////////////// FUNCTIONS ////////////////////////////////
// The resizable and rearranging elements were inspired by Jamie Jefferson's pen on CodePen at: //http://codepen.io/jamiejefferson/pen/qLAwj

// FUNCTION 1: Turn on the resizable function.
function enlargeOn(){
  // Makes the sections resizable.
  $('.resizable').resizable();

  // Avoid clicks on the resize handles.
  $('.ui-resizable-handle').attr('data-clickable', true);
};

// FUNCTION 2: Turn off the resizable function.
function enlargeOff(){
  // Makes the elements draggable.
    $('.resizable').resizable('destroy');
};

// FUNCTION 3: Turn on the rearranging function.
function rearrangeOn(){
  // Enables the sections to be rearranged.
  for (var i = 0; i < draggable.length; i++) {
    draggable[i].enable();
  }

};

// FUNCTION 4: Turn off the rearranging function.
function rearrangeOff(){
  // Disables the sections from being rearranged.
  for (var i = 0; i < draggable.length; i++) {
    draggable[i].disable();
  }
};

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
