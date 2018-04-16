var swiper = new Swiper('.swiper-container', {
	autoplay: {
		delay: 6000,//1秒切换一次
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
});
$("img.lazyload").lazyload();