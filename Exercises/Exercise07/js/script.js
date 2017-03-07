

$(document).ready(function() {

  titleFade();

  titleSlide();

  theIdea();

  medicalApps();


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
    duration: 100
  });

  background.setTween("#trigger1", 0.1, {
    'backgroundColor': 'rgba(255, 81, 34, 1)',
  });

  background.triggerHook(0);

  background.addTo(controller);
};

function theIdea(){
  var idea = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    duration: 1000
  });

  idea.setTween("#trigger2", 0.5, {
    'marginLeft':'100px',
    'backgroundColor':'yellow'
  });

  idea.triggerHook(1);

  idea.addTo(controller);
};

function medicalApps(){
  var apps = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    duration: 500
  });

  apps.setTween("#trigger3", 0.9, {
    'opacity':'1',
    'margin-left':'700px'
  });

  apps.triggerHook(0.5);

  apps.addTo(controller);
};
