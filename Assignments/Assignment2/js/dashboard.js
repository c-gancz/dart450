
$(document).ready(function() {

  dragBox();

});

// FUNCTION 1: Draggable and extendable sections
// Inspired by Jamie Jefferson's pen on CodePen at: //http://codepen.io/jamiejefferson/pen/qLAwj
function dragBox(){

  // Makes the sections resizable.
  $('.resizable').resizable();

  // Avoid clicks on the resize handles.
  $('.ui-resizable-handle').attr('data-clickable', true);

  // Makes the elements draggable.
  Draggable.create('.draggable');
};
