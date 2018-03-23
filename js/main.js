[].slice.call(document.querySelectorAll('.dotstyle > ul')).forEach(function (nav) {
	new DotNav(nav, {
		callback: function (idx) {
			console.log(idx)
		}
	});
});
var myslider = new iSlider({
	wrap: '#wrap',
	item: '.item',
	onslide: function (index) {

	}
});

var elem;
elem = $('#typed');
var typed = new Typed('#typed', {
	strings: ['来自优它选<br/> 铲屎官客户的评价'],
	typeSpeed: 150,
	startDelay: 300,
	onComplete: function (self) {
		return elem.siblings('.typed-cursor').remove();
	},
});
var barrage = $('.barrage-content')
var heightBar = window.innerHeight / 5 * 3
barrage.css("height", heightBar + "px");


var item = {
	img: '', //图片 
	info: '测试测试测试测试测试', //文字 
	href: '', //链接 
	close: false, //显示关闭按钮 
	speed: 4.5, //延迟,单位秒,默认6 
	color: '#ffffff', //颜色,默认白色 
	old_ie_color: '#ffffff', //ie低版兼容色,不能与网页背景相同,默认黑色 
}
$('.barrage-content').barrager(item);
// setInterval(function () {
// 	$('.barrage-content').barrager(item);
// }, 1200)