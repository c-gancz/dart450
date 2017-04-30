$(document).ready(function(){

  // Call on the drugs.json file with the data of all the pharmaceutical drugs
  $.getJSON('../data/drugs.json', getDrugs);

});

////////////////////////// FUNCTIONS ///////////////////////

// FUNCTION 1: The function that allows the pharmacy to append various parts of the drugs data
function getDrugs(data){

  // Variable that calls on the drugs starting with the letter "a"
  var dataDrugs = data.drugsa, i;

  // For loop that allows the the drugs to be displayed one on top of the other instead of inline
  for( i=0; i< dataDrugs.length; i++ )
  {
    $('.drugs').append(dataDrugs[i] + '<br />');
  }


};
