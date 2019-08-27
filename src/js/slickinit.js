
$('.slider').slick({
    autoplay:  false,
    
    vertical: true,
    verticalSwiping: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
    centerMode: true,
    infinite: false,
    centerPadding: '0',
    waitForAnimate: false,
    prevArrow: false,
    nextArrow: '<div class="wrapper_inner"><div class="pointer-down"><p>Листайте вниз</p><img class="pointer-down__arrow" src="build/img/pointer-down.png" alt=""><img class="pointer-down__background" src="build/img/yellowfield-1.png" alt=""><img class="pointer-down__background" src="build/img/yellowfield-2.png" alt=""></div></div>',
    

    dots: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false
          }
        }
    ]
});


// $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
// 	checkClassList();
// });
   