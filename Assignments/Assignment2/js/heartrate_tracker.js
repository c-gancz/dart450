$(document).ready(function(){

  clickCounter();

});

function clickCounter(){

   var i = 0;

   $("#heartrate").click(function(){
       console.log(i++);

       if (i==10) {
          $('#heartrate').hide();
        }

   });

};
