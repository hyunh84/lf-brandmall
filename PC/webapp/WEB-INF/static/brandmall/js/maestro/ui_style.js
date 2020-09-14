var headerH;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {
	gnbFnc();
});

$(document).on('click', '.main_area .monthRecomBox .thumbImg button', function() {
	var _this = $(this);
	var imgUrl = $('img', _this).attr('src');
	var html = '<div class="layerMask"></div>';
	html += '<article class="layerThumbWrap" style="display:block;">';
	html += '<div class="imgCase"><img src="' + imgUrl + '" alt="" /></div>';
	html += '<button class="closeThumb"><em>닫기</em></button>';
	html += '</article>';
	$('body').append(html);

	$('.layerMask, .layerThumbWrap .closeThumb').click(function() {
		console.log('click');
		$('.layerMask').remove();
		$('.layerThumbWrap').remove();
	});
	$('.layerMask, .layerThumbWrap').bind('mousewheel DOMMouseScroll', function(e) {e.preventDefault();});
});

/**********************************************************
	COMMON
**********************************************************/
/* S :gnb */
var gnbFnc = function() {
	var gnbWrap = $('.maestroGnbWrap');
	var item01 = $('>ul>li', gnbWrap);

	item01.mouseenter(function() {
		var target = $(this).find('.subDepth02');
		target.slideDown();
	}).mouseleave(function() {
		var target = $(this).find('.subDepth02');
		target.hide();
	});
}
/* E :gnb */

/* S :디자인 셀렉트박스 */
$(document).on('change', '.selectWrap select', function() {
	var _this = $(this);
	var val = _this.val();
	var viewTxt = _this.prev();
	viewTxt.text(val);
	console.log($(this).val());
})
/* E :디자인 셀렉트박스 */

/* S :Top banner */
$(document).on('click', '#header .top_banner > button', function() {
	$('.top_banner').hide();
});
/* E :Top banner */

/* S :slick */
var slickFnc = function(target, opt) {
	var target = $(target);
	target.slick(opt);
}
/* E :slick */

/* S :상단으로가기 */
$(document).on('click', '#footer .btn_top', function() {
	$('html, body').animate({scrollTop : 0}, 500);
});
/* E :상단으로가기 */


/**********************************************************
	layer popup
**********************************************************/
var openLayerFn = function(target) {
	var target = $(target);
	var winW = $(window).width();
	var winH = $(window).height();
	var winST = $(window).scrollTop();
	var tW = target.outerWidth();
	var tH = target.outerHeight();
	var posX = (winW - tW) / 2 >= 0 ? (winW - tW) / 2 : 0;
	var posY = (winH - tH) / 2 > 0 ? ((winH - tH) / 2) + winST : winST;
	
	
	target.before('<div class="layerMask"></div>');
	// target.show();
	target.css({
		'top' : posY,
		'left' : posX
	}).show();
}

var closeLayerFn = function(target) {
	var target = $(target);
	target.prev().remove();
	target.hide();
}

var openFullLayerFn = function(target) {
	var target = $(target);
	target.show();
}

var closeFullLayerFn = function(target) {
	var target = $(target);
	target.hide();
}

