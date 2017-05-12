



$(function() {
$('.image-box').slick({
	infinite: true,
    slidesToScroll: 1,
  centerMode: true,
  centerPadding: '1px',
  slidesToShow: 3,
  responsive: [
            {
                breakpoint: 780,
                settings: "unslick"
            }
        ]
});
});

