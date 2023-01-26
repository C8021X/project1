$(".team-carousel").slick({
	arrows: false,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
})
