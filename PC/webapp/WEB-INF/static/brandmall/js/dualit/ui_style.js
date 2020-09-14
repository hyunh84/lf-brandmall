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
	var depth01 = $('>ul>li', gnbWrap);

	depth01.mouseenter(function() {
		var _this = $(this);
		var _subDepth = $('.subDepth', _this);

		if(_subDepth.length) {
			if(!gnbWrap.hasClass('hover'))gnbWrap.addClass('hover');
			_subDepth.show(1, function() {
				var subItemW = 0;
				$('> ul > li', _subDepth).each(function() {
					var _this = $(this);
					var thisW = Math.ceil(_this.outerWidth());
					subItemW += thisW;
				});
				$('> ul', _subDepth).css({'width' : subItemW + 10});
			});
		}
	});
	depth01.mouseleave(function() {
		var _this = $(this);
		var _subDepth = $('.subDepth', _this);
		
		if(_subDepth.length) {
			if(gnbWrap.hasClass('hover'))gnbWrap.removeClass('hover');
			_subDepth.hide();
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

/* S :공지사항 폴딩기능 */
$(document).on('click', '.notiListwrap02 > .inner > ul > li > a', function(e) {e.preventDefault();
	var _this = $(this);
	var _detail = _this.next();

	if(_detail.is(':hidden')) {
		$('.notiListwrap02 li').removeClass('active').find('.notiDetailBox').hide();
		_this.parent().addClass('active');
		_detail.slideDown('600', function() {
			var offsetT = _this.offset().top - 145;
			$('html, body').animate({scrollTop : offsetT}, 1);
		});
	}else{
		_this.parent().removeClass('active');
		_detail.slideUp();
	}
});
/* E :공지사항 폴딩기능 */

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

