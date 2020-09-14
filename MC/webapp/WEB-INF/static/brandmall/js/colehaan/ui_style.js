/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

	if($('.top_banner').length) {
		var topBanner = new cmtSwiperFn01('.top_banner', {
			prevButton : '.top_banner .swiper-prev',
			nextButton : '.top_banner .swiper-next',
		});
	}

	if($('.filterOptWrap').length) {
		filterOptSearchFn();
	}

	gnbFn();

});

// footer folding
$(document).on('click', '#footer .contact-box .contact-btn', function(e) {e.preventDefault();
	var _this = $(this);
	if(_this.hasClass('active')) {
		_this.removeClass('active');
	}else{
		_this.addClass('active');
	}
});

//design select - open
$(document).on('click', '.dsgnSelect > button', function(e) {e.stopPropagation();
	var _this = $(this);
	var _optBox = _this.next();
	
	if(_optBox.is(':hidden')) {
		_optBox.show();
		$(document).one('click', function() {
			_optBox.hide();
		});
	}
});
//design select - select value
$(document).on('click', '.dsgnSelect .optList ul li a', function(e) {e.preventDefault();
	var _this = $(this);
	var _li = _this.parent();
	var _viewTxt = _this.parents('.dsgnSelect').find('> button');
	
	if(!_li.hasClass('selected')) {
		_viewTxt.text(_this.text()).next().find('li').removeClass('selected');
		_li.addClass('selected');
		
	}
});

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

/**********************************************************
	COMMON
**********************************************************/
var gnbFn = function() {
	var gnbWrapper = $('.colehaanGnbWrap');
	var depthItem01 = $('.gnbList > ul > li > a', gnbWrapper);
	var gnbDepth02 = $('.subDepth02');
	var gnbOpen = $('#header .btnOpenGnb');
	var gnbClose = $('.colehaanGnbWrap .closeGnb');
	var gnbPrev = $('.colehaanGnbWrap .gnbPrev');

	gnbOpen.click(function() {
		gnbWrapper.css({
			'left': 0,
			'background-color' : 'rgba(0, 0, 0, 0.8)'
		});
	});
	gnbClose.click(function() {
		gnbWrapper.css({
			'left': '-100%',
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
		gnbDepth02.css({
			'left': '-100%'
		});
	});
	depthItem01.click(function(e) {e.preventDefault();
		$(this).next().css({
			'left': '0'
		});
	});
	gnbPrev.click(function() {
		gnbDepth02.css({
			'left': '-100%'
		});
	});

}

/* 상세검색 팝업 */
var filterOptSearchFn = function() {
	var filterBtn = $('.topAreaWrap .btnFilter');
	var filterOptWrap = $('.filterOptWrap');
	var optFoldBtn = $('.filterOptBox > dl > dt button', filterOptWrap);
	var btnTip = $('.optTipBtn', optFoldBtn);
	var checkbox = $('.sizeOpt input[type="checkbox"]', filterOptWrap);
	
	filterBtn.click(function() {
		var pos = parseInt(filterOptWrap.css('left'), 10);

		if(pos < 0) {
			filterOptWrap.css({
				'left' : '0',
				'background-color' : 'rgba(0, 0, 0, 0.8)'
			});
		}
	});

	$('.reset, .confirm, .closeOpt', filterOptWrap).click(function() {
		filterOptWrap.css({
			'left' : '-100%',
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});

	btnTip.click(function(e) {e.stopPropagation();
		openLayerFn('#sizeOptTip');
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

/* GO TOP */
$(document).on('click', '#footer .footer-util .btn-top, #container > .btn-top', function() {
	$('html, body').animate({
		scrollTop : 0
	}, 600);
});

/**********************************************************
	swiper
**********************************************************/
var cmtSwiperFn01 = function(target, options) {
	var targetEl = $(target);
	var swiperEl = $('.cmtSlideWrap', targetEl);
	var slideItem = $('.swiper-slide', swiperEl);
	var opt = {
		autoplay : 3000,
		speed : 600,
		autoplayDisableOnInteraction : false,
		loop : true,
		pagination : target+' .swiper-pagination',
		paginationClickable: true,
		paginationBulletRender : function (index, className) {
			return '<span class=" ' +className+  ' "><em>' + (index + 1) + '</em></span>';
		},
		onInit : function(swiper) {
			if($('.swiper-pagination', targetEl).legnth) {
				console.log('swiper onInit pagination');
				var itemTotal = slideItem.length;
				if(itemTotal < 2) {
					console.log('total 1');
					swiper.stopAutoplay();
					swiper.lockSwipes();
					$('.swiper-pagination', targetEl).hide();
				}
			}
		}
	}
	var options = options || {};
	$.extend(opt, options);

	var swiperLib = new Swiper(swiperEl, opt);
}

var cmtSwiperFn02 = function(target, options) {
	var targetEl = $(target);
	var swiperEl = $('.cmtSlideWrap', targetEl);
	var opt = {
		scrollbar : target + ' .swiper-scrollbar',
		scrollbarHide : false,
		freeMode : true,
		slidesPerView : 'auto'
	}

	var options = options || {};
	$.extend(opt, options);

	var swiperLib = new Swiper(swiperEl, opt);

	return {
		slideTo : function(idx) {
			swiperLib.slideTo(idx, 1)
		}
	}
}

/* S :서브화면 카테고리 슬라이드 */
var categorySwiperFn = function(target) {
	var targetEl = $(target);

	var swiperLib = new Swiper(targetEl, {
		freeMode : true,
		slidesPerView : 'auto',
		onInit : function(swiper) {
			swiper.update();
		}
	});
	
	return {
		slideTo : function(idx) {
			swiperLib.slideTo(idx, 1)
		},
		update : function() {
			swiperLib.update();
		}
	}
}
/* E :서브화면 카테고리 슬라이드 */

/**********************************************************
	layer popup
**********************************************************/
var layerScrollT;
var openLayerFn = function(target) {
	var target = $(target);
	layerScrollT = $(window).scrollTop();

	target.show().before('<div class="layerMask"></div>');
	$('#wrap').addClass('pop');
	$('.layerMask').bind('click', function() {
		closeLayerFn(target);
	});
}

var closeLayerFn = function(target) {
	var target = $(target);

	target.hide();
	$('.layerMask').unbind('click').remove();
	$('#wrap').removeClass('pop');
	$('html, body').animate({scrollTop : layerScrollT}, 1);
}