$(document).ready(function (){

var enterButton = $('button');

introDoors();

inputResponse();

$(enterButton).click(function(){
      setInterval(showDay,10000);
});

});

//////////////////// FUNCTIONS APPEAR HERE /////////////////////


function introDoors (){
  var doors = $('.sliding-doors');
  var input = $('.input');

  $(doors).mouseover(function (){
    $(input).fadeIn(3000);
  });

  $(input).mouseover(function (){
    $(doors).css({
      'background-color':'orange'
    });
  });

  $(input).mouseout(function(){
    $(doors).css({
      'background-color':'rgb(179, 49, 186)'
    });
  });
};

function inputResponse (){

  $('button').click(function(){
    var inputValue = $('#inputvalue').val();
    var inputDisappear = $('.input');
    var doorsDisappear = $('.sliding-doors');
    var date = new Date();
    var today = date.getDay();
    var todayName = 'Nothing.'

    if (today == 0) {
      todayName = 'Sunday, which is a rather fun day.';
    }
    else if (today == 1) {
      todayName = 'Monday, which is kind of a crappy day.';
    }
    else if (today == 2) {
      todayName = 'Tuesday, which is kind of long day.';
    }
    else if (today == 3) {
      todayName = 'Wednesday, which is an okay day.';
    }
    else if (today == 4) {
      todayName = 'Thursday, which is an exhausting day.';
    }
    else if (today == 5) {
      todayName = 'Friday, which sucks because I work.';
    }
    else if (today == 6) {
      todayName = 'Saturday, which is a homework-filled day.';
    }

    var voiceResponse = 'Hello there,' + inputValue + ', Welcome to my life on a weekly basis. Today is ' + todayName;
    responsiveVoice.speak(voiceResponse, "Australian Female", {
      rate: 0.9,
      pitch:1
    });

    $(inputDisappear).remove();
    $(doorsDisappear).fadeOut(2000);

    $('body').css({
      'background':'none'
    });
  });
};

function showDay(){
  var date = new Date();
  var today = date.getDay();
  var weeklyPage = ["html/sunday.html", "html/monday.html", "html/tuesday.html", "html/wednesday.html", "html/thursday.html", "html/friday.html", "html/saturday.html"]

  if (today == 0) {
    location.href = weeklyPage[0];
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
