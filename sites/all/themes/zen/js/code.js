(function($){
  $(document).ready(function() {
    $('#block-views-slydeshowfurnitures-block .content ul').bxSlider({
		slideWidth: 260,
		maxSlides: 3,
		minSlides: 3,
		slideMargin: 5
	});


var slider = $('#block-views-slydeshowevents-block .content ul').bxSlider({
	slideHeight: 500,
	maxSlides: 1,
	minSlides: 1,
	slideMargin: 0,
	onSliderLoad: function (currentIndex){
        $('#slide-counter .current-index').text(currentIndex + 1);
    },
    onSlideBefore: function ($slideElement, oldIndex, newIndex){
        $('#slide-counter .current-index').text(newIndex + 1);
    }
    });


$('<div/>', {
    'class':'image-top-blur',
    'text':'',
}).appendTo('#block-views-slydeshowevents-block .slider-item-background');

$('<div/>', {
          'class':'close-button',
          'text':'',
      }).appendTo('.front #lbCenter');

$('<div/>', {
    'id':'slide-counter',
    'text':'',
}).appendTo('#block-views-slydeshowevents-block .bx-controls-direction');

$('#slide-counter').prepend('<div class="current-index">1</div>\\');

$('#slide-counter').append(slider.getSlideCount());


$(function() {
    $('.leaf a').hover( function(){
       $(this).addClass("leaf-hoover");
    },
    function(){
       $(this).removeClass("leaf-hoover");
    });
});

$(function() {
    $('.header-top .instagram').hover( function(){
       $(this).addClass("instagram-small-hoover");
    },
    function(){
       $(this).removeClass("instagram-small-hoover");
    });
});

$(function() {
    $('.header-top .facebook').hover( function(){
       $(this).addClass("facebook-small-hoover");
    },
    function(){
       $(this).removeClass("facebook-small-hoover");
    });
});

$(function() {
    $('.header-top .pinterest').hover( function(){
       $(this).addClass("pinterest-small-hoover");
    },
    function(){
       $(this).removeClass("pinterest-small-hoover");
    });
});

$(function() {
    $('.bx-wrapper .bx-next').hover( function(){
       $(this).addClass("bx-next-hover");
    },
    function(){
       $(this).removeClass("bx-next-hover");
    });
});

$(function() {
    $('.bx-wrapper .bx-prev').hover( function(){
       $(this).addClass("bx-prev-hover");
    },
    function(){
       $(this).removeClass("bx-prev-hover");
    });
});

$(function() {
    $('.footer-instagram').hover( function(){
       $(this).addClass("footer-instagram-hover");
    },
    function(){
       $(this).removeClass("footer-instagram-hover");
    });
});

$(function() {
    $('.footer-pinterest').hover( function(){
       $(this).addClass("footer-pinterest-hover");
    },
    function(){
       $(this).removeClass("footer-pinterest-hover");
    });
});

$(function() {
    $('.footer-fb').hover( function(){
       $(this).addClass("footer-fb-hover");
    },
    function(){
       $(this).removeClass("footer-fb-hover");
    });
});

var sliderClothes = $('#block-views-slydeshowclothes-block .content ul').bxSlider({
		slideWidth: 188,
		maxSlides: 4,
		minSlides: 4,
		slideMargin: 9
	});

var $slidesClothes = $('#block-views-slydeshowclothes-block .content ul li');
var slidesClothesCount = sliderClothes.getSlideCount();

var i = 1;
$.each($slidesClothes, function(){
	$(this).find(".clothes-slide-count").text(i + '\\' + slidesClothesCount);
	i++;
});

$('#block-system-main-menu a').click(function(){
  var target = $(this).attr('href');
  target = target.replace("http://ethnoidea.com.ua/", "");
  console.log(target);
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 800);
  return false;
});

  });

$(window).load(function() {
   $("#loading").fadeOut(500);
});

})(jQuery);