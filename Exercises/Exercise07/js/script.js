/*

ScrollMagic with TweenMax
Pippin Barr

A basic example of using ScrollMagic with TweenMax.

Uses:

ScrollMagic
http://scrollmagic.io/

TweenMax
https://greensock.com/tweenmax

*/

$(document).ready(function() {

  // Create a ScrollMagic Controller so we can use the library
  var controller = new ScrollMagic.Controller();

  // Create a new scene based on the trigger div
  // Use a duration so that the animations are tied to scroll speed
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 200
  });

  // Now we can set our tween to animate any CSS properties we want
  // to change while the user scrolls through our trigger.
  // Note that in setTween '#trigger' refers to the element we want
  // to be AFFECTED by the animation - it could be a different element
  scene.setTween("#trigger", 0.5, {
    "backgroundColor": "green",
    x: "-200px",
    // border: "100px solid",
    // transform: "rotateY(180deg)",
    // opacity: "0.25",
    // "-webkit-text-stroke": "20px"
  });

  scene.triggerHook(0.5);

  // Add the debugging indicators so we can see what's happening
  // scene.addIndicators();

  // Add our scene to the controller so it actually does something
  scene.addTo(controller);


  // NOTES:

  ////////// Controlling a different element with the trigger:

  // We could also set a tween controlled by scrolling through our
  // #trigger div that actually tweens a DIFFERENT element on the page,
  // like our #fixedblock div.
  //
  // scene.setTween("#fixedblock", 0.5, {
  //   rotation: 360,
  //   backgroundColor: "aqua"
  // });

  ////////// Multiple tweens

  // You can only have ONE setTween per scene, though.
  // If you really want to have multiple tweens, you can use a thing called
  // a TimelineMax from TweenMax, but that's getting fairly complex.
  // https://greensock.com/timelinemax

  ////////// Coding style

  // You may have notice in the example code they write setting up a scene
  // like this:
  //
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: "#trigger",
  //   duration: 200
  // })
  // .setTween("#trigger", 0.5, {
  //   "backgroundColor": "green",
  // })
  // .addIndicators()
  // .addTo(controller);
  //
  // This is often called "chaining" and it works because each of the
  // functions here (new ScrollMagic.Scene(), setTween(), addIndicators(),
  // and addTo()) all return the scene they create/worked on.
  //
  // Overall, though, it this seems confusing, it's just as fine to do it
  // the way above, with the scene variable explicitly used for each step
  // in the process.

});
