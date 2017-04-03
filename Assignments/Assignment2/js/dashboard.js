
$(document).ready(function() {
  // the ui-resizable-handles are added here
  //http://codepen.io/jamiejefferson/pen/qLAwj
  $('.resizable').resizable();

  // makes GSAP Draggable avoid clicks on the resize handles
  $('.ui-resizable-handle').attr('data-clickable', true);

  // make the element draggable
  Draggable.create('.draggable');

});
