/*
 * @Author: tarn.tianrun 
 * @Date: 2018-03-28 14:15:18 
 * @Last Modified by:   tarn.tianrun 
 * @Last Modified time: 2018-03-28 14:15:18 
 */

$.fn.extend({
	animateCss: function (animationName) {
		console.log(animationName)
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function () {
			$(this).removeClass('animated ' + animationName);
		});
	}
});