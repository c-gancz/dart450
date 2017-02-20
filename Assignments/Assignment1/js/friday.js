$(document).ready(function() {

  // The function that allows the coffee counter and its interactive components to appear.
  coffeeCounter();

  // The function that makes the speech bubble text message to appear at a certain time, and enable other functions when clicking it.
  textMessage();

  // The function that makes the reply options appear, and have a random abusive message that appear when clicking on a random reply option. This function will also enable animation to take place on the abusive response being showed.
  messageOptions();

  // This function makes the user's reply message appear an infinite number of times on the page. It also changes certain CSS properties when you hover over it.
  textLoop();

});

// FUNCTION 1: Enables coffee counter interactivity to take place.
function coffeeCounter(){

  // The starting amount of coffee mililetres being drank by Christina.
  var coffeeMil = 0;

  // The regular speed of the coffee counter.
  var counterSpeed = 400;

  // Variable referring to the div that is holding the coffee counter.
  var counterCoffee = $('#coffeecounter');

  // The variable holding the message that will be said from responsive voice while hovering over the coffee counter.
  var coffeeTalk = "Are you trying to make Christina's eyes burn off her face?!"

  // The function that makes the counter run at the regular speed indicated in the variable.
  function regularSpeed(){
    $("#counter").text(coffeeMil);
      coffeeMil++;
    $('#coffeecounter').show();
    console.log('Regular coffee counter appeared and working.');
  };

  // The function that enables the counter to increase rapidly over hover. It also indicates the text that will change on hover.
  function fastSpeed(){
    $("#counter").text(coffeeMil);
      coffeeMil++;
    $('#coffeecounter').show();
    $("#info").text('Great, another migraine for today.');
    console.log('Coffee counter with increased speed working.');

  };

  // The function that enables the regular coffee counter to appear.
  setInterval(regularSpeed,counterSpeed);

  // The function that calls the function that increases counting speed. It also changes some CSS features such as color, and enables the responsive voice variable.
  $(counterCoffee).mouseover(function(){
      setInterval(fastSpeed,10);
      $(counterCoffee).css({
        'background-color':'red',
        'color':'white'
      });
      responsiveVoice.speak(coffeeTalk, "Australian Female", {
        rate: 1.1,
        pitch:1
      });
      console.log('Coffee counter change in color and responsive voice worked.');
  });
};

// FUNCTION 2: Enables the text message bubble and reply options to appear.
function textMessage(){

  // The variable that refers to the text message bubble.
  var textPopUp = $('.speech-bubble');

  // The interval used to indicate the time until the text message fades in.
  var interval = 3000;

  // The variable that refers to the "reply" option in the text message.
  var clickReply = $('.reply');

  // The variable that refers to the space where one can write the message they want to reply back with.
  var replyBox = $('textarea');

  // The variable that refers to the "send" button.
  var sendButton= $('button');

  // The function that enables the text message bubble to fade in at a certain time.
  setInterval(function () {
      $(textPopUp).fadeIn();
      console.log('Text message faded in.');
  },interval);

  // The function that allows the reply box, the send button, and the text message reply options to appear on when clicking on "reply".
  $(clickReply).click(function (){
    $(replyBox).show();
    $(sendButton).show();
    $('#float').show();
    console.log('Reply button was clicked and reply options now show.');
  });
};

// FUNCTION 3: Enables text message options to appear, as well as when clicked, generates animation on the option boxes.
function messageOptions(){

  // The array that holds various text message reply options.
  var options = [
    "Choose from your usual responses, or type in the box to formulate your own message.",
    "YESSSS!!! So down.",
    "Not sure dearie. My head is killing me :(",
    "Homework or drinks? Hmm... difficult decision.",
    "Nah I'm busy tonight sorry!.",
    "Where and what timeee"
  ];

  // The array that holds various text that can be generated after clicking on a random text reply option.
  var abusiveResponses = [
    "For god's sake get off the computer.",
    "When was the last time you moved?! Move DAMMIT",
    "I don't think you could ever live without your computer."
  ]

  // The array that holds the various divs that make up the text message reply options.
  var optionDivs = ["#one", "#2", "#3", "#4", "#5", "#6"]

  // The function that chooses a div at random.
  var randomDivs = optionDivs[Math.floor(Math.random() * optionDivs.length)];

  // The function that chooses a random abusive response from the abusiveResponses array.
  var randomResponse = abusiveResponses[Math.floor(Math.random() * abusiveResponses.length)];

  // The functions that enable the text message reply options to hold the text generated from the "options" array.
  $('#one').text(options[0]);
  $('#2').text(options[1]);
  $('#3').text(options[2]);
  $('#4').text(options[3]);
  $('#5').text(options[4]);
  $('#6').text(options[5]);

  $(randomDivs).click(function(){

    // On click, this function enables a random abusive response to appear in all the text message reply options.
    $(optionDivs[0]).text(randomResponse);
    $(optionDivs[1]).text(randomResponse);
    $(optionDivs[2]).text(randomResponse);
    $(optionDivs[3]).text(randomResponse);
    $(optionDivs[4]).text(randomResponse);
    $(optionDivs[5]).text(randomResponse);
    $(optionDivs[6]).text(randomResponse);
      console.log('Random response:' + randomResponse);
    // This function enables the text message response boxes to have a class called "animate". The "animate" class refers back various CSS animation properties which change its background color and text properties.
    $('.responses').addClass('animate');
      console.log('Reply options are animating.');

    // This function allows certain CSS properties of the reply boxes to change.
    $('.responses').css({
      'width':'20%',
      'position':'relative',
      'font-size':'30px',
      'padding':'40px',
      'text-align':'center',
      'margin-bottom': '50px',
      'display':'inline-block',
      'margin-right':'7.5%',
      'cursor':'auto'
    });

    $('#float').css({
      'margin-left':'7.5%',
      'margin-top':'-372px'
    });
  });


};

// FUNCTION 4: This function allows for the reply message generated by the user to appear repeatedly in the background through the use of a loop.
function textLoop(){

  // On click of the "send" button, this function will be generated.
  $('button').click(function(){

    console.log('"Send" button was clicked.');
    // Constant referring to the multiple of the div that will be generated over and over.
    const TOTAL_DIVS = 10;

    // Constant referring to the interval time the div loop will be generated at over and over.
    const INTERVAL = 1000;

    // The function referring to the loop being generated repeatedly at a set interval.
    setInterval(function () {

      for (var i = 0; i < TOTAL_DIVS; i++) {

        // The variable indicating the div that will store in text form the user's reply input value.
        var div = $('<div id="inputtext' + i + '" class="input"></div>')

        // The variable that holds the value the user enters into the text box.
        var replyInput = $('textarea').val();

        // The function that enables the created div to store the user's reply message.
        $(div).text(replyInput);

        // The function that enables the body to make the infinite number of divs appear.
        $('#holder').append(div);

        console.log('User reply message loop activated in background.');
      }
    },INTERVAL);
  });

  // The function that allows certain CSS properties of the text in the loop to change on mouseover.
  $('#holder').mouseover(function(){
      $('#holder').css({
        'font-size':'30px',
        'color':'red'
      });
      console.log('Mouseover text: red');
  });

// The function that allows the CSS properties of the text in the loop to return back to their original state on mouseout.
  $('#holder').mouseout(function(){
    $('#holder').css({
      'font-size':'18px',
      'color':'black'
    });
    console.log('Mouseouttext: black');
  })
};
