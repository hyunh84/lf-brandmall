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
	var gnbWrap = $('.gnb');
	var gnbItem = $('> ul > li', gnbWrap);

	gnbItem.mouseenter(function() {
		var _this = $(this);
		var subDepth = $('.gnb_depth', _this);

		subDepth.show();
	}).mouseleave(function() {
		var _this = $(this);
		var subDepth = $('.gnb_depth', _this);

		subDepth.hide();
	});

	$(window).scroll(function() {
		var winSt = $(window).scrollTop();
		if(winSt > 150) {
			$('#header').removeClass('v02');
		}else{
			$('#header').addClass('v02');
		}
	});
}
/* E :gnb */

/* S :디자인 셀렉트박스 */
$(document).on('mouseenter', '[class^="selectWrap"]', function(e) {
	var _selectWrap = $(this);
	var _btnSort = $('.btnSort', _selectWrap);
	var _optList = $('.optList', _selectWrap);
	
	_optList.show();
	
	$('a', _optList).one('click', function(e) {
		var _optItem = $(this);
		var _val = _optItem.text();
		
		if(!_optItem.parent().hasClass('selected')) {
			$('li', _optList).removeClass('selected');
			_optItem.parent().addClass('selected');
			_btnSort.text(_val);
		}
		_optList.hide();
	});
});
$(document).on('mouseleave', '[class^="selectWrap"]', function(e) {
	var _selectWrap = $(this);
	var _optList = $('.optList', _selectWrap);

	$('a', _optList).unbind('click');
	_optList.hide();
});
/* E :디자인 셀렉트박스 */

/* S :디자인 체크박스 */
$(document).on('mouseenter', '[class^="selectWrap"]', function(e) {
	var _selectWrap = $(this);
	var _btnSort = $('.btnSort', _selectWrap);
	var _optList = $('.optList', _selectWrap);
	
	_optList.show();
	
	$('a', _optList).one('click', function(e) {
		var _optItem = $(this);
		var _val = _optItem.text();
		
		if(!_optItem.parent().hasClass('selected')) {
			$('li', _optList).removeClass('selected');
			_optItem.parent().addClass('selected');
			_btnSort.text(_val);
		}
		_optList.hide();
	});
});
$(document).on('click', '[class^="designChk"] input[type="checkbox"]', function(e) {
	console.log('checkbox click');
	var inpt = $(this);
	var prop = inpt.prop('checked');
	var checkWrap = inpt.parent();

	if(prop) {
		checkWrap.addClass('checked');
	}else{
		checkWrap.removeClass('checked');
	}
});
/* E :디자인 체크박스 */


/* S :slick */
var slickFnc = function(target, opt) {
	$(target).slick(opt);
}
/* E :slick */

/**********************************************************
	MAIN
**********************************************************/
/* S :Top banner */
$(document).on('click', '#header .top_banner > button', function() {
	$('.top_banner').hide();
	headerH = $('#header').outerHeight();
});
/* E :Top banner */

/* S :main bottom banner */
var customSlideBannerFn = function() {
	var moveBanner = $('.main_bot_banner');
	var moveContainer = $('ul', moveBanner);
	var moveItem = $('li', moveContainer);
	moveContainer.css("width", moveItem.eq(0).width() * moveItem.length + "px");

	$('.main_bot_banner').on('mousemove', function (e) {
		var _this = $(this);
		var moveWidth = _this.width();
		var moveStartX = _this.offset().left;
		var moveEndX = moveStartX + moveWidth;
		var diffWidth = moveContainer.width() - moveWidth;

		(e.pageX > moveStartX || e.pageX < moveEndX) && moveContainer.css("margin-left", -1 * diffWidth * ((e.pageX - moveStartX) / moveWidth));
	});
}
/* E :main bottom banner */
