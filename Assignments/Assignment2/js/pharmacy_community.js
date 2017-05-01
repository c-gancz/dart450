$(document).ready(function(){

  pharmacyConceal();

  // Only when the enlarge button is on will this function happen.
  $('#enlarge-on').click(function(){

    // The function that allows elements to appear/disappear in the pharmacy
    // while resizing it.
    $('#pharmacy').resizable({

        // Function from jQuery UI allowing me to get the changing width and height values
        // of the object that is being resized.
        resize: function(event, ui) {
              var widthPharmacy = ui.size.width;
              var heightPharmacy = ui.size.height;

              // If statement allowing pharmacyReveal(); to only appear when the width
              // is larger than 500px and height longer than 600px.
              if (widthPharmacy > 500 && heightPharmacy > 600) {
                  pharmacyReveal();
              }

              // Else statement making pharmacyConceal(); happen when width is smaller
              // than 500px and height smaller than 600px.
              else {
                pharmacyConceal();
              };

          } // Closing the jQuery UI resize function.
    }); // Closing the entire diagnosis center reveal/conceal function.

}); // Closing the function of the enlarge-on button.

});

////////////////////////// FUNCTIONS ///////////////////////

// FUNCTION 1: What is revealed when the pharmacy section is enlarged
function pharmacyReveal(){

  // Call on the drugs.json file with the data of all the pharmaceutical drugs as well as the function getDrugs();
  $.getJSON('../data/drugs.json', getDrugs);

  $('#pharmacy').css({
    'background-color':'rgb(0, 255, 156)'
  });

  $('.drugsa').show();
  $('.drugsb').show();
};

// FUNCTION 2: The function that allows the pharmacy to append various parts of the drugs data
function getDrugs(data){

  // Variable that calls on the drugs starting with the letter "a"
  var dataDrugsa = data.drugsa, i;
  var dataDrugsb = data.drugsb, i;

  // For loop that allows the the drugs to be displayed one on top of the other instead of inline
  for( i=0; i< dataDrugsa.length; i++ )
  {
    $('.drugsa').append(dataDrugsa[i] + '<br />');
  }

  for( i=0; i< dataDrugsb.length; i++ )
  {
    $('.drugsb').append(dataDrugsb[i] + '<br />');
  }


};

// FUNCTION 3: What is revealed when the pharmacy section is minimized
function pharmacyConceal(){

  $('.drugsa').hide();
  $('.drugsb').hide();

};
