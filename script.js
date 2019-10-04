$(document).ready(function(){

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

  //sliders//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();

	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);

    //next slide
	$('#next').click(function(){
		slideRight();
	});

	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});

  $('#slider-wrap').hover(
  	  function(){ $(this).addClass('active'); clearInterval(autoSlider); },
  	  function(){ $(this).removeClass('active');}
  	);

  function slideLeft(){
  	pos--;
  	if(pos==-1){ pos = totalSlides-1; }
  	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));
  }
  function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));
}
});;

//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//slide left
