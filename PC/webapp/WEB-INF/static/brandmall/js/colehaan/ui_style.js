var headerH;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {
	if($('.headNoticeBox').length) {
		var headerNotiSlide = new slickFnc('.headNoticeBox .full_slide', {
			infinite: true,
			slidesToShow: 1,
			autoplay: true
		});
	}

	if($('.full_banner.ani').length) {
		bannerAniFn();
	}

	if($('.filterOptWrap').length) {
		filterOptSearchFn();
	}
});

/* 반품/교환/취소 */
$(document).on('click', '.careTabBox button', function() {
	var _this = $(this);
	var wrapper = _this.parents('.careTabBox');
	var itemDt = _this.parent();
	
	if(itemDt.next().is(':hidden')) {
		$('dt', wrapper).removeClass('active');
		itemDt.addClass('active');
	}
});

/* 쇼핑 FAQ */
$(document).on('click', '.faqCateTap button', function() {
	var _this = $(this);
	var wrapper = _this.parents('.faqCateTap');
	var itemLi = _this.parent();
	
	if(!itemLi.hasClass('active')) {
		$('li', wrapper).removeClass('active');
		itemLi.addClass('active');
	}
});
$(document).on('click', '.faqList a', function(e) {e.preventDefault();
	var _this = $(this);
	var wrapper = _this.parents('.faqList');
	var itemTR = _this.parents('tr');
	
	if(itemTR.next().is(':hidden')) {
		$('.rowAsw', wrapper).hide();
		$('tr', wrapper).removeClass('active');
		itemTR.addClass('active').next().show();
	}else{
		itemTR.removeClass('active').next().hide();
	}
});

/**********************************************************
	COMMON
**********************************************************/
/* header search */
$(document).on('focusin focusout', '.hSearchBox input[type=text]', function() {
	var _this = $(this);
	var hSearchBox = _this.parent('.hSearchBox');

	if(hSearchBox.hasClass('active')) {
		hSearchBox.removeClass('active');
	}else{
		hSearchBox.addClass('active');
	}
});

/* GO TOP */
$(document).on('click', '#footer .footer-util .btn-top', function() {
	$('html, body').animate({
		scrollTop : 0
	}, 600);
});

/* S :디자인 셀렉트박스 */
$(document).on('mouseenter', '[class^="selectWrap"]', function(e) {
	var _selectWrap = $(this);
	var _btnSort = $('> button', _selectWrap);
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
$(document).on('click', '[class^="dsgnChk"] input[type="checkbox"]', function(e) {
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

/* S :디자인 라디오박스 */
$(document).on('click', '[class^="dsgnRadio"] input[type="radio"]', function(e) {
	var inpt = $(this);
	var name = inpt.attr('name');
	var prop = inpt.prop('checked');
	var checkWrap = inpt.parent();

	if(prop) {
		$('[class^="dsgnRadio"] input[name="' + name + '"]').parent().removeClass('checked');
		checkWrap.addClass('checked');
	}
});
/* E :디자인 라디오박스 */

/* 상품 카테고리 리스트 필터 팝업 */
var filterOptSearchFn = function() {
	var btnFilter = $('.sortFilterWrap .btnFilter');
	var filterOptWrap = $('.filterOptWrap');
	var optFoldBtn = $('.filterOptBox > dl > dt button', filterOptWrap);
	var optTipBtn = $('.optTipBtn', optFoldBtn);
	var checkbox = $('.sizeOpt input[type="checkbox"]', filterOptWrap);
	var mask = '<div class="mask"></div>'

	btnFilter.click(function() {
		var pos = parseInt(filterOptWrap.css('left'), 10);

		if(pos < 0) {
			filterOptWrap.css({'left' : '0'}).before(mask);
		}

		$('.mask').one('click', function() {
			closeFullLayerFn('#sizeOptTip');
			filterOptWrap.css({'left' : '-620px'});
			$(this).remove();
		});
	});
	$('.reset, .confirm', filterOptWrap).click(function() {
		closeFullLayerFn('#sizeOptTip');
		filterOptWrap.css({'left' : '-620px'});
		$('.mask').remove();
	});
	optTipBtn.click(function(e) {e.stopPropagation();
		openFullLayerFn('#sizeOptTip');
	});
	optFoldBtn.click(function() {
		var _this = $(this);
		var dt = _this.parent();
		var dl = dt.parent();
		if(dt.next().is(':hidden')) {
			dl.addClass('active');
			dt.next().show();
		}else{
			dl.removeClass('active');
			dt.next().hide();
		}
	});
	checkbox.click(function() {
		var inpt = $(this);
		var prop = inpt.prop('checked');
		var checkWrap = inpt.parent();

		if(prop) {
			checkWrap.addClass('checked');
		}else{
			checkWrap.removeClass('checked');
		}
	});
}

var bannerAniFn = function() {
	var itemWrap = $('.full_banner.ani');
	var bannerOffsetT = [];

	itemWrap.each(function(i) {
		var _this = $(this);
		var offsetT = _this.offset().top - ($(window).height() / 2);

		bannerOffsetT[i] = offsetT;
	});
	$(window).scroll(function() {
		var winST = $(this).scrollTop();

		for(var i = 0; i < bannerOffsetT.length; i ++) {
			var thisItem = itemWrap.eq(i).find('.info');
			var thisItemT = thisItem.css('top');

			if(winST >= bannerOffsetT[i] && thisItemT != '50%') {
				thisItem.css({'top' : '50%'});
			}else if(winST < bannerOffsetT[i] && thisItemT != '150%') {
				thisItem.css({'top' : '150%'});
			}
		}
	});
	$(window).resize(function() {
		itemWrap.each(function(i) {
			var _this = $(this);
			var offsetT = _this.offset().top - ($(window).height() / 2);
	
			bannerOffsetT[i] = offsetT;
		});
	});
}
	


/* S :slick */
var slickFnc = function(target, opt) {
	var target = $(target);
	target.slick(opt);
}
/* E :slick */

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
