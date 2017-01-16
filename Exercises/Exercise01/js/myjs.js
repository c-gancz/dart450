$(document).ready(function(){

    $('h2').hide();

    $('h1').click(function (){
        $(this).addClass("animate");
    });

    $('h1').mouseout(function (){
        $('h1').hide();
        $('h2').show();
    });
});
