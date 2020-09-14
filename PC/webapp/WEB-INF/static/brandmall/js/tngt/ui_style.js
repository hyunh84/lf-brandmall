var headerH;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

	headerH = $('#header').outerHeight();

	if($('.gnb').length) {
		gnbFnc();
	}

});

/**********************************************************
	COMMON
**********************************************************/
/* S :gnb */
var gnbFnc = function() {
	var gnbWrap = $('.gnb');
	var gnbItem = $('> ul > li', gnbWrap);
	var isVer02 = false;
	var isHasV02 = false;
	
	if($('#header').hasClass('v02')) {
		isVer02 = true;
	}

	gnbItem.mouseenter(function() {
		var _this = $(this);
		var subDepth = $('.gnb_depth', _this);
		
		_this.parent().addClass('hover');
		subDepth.show();
		if(!$('#header .search_box').is(':hidden')) {$('#header .btn_search').trigger('click');}
		if($('#header').hasClass('v02')) {
			isHasV02 = true;
			$('#header').removeClass('v02');
		}
	}).mouseleave(function() {
		var _this = $(this);
		var subDepth = $('.gnb_depth', _this);
		
		_this.parent().removeClass('hover');
		subDepth.hide();
		if(isHasV02) {
			isHasV02 = false;
			$('#header').addClass('v02');
		}
	});

	if(isVer02) {
		$(window).scroll(function() {
			var chPoint = $('[class^="main_area"]').eq(1).offset().top - 120;
			var winST = $(window).scrollTop();
			var nowST = winST + headerH;
			if(chPoint <= nowST) {
				$('#header').removeClass('v02');
			}else{
				$('#header').addClass('v02');
			}
		});
	}
}
/* E :gnb */

/* S :search */
$(document).on('click', '#header .btn_search', function(e) {e.stopPropagation();
	var _this = $(this);
	var searchBox = $('#header .search_box');

	if(searchBox.is(':hidden')) {
		searchBox.show();

		$(document).one('click', function() {//돔 클릭시 팝업 닫기
			if(!searchBox.is(':hidden')) {searchBox.hide();}
		});
	}else{
		searchBox.hide();
	}
});
$(document).on('click', '#header .search_box', function(e) {
	e.stopProagation();
});
/* E :search */

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