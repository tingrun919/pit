[].slice.call(document.querySelectorAll('.dotstyle > ul')).forEach(function (nav) {
	new DotNav(nav, {
		callback: function (idx) {
			console.log(idx)
		}
	});
});
var page1 = 1;
var size1 = 10;
var myslider = new iSlider({
	wrap: '#wrap',
	item: '.item',
	onslide: function (index) {
		var dot = [].slice.call(document.querySelectorAll(' li '))
		if (index == 0) {
			$('.item-logo').animateCss('animated fadeIn');
			$('.item-title').animateCss('animated fadeIn');
			$('.item-discription').animateCss('animated fadeIn');
			dot.forEach(function (item, idx) {
				if (idx !== index) {
					dot[idx].className = ''
					dot[index].className = 'current'
				}
			});
			clearInterval(list);
		} else if (index == 1) {
			$('.item2-title').animateCss('animated fadeIn');
			$('.item2-details').animateCss('animated fadeIn');
			dot.forEach(function (item, idx) {
				if (idx !== index) {
					dot[idx].className = ''
					dot[index].className = 'current'
				}
			});
			clearInterval(list);
		} else if (index == 2) {
			$('.item2-title').animateCss('animated fadeIn');
			$('.item2-details').animateCss('animated fadeIn');
			dot.forEach(function (item, idx) {
				if (idx !== index) {
					dot[idx].className = ''
					dot[index].className = 'current'
				}
			});
			clearInterval(list);
		} else if (index == 3) {
			dot.forEach(function (item, idx) {
				if (idx !== index) {
					dot[idx].className = ''
					dot[index].className = 'current'
				}
			});
			var elem;
			elem = $('#typed');
			var options = {
				strings: ['来自优它选<br/> 铲屎官客户的评价'],
				typeSpeed: 140,
				startDelay: 300,
				onComplete: function (self) {
					return elem.siblings('.typed-cursor').remove();
				},
			}
			var typed
			if (elem[0].innerHTML.length <= 0) {
				typed = new Typed("#typed", options);
			} else {
				elem.empty();
				typed = new Typed("#typed", options);
			}
			getComment(page1, size1);
		}
	}
});

// var elem;
// elem = $('#typed');
// console.log(elem.length, '123')
// if (elem.length > 0) {
// 	var typed = new Typed('#typed', {
// 		strings: ['来自优它选<br/> 铲屎官客户的评价'],
// 		typeSpeed: 150,
// 		startDelay: 300,
// 		onComplete: function (self) {
// 			return elem.siblings('.typed-cursor').remove();
// 		},
// 	});
// }

var barrage = $('.barrage-content')
var heightBar = window.innerHeight / 5 * 3
barrage.css("height", heightBar + "px");
var resultData;
var i = 0;
var list ;
function getComment(page, size) {
	//ajax开始=======================================
	var userid = '2';
	var token = '2';
	var pageNum = page;
	var pageSize = size;
	$.ajax({
		type: "get",
		url: 'http://myyouta.com/mzXL/Order/showCommentToAll?userid=' + userid + '&token=' + token + '&pageNum=' + pageNum + '&pageSize=' + pageSize + '',
		success: function (data) {
			if(data.code == 100000){
				resultData = data.data
				list = setInterval(function () {
					i++
					if (i <= 9) {
						commentList()
					} else {
						cancelList()
					}
				}, 1200)
			}else{
				i = 0
				page1 = 1
				clearInterval(list);
				getComment(page1, size1)
			}
		}
	});
	//ajax开始=======================================end
}
function commentList() {
	// console.log(resultData,'123')
	// console.log(i)
	// if(i <= 10){
	$('.barrage-content').barrager(resultData[i]);
	// }else{
	// clearInterval(list);
	// }
}
function cancelList(){
	i = 0
	page1 = page1 + 1
	clearInterval(list);
	getComment(page1, size1)
}
// function commentList(result){
// 	setTimeout("commentAdd(result)",1200);
// }
// function commentAdd(result){
// 	console.log(result,'123')
// 	$('.barrage-content').barrager(result[0]);
// }

var item2 = {
	"id": 0,
	"waybillNumber": "",
	"orderid": "20180307151559714432152",
	"creatertime": "",
	"howManyTime": "2",
	"isenter": "",
	"confirmtime": "",
	"commentOrder": "testtest8713894783274823749",
	"isshowcomment": "",
	"commentTime": "2018-03-21",
	"orderName": "鸡肉味-第四周",
	"starNum": "4",
	"userName": "起个名字",
	"userTouXiang": "http://47.94.251.233:8080/mzXL/uploads/image/2018/03/07/201803071145170992_95824.jpg",
	"orderCommentImg": [
		{
			"id": 1,
			"orderFahuocishu": "2",
			"orderid": "20180307151559714432152",
			"commentImg": "8314312"
		},
		{
			"id": 2,
			"orderFahuocishu": "2",
			"orderid": "20180307151559714432152",
			"commentImg": "11111111111111111"
		}
	]
}
var item3 =     {
	"id": 0,
	"waybillNumber": "",
	"orderid": "20188150251803082020180308",
	"creatertime": "",
	"howManyTime": "1",
	"isenter": "",
	"confirmtime": "",
	"commentOrder": "这个店铺发货快，狗狗很喜欢狗粮，但是*一小包很贵，好评",
	"isshowcomment": "",
	"commentTime": "2018-02-24",
	"orderName": "猪肉味-第一周",
	"starNum": "5",
	"userName": "大壮sos",
	"userTouXiang": "http://47.94.251.233:8080/mzXL/uploads/JiaTouXiang/3.jpg",
	"orderCommentImg": [
	  {
		"id": 36,
		"orderFahuocishu": "1",
		"orderid": "20188150251803082020180308",
		"commentImg": "http://47.94.251.233:8080/mzXL/uploads/IMGComment/36.jpg"
	  },
	  {
		"id": 37,
		"orderFahuocishu": "1",
		"orderid": "20188150251803082020180308",
		"commentImg": "http://47.94.251.233:8080/mzXL/uploads/IMGComment/37.jpg"
	  }
	]
  }
var item = {
	img: '', //图片 
	info: '测试测试测试测试测试', //文字 
	href: '', //链接 
	close: false, //显示关闭按钮 
	speed: 4.5, //延迟,单位秒,默认6 
	color: '#000', //颜色,默认白色 
	old_ie_color: '#000', //ie低版兼容色,不能与网页背景相同,默认黑色
	infoContent: item3
}
// $('.barrage-content').barrager(item3);
// setInterval(function () {
	// $('.barrage-content').barrager(item);
// }, 1200)