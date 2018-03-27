$.fn.extend({
	animateCss: function (animationName) {
		console.log(animationName)
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function () {
			$(this).removeClass('animated ' + animationName);
		});
	}
});