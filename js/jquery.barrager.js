/*!
 *@name     jquery.barrager.js
 *@version  1.1
 *@author   yaseng@uauc.net
 *@url      https://github.com/yaseng/jquery.barrager.js
 */
(function ($) {

	$.fn.barrager = function (barrage) {
		barrage = $.extend({
			close: true,
			bottom: 0,
			max: 10,
			speed: 6,
			color: '#fff',
			old_ie_color: '#000000',
		}, barrage || {});

		var time = new Date().getTime();
		var barrager_id = 'barrage_' + time;
		var id = '#' + barrager_id;
		var div_barrager = $("<div class='barrage' id='" + barrager_id + "'></div>").appendTo($(this));
		var window_height = $(window).height() - 100;
		var this_height = (window_height > this.height()) ? this.height() : window_height;
		var window_width = $(window).width() + 500;
		var this_width = (window_width > this.width()) ? this.width() : window_width;
		// var bottom = (barrage.bottom == 0) ? Math.floor(Math.random() * this_height + 40) : barrage.bottom;
		// div_barrager.css("bottom", bottom + "px");
		var bottom = (barrage.bottom == 0) ? Math.floor(Math.random() * (window.innerHeight / 5 * 3 - window.innerHeight / 5) + window.innerHeight / 5) : barrage.bottom;
		div_barrager.css("bottom", bottom + "px");
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
		if (barrage.orderCommentImg.length > 0) {
			div_barrager_box.append(" <div class='z p f' id='" + infoid + "'></div>");
			div_barrager_box.append(" <div class='z p f' id='" + imgid + "'></div>");
			
		} else {
			div_barrager_box.append(" <div class='z p f' id='" + infoid + "'></div>");
		}
		//t开始
		var infot = '#t_' + infoid
		var t = $("<div class='t'  id='t_" + infoid + "'></div>").appendTo(info_id);
		var img_t = $("<img src='' class='t-i' width='30' height='30'>").appendTo(infot);
		// img_t.attr('src', barrage.userTouXiang);
		img_t.attr('src', barrage.userTouXiang);
		img_t.error(function() {
			img_t.attr('src', './img/userIcon.png');
		  })
		var span_t = $("<span>"+barrage.userName+"</span>").appendTo(infot);
		var div_t = $("<div id='s_"+infoid+"'></div>").appendTo(infot);
		var socret = '#s_' + infoid
		for(var i = 0; i < barrage.starNum; i++){
			var score_t = $("<img src='' width='15' height='15'>").appendTo(socret);
			score_t.attr('src', './img/star2x.png');
		}
		//t结束
		//m开始
		var infom = '#m_'+infoid
		var m = $("<div class='m'  id='m_" + infoid + "'></div>").appendTo(info_id);
		$("<span>"+barrage.commentTime+"</span>").appendTo(infom);
		$("<span>"+barrage.orderName+"</span>").appendTo(infom);
		//m结束
		//t开始
		var infot2 = '#t2_'+infoid
		$("<div class='t'  id='t2_" + infoid + "'></div>").appendTo(info_id);
		$("<p>"+barrage.commentOrder+"</p>").appendTo(infot2);
		// $("<p>"+barrage.orderName+"</p>").appendTo(infot2);
		//t结束
		//img g 开始
		var infog = '#g_' + infoid
		$("<div class='g'  id='g_" + infoid + "'></div>").appendTo(img_id);
		for(var i = 0; i<3;i++){
			$("<div></div>").appendTo(infog);
			$(".g").css("height", "121px")
			if(barrage.orderCommentImg[i]){
				$(""+infog+" div:nth-child("+(i+1)+")").css("backgroundImage", "url("+barrage.orderCommentImg[i].commentImg+")")
			}
		}






		// if (barrage.close) {

		// 	div_barrager_box.append(" <div class='close z'></div>");

		// }

		// var content = $("<a title='' href='' target='_blank'></a>").appendTo(id + " .barrage_box .p");
		// content.attr({
		// 	'href': barrage.href,
		// 	'id': barrage.id
		// }).empty().append(barrage.info);
		// if (navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0) {

		// 	content.css('color', barrage.old_ie_color);

		// } else {

		// 	content.css('color', barrage.color);

		// }

		var i = 0;
		div_barrager.css('margin-right', 0);
		// div_barrager.css('right', -102);

		var barrage1 = $('.barrage_box')
		var heightBar1 = window.innerWidth - 40
		barrage1.css("width", heightBar1 + "px");
		// barrage.speed
		$(id).animate({right:this_width},Math.floor(Math.random() * (8-6) + 6)*1000,function(){

			$(id).remove();
		});

		// div_barrager_box.mouseover(function () {
		// 	$(id).stop(true);
		// });

		// div_barrager_box.mouseout(function () {

			// $(id).animate({ right: this_width }, Math.floor(Math.random() * (8 - 6) + 6) * 1000, function () {

			// 	$(id).remove();
			// });

		// });

		$(id + '.barrage .barrage_box .close').click(function () {

			$(id).remove();

		})

	}

	$.fn.barrager.removeAll = function () {

		$('.barrage').remove();

	}
	
})(jQuery);
