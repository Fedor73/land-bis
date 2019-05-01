if ($(".js-image-wrapper").length > 0) {
  objectFitImages(".js-image-wrapper");
}

$(".js-initial-sl").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000
});
