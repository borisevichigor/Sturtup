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
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//rotate icon in section SERVICES
$('img').hover(function () {
  this.classList.toggle('rotate');
});
//slider2
$('.bottom').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// burger
// menu.onclick = function myfunction() {
//   var x = document.getElementById('myTopnav');
//   if (x.className === "nav") {
//     x.className += " newicon";
//   } else {
//     x.className = "nav";
//   }
// }
let x = document.getElementById('myTopnav');
menu.addEventListener('click',function(){
  if (x.className === 'nav') {
    x.className += ' newicon';
  } else {
    x.className = 'nav';
  }
});
// animation scroll
$(document).ready(function () {
  $("#myTopnav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

