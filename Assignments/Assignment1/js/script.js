$(document).ready(function (){

// Variable indicating the Enter button on the page.
var enterButton = $('button');

// The function that will make the doors open and close, as well as change colour on hover.
introDoors();

// The function that will generate a voice response depending on the input name as well as the day of the week.
inputResponse();

// When clicking on the Enter button, an html page determined by the day of the week it is appears.
$(enterButton).click(function(){
      setInterval(showDay,12000);
      console.log('The "Enter" button was clicked.');
});

});

//////////////////// FUNCTIONS APPEAR HERE /////////////////////

// FUNCTION 1: to make multicoloured doors close and open on mouseover, while making the name input box appear.
function introDoors (){
  //The doors with the class "sliding-doors" which use CSS animation to animate.
  var doors = $('.sliding-doors');
  //The space in which you can enter you name.
  var input = $('.input');

  //When hovering over the doors, make the input box appear.
  $(doors).mouseover(function (){
    $(input).fadeIn(3000);
    console.log('The doors and input box appeared.');
  });

  //When hovering over the doors, change the sliding-doors background color to orange.
  $(input).mouseover(function (){
    $(doors).css({
      'background-color':'orange'
    });
    console.log('Doors color: orange');
  });

  //When hovering away from the doors, change the sliding-doors background color to purple.
  $(input).mouseout(function(){
    $(doors).css({
      'background-color':'rgb(179, 49, 186)'
    });
    console.log('Doors color: rgb(179, 49, 186)');
  });
};

// FUNCTION 2: Using the user's name along with the day of the week to generate a voiceResponse message specific to that person's name as well as day of the week.
function inputResponse (){

  // All of function happening when the "Enter" button is clicked.
  $('button').click(function(){

    //The value generated from the user's input in the "Name" input box.
    var inputValue = $('#inputvalue').val();

    //The input box that will be disappearing.
    var inputDisappear = $('.input');

    //The sliding doors that will be disappearing.
    var doorsDisappear = $('.sliding-doors');

    //The variables getting the data on which day of the week it is, and placing a voice response text that is particular to that day of the week.
    var date = new Date();
    var today = date.getDay();
    var todayName = 'Nothing.'

    //The loop using an if statement to generate a certain voice response on a certain day.
    if (today == 0) {
      todayName = 'Sunday, which is a rather fun day.';
      console.log('Day: Sunday');
    }
    else if (today == 1) {
      todayName = 'Monday, which is kind of a crappy day.';
      console.log('Day: Monday');
    }
    else if (today == 2) {
      todayName = 'Tuesday, which is kind of long day.';
      console.log('Day: Tuesday');
    }
    else if (today == 3) {
      todayName = 'Wednesday, which is an okay day.';
      console.log('Day: Wednesday');
    }
    else if (today == 4) {
      todayName = 'Thursday, which is an exhausting day.';
      console.log('Day: Thursday');
    }
    else if (today == 5) {
      todayName = 'Friday, which sucks because I work.';
      console.log('Day: Friday');
    }
    else if (today == 6) {
      todayName = 'Saturday, which is a homework-filled day.';
      console.log('Day: Saturday');
    }

    // The voice response when you click "Enter" with the added variable of the person's name as well as the voice response message of that particular day.
    var voiceResponse = 'Hello there,' + inputValue + ", Welcome to Christina's life on a weekly basis. Today is " + todayName;

    //The voice language, rate, and pitch elements specified in the responsiveVoice function.
    responsiveVoice.speak(voiceResponse, "Australian Female", {
      rate: 0.9,
      pitch:1
    });
    console.log('Responsive voice with added name working.');

    //The input box disappears on click.
    $(inputDisappear).remove();
    console.log('Input box removed.');

    //The input box fades out on click.
    $(doorsDisappear).fadeOut(2000);
    console.log('Doors removed.');

    //The body's background is removed, making the background color white.
    $('body').css({
      'background':'none'
    });
    console.log('Background removed.');
  });
};

function showDay(){
  // Variables getting data on the day of the week it currently is.
  var date = new Date();
  var today = date.getDay();

  // Array of various other html pages that will appear on a specific day.
  var weeklyPage = ["html/sunday.html", "html/monday.html", "html/tuesday.html", "html/wednesday.html", "html/thursday.html", "html/friday.html", "html/saturday.html"]

  // Using array index numbers, if statements are produced to make a certain page a appear on a certain day of the week.
  if (today == 0) {
    location.href = weeklyPage[0];;
  }

  else if (today == 1) {
    location.href = weeklyPage[1];
  }

  else if (today == 2) {
    location.href = weeklyPage[2];
  }

  else if (today == 3) {
    location.href = weeklyPage[3];
  }

  else if (today == 4) {
    location.href = weeklyPage[4];
  }

  else if (today == 5) {
    location.href = weeklyPage[5];
  }

  else if (today == 6) {
    location.href = weeklyPage[6];
  }

};
