
$(document).ready(function() {

  $.getJSON('data/data.json', gotData);

});


function gotData (data) {
  var firstname = getRandomElement(data.firstname);
  $('#firstname').text(firstname);

  var lastname = getRandomElement(data.lastname);

  var lastnameArticle = getArticle(lastname);
  $('#lastname').text(lastnameArticle + " " + lastname);

  var moods = getRandomElement(data.moods);
  var moodsArticle = getArticle(moods);
  $('#moods').text(moodsArticle + " " + moods + ".");
}


function getArticle(string) {
  var article;
  var firstLetter = string.charAt(0).toLowerCase();

  if ("aeiou".indexOf(firstLetter) != -1) {
    article = ""
  }

  else {
    article = ""
  }

  return article;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
