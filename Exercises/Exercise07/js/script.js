

$(document).ready(function() {

  var controller = new ScrollMagic.Controller();

// Defines the trigger and the duration of scrolling to animate it
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 1000
  });

  // 1: time before trigger begins animation
  scene.setTween("#trigger1", 0.3, {
    'width':'600px',
  });

  scene.triggerHook(1);

  scene.addTo(controller);

});
