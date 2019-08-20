
$("#paragraph-btn").click(function(){
    $("#more-about-me").css('display',"block");
    $('#paragraph-btn').css('display',"none");
    $('.about-container').css('grid-template-rows','200px auto');
});

$('#close-btn').click(function(){
    $('#more-about-me').css("display","none");
    $('#paragraph-btn').css('display',"block");
    $('.about-container').css('grid-template-rows','200px 500px');
    $('html,body').scrollTop(0);
});

$(document).scroll(function() {
    //remove transparent class from header
    if ($(document).scrollTop() >10) {
      if (!$('.nav-container').hasClass('nav-body')) {
        $('nav').addClass('nav-body');
      }
    }

    //add transparent class to header
      if ($(document).scrollTop() < 10) {
        if ($('.nav-container').hasClass('nav-body')) {
          $('.nav-container').removeClass('nav-body');
        }
      }

      if($(document).scrollTop()>1800){
        $('.casestudy-wrapper').css('display','inline-block');
      }

      if($(document).scrollTop()<1800){
        $('.casestudy-wrapper').css('display','none');
      }
    });




    //show mobile dropdown menu
      $('.iphone-icon').click(function() {
        $('.iphone-dropdown').fadeToggle('fast');
        $('.iphone-icon').css('display','none');
        $('.iphone-close').css('display','block');
      });

      $('.iphone-close').click(function(){
        $('.iphone-dropdown').css('display','none');
        $('.iphone-close').css('display','none');
        $('.iphone-icon').css('display','block');
      });

    //close dropdown when item clicked
    $('.iphone-dropdown a').click(function(event){
   event.stopPropagation();
});
