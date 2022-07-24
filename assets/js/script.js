$('.slick-col').slick({
    dots: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 1,
      centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
      slidesToScroll: 1
      }
    }
   ]
});