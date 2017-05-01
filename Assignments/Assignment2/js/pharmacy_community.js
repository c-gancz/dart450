$(document).ready(function(){

  // When the page loads, hide all animations/js that happen when the pharmacy section is enlarged.
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

}); // Closing the document.ready() function.

////////////////////////// FUNCTIONS ///////////////////////

// FUNCTION 1: What is revealed when the pharmacy section is enlarged
function pharmacyReveal(){

  // Call on the drugs.json file with the data of all the pharmaceutical drugs
  // Calling on the function getDrugs();
  $.getJSON('../data/drugs.json', getDrugs);

  // When the pharmacy section is enlarged, make the background color gray
  $('#pharmacy').css({
    'background-color':'rgb(46, 46, 46)'
  });

  // Make the paragraph text white
  $('#pharmacy p').css({
    'color':'white'
  });

  // Revealing all of my HTML elements which have the class "drugs" along with letters A-Z
  $('.drugsa').show();
  $('.drugsb').show();
  $('.drugsc').show();
  $('.drugsd').show();
  $('.drugse').show();
  $('.drugsf').show();
  $('.drugsg').show();
  $('.drugsh').show();
  $('.drugsi').show();
  $('.drugsj').show();
  $('.drugsk').show();
  $('.drugsl').show();
  $('.drugsm').show();
  $('.drugsn').show();
  $('.drugso').show();
  $('.drugsp').show();
  $('.drugsq').show();
  $('.drugsr').show();
  $('.drugss').show();
  $('.drugst').show();
  $('.drugsu').show();
  $('.drugsv').show();
  $('.drugsw').show();
  $('.drugsx').show();
  $('.drugsy').show();
  $('.drugsz').show();
};

