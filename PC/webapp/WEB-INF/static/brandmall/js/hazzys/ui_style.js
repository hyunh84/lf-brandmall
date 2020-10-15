var headerH;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {
	gnbFnc();
});

/**********************************************************
	COMMON
**********************************************************/
/* S :gnb */
var gnbFnc = function() {
	var gnbWrap = $('.gnbWrap');
	var inner = $('.gnbInner', gnbWrap);
	var gnbBox = $('.gnbBox', inner);
	var assistMenu = $('.assistMenu', inner);

	$('> ul > li', gnbBox).mouseenter(function() {
		var _this = $(this);
		var depth02 = $('.depth02', _this);

		if(depth02.length === 0) return;

		depth02.show();
		gnbWrap.addClass('on');
	}).mouseleave(function() {
		var _this = $(this);
		var depth02 = $('.depth02', _this);

		if(depth02.length === 0) return;

		depth02.hide();
		gnbWrap.removeClass('on');
	});

	$('> ul > li', assistMenu).mouseenter(function() {
		var _this = $(this);
		var depth02 = $('.depth02', _this);

		if(depth02.length === 0) return;

		depth02.show();
		gnbWrap.addClass('on');
	}).mouseleave(function() {
		var _this = $(this);
		var depth02 = $('.depth02', _this);

		if(depth02.length === 0) return;

		depth02.hide();
		gnbWrap.removeClass('on');
	});

}
/* E :gnb */


/* S :slick */
var slickFnc = function(target, opt) {
	$(target).slick(opt);
}
/* E :slick */
