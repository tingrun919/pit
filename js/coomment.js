var page1 = 1;
var size1 = 10;
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
			// console.log(data.data, '1')
			if(data.code == 100003){
				alert("已经是最后一页啦！")
			}else{
				addPage(data.data)
			}

		}
	});
	//ajax开始=======================================end
}

$(document).ready(function () {
	getComment(page1, size1);
})

function addPage(result){
	for(var i = 0; i<result.length; i++){
		addChild(result[i])
		if(i+1 == result.length){
			var page = $("<div class='page'></div>").appendTo($(".com-main"));
			var img_t1 = $("<img src='' width='30' height='30'>").appendTo(page);
			img_t1.attr('src', './img/left.png');
			img_t1.click(function(){
				if(page1 == 1){
					alert("已经是第一页啦！")
				}else{
					getComment(page1 - 1, size1)
				}
			})
			$("<span>"+page1+"</span>").appendTo(page);
			var img_t2 = $("<img src='' class='t-i' width='30' height='30'>").appendTo(page);
			img_t2.attr('src', './img/right.png');
			img_t2.click(function(){
				page1 = page1 + 1
				getComment(page1, size1)
			})
		}
	}
}

function addChild(result) {
	if(page1 > 1){
		$(".page").remove();
	}
	var time = new Date().getTime();
	var barrager_id = 'barrage_' + time;
	var id = '#' + barrager_id;
	var div_barrager = $("<div class='' id='" + barrager_id + "'></div>").appendTo($(".com-main"));
	// var window_height = $(window).height() - 100;
	// var this_height = (window_height > this.height()) ? this.height() : window_height;
	// var window_width = $(window).width() + 500;
	// var this_width = (window_width > this.width()) ? this.width() : window_width;
	// var bottom = (barrage.bottom == 0) ? Math.floor(Math.random() * this_height + 40) : barrage.bottom;
	// div_barrager.css("bottom", bottom + "px");
	// var bottom = (barrage.bottom == 0) ? Math.floor(Math.random() * (window.innerHeight / 5 * 3 - window.innerHeight / 5) + window.innerHeight / 5) : barrage.bottom;
	// div_barrager.css("bottom", bottom + "px");
	div_barrager.css("margin", 10 + "px");
	div_barrager_box = $("<div class='barrage_box cl'></div>").appendTo(div_barrager);
	// if (barrage.img) {

	// 	div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>");
	// 	var img = $("<img src='' >").appendTo(id + " .barrage_box .portrait");
	// 	img.attr('src', barrage.img);
	// }
	var infoid = 'info_' + time
	var imgid = 'img_' + time
	var info_id = '#' + infoid
	var img_id = '#' + imgid
	if (result.orderCommentImg.length > 0) {
		div_barrager_box.append(" <div class='z p f' id='" + infoid + "'></div>");
		div_barrager_box.append(" <div class='z p f' id='" + imgid + "'></div>");

	} else {
		div_barrager_box.append(" <div class='z p f' id='" + infoid + "'></div>");
	}
	//t开始
	var infot = '#t_' + infoid
	var t = $("<div class='t'  id='t_" + infoid + "'></div>").appendTo(info_id);
	var img_t = $("<img src='' class='t-i' width='30' height='30'>").appendTo(infot);
	// img_t.attr('src', result.userTouXiang);
	img_t.attr('src', result.userTouXiang);
	img_t.error(function () {
		img_t.attr('src', './img/userIcon.png');
	})
	var span_t = $("<span>" + result.userName + "</span>").appendTo(infot);
	var div_t = $("<div id='s_" + infoid + "'></div>").appendTo(infot);
	var socret = '#s_' + infoid
	for (var i = 0; i < result.starNum; i++) {
		var score_t = $("<img src='' width='15' height='15'>").appendTo(socret);
		score_t.attr('src', './img/star2x.png');
	}
	//t结束
	//m开始
	var infom = '#m_' + infoid
	var m = $("<div class='m'  id='m_" + infoid + "'></div>").appendTo(info_id);
	$("<span>" + result.commentTime + "</span>").appendTo(infom);
	$("<span>" + result.orderName + "</span>").appendTo(infom);
	//m结束
	//t开始
	var infot2 = '#t2_' + infoid
	$("<div class='t'  id='t2_" + infoid + "'></div>").appendTo(info_id);
	$("<p>" + result.commentOrder + "</p>").appendTo(infot2);
	// $("<p>"+result.orderName+"</p>").appendTo(infot2);
	//t结束
	//img g 开始
	var infog = '#g_' + infoid
	$("<div class='g'  id='g_" + infoid + "'></div>").appendTo(img_id);
	for (var i = 0; i < 3; i++) {
		$("<div></div>").appendTo(infog);
		$(".g").css("height", "121px")
		if (result.orderCommentImg[i]) {
			$("" + infog + " div:nth-child(" + (i + 1) + ")").css("backgroundImage", "url(" + result.orderCommentImg[i].commentImg + ")")
		}
	}
}