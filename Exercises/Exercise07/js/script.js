

$(document).ready(function() {

  titleFade();

  titleSlide();

  theIdea();

  medicalApps();

  examples();

  libraries();

  code();

  images();

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
    triggerElement: ".trigger2",
    duration: 1000
  });

  idea.setTween(".trigger2", 0.5, {
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
    'width':'80%',
    'marginLeft':'200px'
  });

  apps.triggerHook(0.5);

  apps.addTo(controller);
};

function examples(){
  var example = new ScrollMagic.Scene({
    triggerElement: "a",
    duration: 500
  });

  example.setTween("a", 0.9, {
    'marginLeft':'20px',
    'opacity':'1'
  });

  example.triggerHook(0.7);

  example.addTo(controller);
};

function libraries(){
  var library = new ScrollMagic.Scene({
    triggerElement: ".extend",
    duration: 500
  });

  library.setTween(".extend", 0.9, {
    'width':'80%'
  });

  library.triggerHook(0.7);

  library.addTo(controller);
};

function code(){
  var code = new ScrollMagic.Scene({
    triggerElement: "#trigger6",
    duration: 500
  });

  code.setTween("#trigger6", 0.9, {
    'marginLeft':'600px'
  });

  code.triggerHook(0.5);

  code.addTo(controller);
};

function images(){
  var image1 = new ScrollMagic.Scene({
    triggerElement: "#image1",
    duration: 500
  });

  image1.setTween("#image1", 0.9, {
    'marginLeft':'600px',
    'opacity':'1'
  });

  image1.triggerHook(0.5);

  image1.addTo(controller);

  var image2 = new ScrollMagic.Scene({
    triggerElement: "#image2",
    duration: 500
  });

  image2.setTween("#image2", 0.9, {
    'marginLeft':'200px',
    'opacity':'1'
  });

  image2.triggerHook(0.5);

  image2.addTo(controller);

  var image3 = new ScrollMagic.Scene({
    triggerElement: "#image3",
    duration: 500
  });

  image3.setTween("#image3", 0.9, {
    'opacity':'1',
    'marginLeft':'200px'
  });

  image3.triggerHook(0.5);

  image3.addTo(controller);
};
