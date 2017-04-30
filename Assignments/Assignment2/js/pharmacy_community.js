$(document).ready(function(){

  $.getJSON('../data/drugs.json', getDrugs);

});

function getDrugs(data){

  var dataDrugs = data.drugsa;

  var dataString = dataDrugs.join("");

  $('.drugs').text(dataString);

  console.log(dataString);
  // $();
  // testarray.join("")


};
