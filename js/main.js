/*
 * @Author: tarn.tianrun 
 * @Date: 2018-03-28 14:15:40 
 * @Last Modified by:   tarn.tianrun 
 * @Last Modified time: 2018-03-28 14:15:40 
 */

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

var barrage = $('.barrage-content')
var heightBar = window.innerHeight / 5 * 3
barrage.css("height", heightBar + "px");
var resultData;
var i = 0;
var list;
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
			if (data.code == 100000) {
				resultData = data.data
				list = setInterval(function () {
					i++
					if (i <= 9) {
						commentList()
					} else {
						cancelList()
					}
				}, 1200)
			} else {
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
	$('.barrage-content').barrager(resultData[i]);
}
function cancelList() {
	i = 0
	page1 = page1 + 1
	clearInterval(list);
	getComment(page1, size1)
}
