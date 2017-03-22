
$(document).ready(function() {

  $.getJSON('data/data.json', gotData);

});


function gotData (data) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  var firstname = getRandomElement(data.firstname);
  var lastname = getRandomElement(data.lastname);
  var moods = getRandomElement(data.moods);

  $('#firstname').text(firstname);

  $('#firstname').click(function(){
      var firstname = getRandomElement(data.firstname);
      $('#firstname').text(firstname);
  })

  $('#lastname').text(lastname);

  $('#lastname').click(function(){
      var lastname = getRandomElement(data.lastname);
      $('#lastname').text(lastname);
  })

  $('#moods').text(moods + ".");

  $('#moods').click(function(){
      var moods = getRandomElement(data.moods);
      $('#moods').text(moods + ".");
  })
}