// FUNCTION 2: The function that allows the pharmacy to append various parts of the drugs data
function getDrugs(data){

  // Variables that are identified alphabetically as part of the drugs.json file (drugs are ordered in alphabetical order)
  var dataDrugsa = data.drugsa, i;
  var dataDrugsb = data.drugsb, i;
  var dataDrugsc = data.drugsc, i;
  var dataDrugsd = data.drugsd, i;
  var dataDrugse = data.drugse, i;
  var dataDrugsf = data.drugsf, i;
  var dataDrugsg = data.drugsg, i;
  var dataDrugsh = data.drugsh, i;
  var dataDrugsi = data.drugsi, i;
  var dataDrugsj = data.drugsj, i;
  var dataDrugsk = data.drugsk, i;
  var dataDrugsl = data.drugsl, i;
  var dataDrugsm = data.drugsm, i;
  var dataDrugsn = data.drugsn, i;
  var dataDrugso = data.drugso, i;
  var dataDrugsp = data.drugsp, i;
  var dataDrugsq = data.drugsq, i;
  var dataDrugsr = data.drugsr, i;
  var dataDrugss = data.drugss, i;
  var dataDrugst = data.drugst, i;
  var dataDrugsu = data.drugsu, i;
  var dataDrugsv = data.drugsv, i;
  var dataDrugsw = data.drugsw, i;
  var dataDrugsx = data.drugsx, i;
  var dataDrugsy = data.drugsy, i;
  var dataDrugsz = data.drugsz, i;

  // For loops that allow the drugs to be displayed one on top of the other instead of inline
  for( i=0; i< dataDrugsa.length; i++ )
  {$('.drugsa').append(dataDrugsa[i] + '<br />');}

  for( i=0; i< dataDrugsb.length; i++ )
  {$('.drugsb').append(dataDrugsb[i] + '<br />');}

  for( i=0; i< dataDrugsc.length; i++ )
  {$('.drugsc').append(dataDrugsc[i] + '<br />');}

  for( i=0; i< dataDrugsd.length; i++ )
  {$('.drugsd').append(dataDrugsd[i] + '<br />');}

  for( i=0; i< dataDrugse.length; i++ )
  {$('.drugse').append(dataDrugse[i] + '<br />');}

  for( i=0; i< dataDrugsf.length; i++ )
  {$('.drugsf').append(dataDrugsf[i] + '<br />');}

  for( i=0; i< dataDrugsg.length; i++ )
  {$('.drugsg').append(dataDrugsg[i] + '<br />');}

  for( i=0; i< dataDrugsh.length; i++ )
  {$('.drugsh').append(dataDrugsh[i] + '<br />');}

  for( i=0; i< dataDrugsi.length; i++ )
  {$('.drugsi').append(dataDrugsi[i] + '<br />');}

  for( i=0; i< dataDrugsj.length; i++ )
  {$('.drugsj').append(dataDrugsj[i] + '<br />');}

  for( i=0; i< dataDrugsk.length; i++ )
  {$('.drugsk').append(dataDrugsk[i] + '<br />');}

  for( i=0; i< dataDrugsl.length; i++ )
  {$('.drugsl').append(dataDrugsl[i] + '<br />');}

  for( i=0; i< dataDrugsm.length; i++ )
  {$('.drugsm').append(dataDrugsm[i] + '<br />');}

  for( i=0; i< dataDrugsn.length; i++ )
  {$('.drugsn').append(dataDrugsn[i] + '<br />');}

  for( i=0; i< dataDrugso.length; i++ )
  {$('.drugso').append(dataDrugso[i] + '<br />');}

  for( i=0; i< dataDrugsp.length; i++ )
  {$('.drugsp').append(dataDrugsp[i] + '<br />');}

  for( i=0; i< dataDrugsq.length; i++ )
  {$('.drugsq').append(dataDrugsq[i] + '<br />');}

  for( i=0; i< dataDrugsr.length; i++ )
  {$('.drugsr').append(dataDrugsr[i] + '<br />');}

  for( i=0; i< dataDrugss.length; i++ )
  {$('.drugss').append(dataDrugss[i] + '<br />');}

  for( i=0; i< dataDrugst.length; i++ )
  {$('.drugst').append(dataDrugst[i] + '<br />');}

  for( i=0; i< dataDrugsu.length; i++ )
  {$('.drugsu').append(dataDrugsu[i] + '<br />');}

  for( i=0; i< dataDrugsv.length; i++ )
  {$('.drugsv').append(dataDrugsv[i] + '<br />');}

  for( i=0; i< dataDrugsw.length; i++ )
  {$('.drugsw').append(dataDrugsw[i] + '<br />');}

  for( i=0; i< dataDrugsx.length; i++ )
  {$('.drugsx').append(dataDrugsx[i] + '<br />');}

  for( i=0; i< dataDrugsy.length; i++ )
  {$('.drugsy').append(dataDrugsy[i] + '<br />');}

  for( i=0; i< dataDrugsz.length; i++ )
  {$('.drugsz').append(dataDrugsz[i] + '<br />');}

};

// FUNCTION 3: What is revealed when the pharmacy section is minimized
function pharmacyConceal(){

  // Return the background-color to light blue
  $('#pharmacy').css({
    'background-color':'#1ca4d6'
  });

  // Return the paragraph color to dark blue
  $('#pharmacy p').css({
    'color':'#10143e'
  });

  // Conceal all of the A-Z drugs sections
  $('.drugsa').hide();
  $('.drugsb').hide();
  $('.drugsc').hide();
  $('.drugsd').hide();
  $('.drugse').hide();
  $('.drugsf').hide();
  $('.drugsg').hide();
  $('.drugsh').hide();
  $('.drugsi').hide();
  $('.drugsj').hide();
  $('.drugsk').hide();
  $('.drugsl').hide();
  $('.drugsm').hide();
  $('.drugsn').hide();
  $('.drugso').hide();
  $('.drugsp').hide();
  $('.drugsq').hide();
  $('.drugsr').hide();
  $('.drugss').hide();
  $('.drugst').hide();
  $('.drugsu').hide();
  $('.drugsv').hide();
  $('.drugsw').hide();
  $('.drugsx').hide();
  $('.drugsy').hide();
  $('.drugsz').hide();
};
