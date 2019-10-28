//slider1
$('.responsive').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

//rotate icon in section SERVICES
$('img').hover(function () {
  this.classList.toggle('rotate');
});

//slider2
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav',
  lazyLoad: 'ondemand',
  dots: true,
});
$('.slider-nav').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  lazyLoad: 'ondemand',
  arrows:false,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  lazyLoad: 'ondemand',
  arrows:false,
        }
      },
      {
        breakpoint: 760,
        settings: {
          centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  lazyLoad: 'ondemand',
  arrows:false,
        }
      },
    ]
});

// ubrat sleva i sprava polovinki slaidera 2go

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $('.slider-nav > .slick-list > .slick-track > .slick-slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
    console.log($(this).html());
  });
  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
  $(visibleSlides).last().next().css('opacity', 0);
}

//Execute the function to apply the visibility on dom ready.
$(setSlideVisibility());

//Re-apply the visibility in the beforeChange event.
$('.slider-nav').on('beforeChange', function() {
  $('.slick-slide').each(function() {
    $(this).css('opacity', 1);
  });
});

//After the slide change has completed, call the setSlideVisibility to hide the partial slides.
$('.slider-nav').on('afterChange', function() {
  setSlideVisibility();
});

// animation scroll

jQuery(window).scroll(function(){
  var $sections = $('section');
$sections.each(function(i,el){
 var top  = $(el).offset().top-100;
 var bottom = top +$(el).height();
 var scroll = $(window).scrollTop();
 var id = $(el).attr('id');
if( scroll > top && scroll < bottom){
     $('a.active').removeClass('active');
$('a[href="#'+id+'"]').addClass('active');

 }
})
});

$("nav").on("click","a", function (event) {
 // исключаем стандартную реакцию браузера
 event.preventDefault();

 // получем идентификатор блока из атрибута href
 var id  = $(this).attr('href'),

 // находим высоту, на которой расположен блок
     top = $(id).offset().top;
  
 // анимируем переход к блоку, время: 800 мс
 $('body,html').animate({scrollTop: top}, 800);
});

//GALEREYA

	$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.app, .card, .icon, .logo, .web'  
      		}     
				});								
			
			}

		};
		// Run the show!
		filterList.init();
	});	
  
  //DATE and MONTH
  
  function clock() {
    var d = new Date();
    var day = d.getDate();
    // var hrs = d.getHours();
    // var min = d.getMinutes();
    // var sec = d.getSeconds();
    
    var mnt = new Array("Jan", "Febr", "Mar", "Apr", "May",
    "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec");
    
    // if (day <= 9) day="0" + day;
    // if (hrs <= 9) hrs="0" + hrs;
    // if (min <=9 ) min="0" + min;
    // if (sec <= 9) sec="0" + sec;
    
    $("#time").html(day);
    $("#time1").html(mnt[d.getMonth()]);
    $("#time2").html(day);
    $("#time3").html(mnt[d.getMonth()]);
    }
    setInterval("clock()",1000);

    //burger

    (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.menu')
            .toggleClass('menu_state_open');
        });
        
        $('.menu__links-item').on('click', function() {
          // do something
    
          $(this).closest('.menu')
            .removeClass('menu_state_open');
        });
      });
    })(jQuery);