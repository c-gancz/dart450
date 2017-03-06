

$(document).ready(function() {

  titleFade();

  titleSlide();


});

// UNIVERSAL VARIABLE, WILL WORK FOR ALL FUNCTIONS
var controller = new ScrollMagic.Controller();

function titleFade(){
  var title = new ScrollMagic.Scene({
    triggerElement: ".header",
    duration: 200
  });

  title.setTween(".header", 0.1, {
    'opacity': '1',
  });

  title.triggerHook(0.6);

  title.addTo(controller);

  var subtitle = new ScrollMagic.Scene({
    triggerElement: ".subtitle",
    duration: 300
  });

  subtitle.setTween(".subtitle", 0.1, {
    'marginLeft': '180px',
    'opacity':'1'
  });

  subtitle.triggerHook(0.6);

  subtitle.addTo(controller);
};

function titleSlide(){
  var background = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 500
  });

  background.setTween("#trigger1", 0.1, {
    'backgroundColor': 'rgba(255, 81, 34, 1)',
  });

  background.triggerHook(0);

  background.addTo(controller);
};
