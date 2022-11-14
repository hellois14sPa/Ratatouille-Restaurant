$('.carousel').carousel({
    interval:4000

});

$(document).ready(function(){

  $(".glfa").click(function(){

    $(".div_show").slideToggle(400);

  });


});


$(document).ready(function(){

  $(".lodh1").fadeOut(6000, function(){

    $(".loding_page").fadeOut(300, function(){
   
      $(".bdoa").css("overflow-y" , "scroll");
    });

  });

});






var as = document.querySelector(".ourteamwork");

window.onscroll = function(){
    if(window.scrollY  >=  as.offsetTop -200  && window.scrollY  <=  as.offsetTop + 18950  )
    {
        $(".up_down").css("display",  "block");

    }else
    { 
      $(".up_down").css("display",  "none");


    } 
    
}; 



$(document).ready(function(){




});