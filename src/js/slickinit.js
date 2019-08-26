
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
    

    dots: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false
          }
        }
    ]
});


$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	checkClassList();
});
   