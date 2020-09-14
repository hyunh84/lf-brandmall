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
	if(!$('.quickNavWrap').length) return;
	var btnGnbOpen = $('.quickNavWrap .cate a');
	var tngtGnbWrap = $('.tngtGnbWrap');
	var tngtGnb = $('.tngtGnb', tngtGnbWrap);
	var gnbList = $('.gnbList', tngtGnb);
	var item01 = $('> ul > li > a', gnbList);

	btnGnbOpen.click(function(e) {e.preventDefault();
		if(tngtGnbWrap.is(':hidden')) {
			if(!$('#header .topSearchWrap').is(':hidden')) $('#header .btnTopSrch').trigger('click');
			tngtGnbWrap.show(1, function() {
				tngtGnb.css({
					'height' : 'calc(100% - 110px)'
				});
			});
		}else{
			tngtGnb.css({
				'height' : '0'
			});
			tngtGnbWrap.fadeOut(600);
		}
	});

	item01.click(function(e) {
		var _this = $(this);
		var _next = _this.next();

		if(_next.length) {
			e.preventDefault();
			if(_next.is(':hidden')) {
				$('.depth2', gnbList).slideUp();
				_next.slideDown();
			}
		}
	});

	tngtGnbWrap.click(function() {
		tngtGnb.css({
			'height' : '0'
		});
		tngtGnbWrap.fadeOut(800);
	});
	tngtGnb.click(function(e) {e.stopPropagation();});
}
/* E :gnb */

/* S :search */
$(document).on('click', '#header .btnTopSrch', function(e) {
	var btnOpen = $(this);
	var hidTxt = $('span', btnOpen);
	var topSearchWrap = $('#header .topSearchWrap');

	if(topSearchWrap.is(':hidden')) {
		topSearchWrap.show();
		btnOpen.addClass('close');
		hidTxt.text('검색 닫기');
		$('#header').before('<div class="devSrchMask" style="position:fixed;left:0;top:0;right:0;bottom:0;z-index:50;background-color:rgba(0, 0, 0, 0.5);"></div>');
		$('.devSrchMask').one('click', function() {
			topSearchWrap.hide();
			btnOpen.removeClass('close');
			hidTxt.text('검색 열기');
			$(this).remove();
		});
	}else{
		topSearchWrap.hide();
		btnOpen.removeClass('close');
		hidTxt.text('검색 열기');
		$('.devSrchMask').remove();
	}
});
/* E :search */

/**********************************************************
	main top banner 상단 띠배너
**********************************************************/
var mainTopBanner = function(target) {
	var target = $(target);
	var header = target.parents('#header');
	$('#container').css({'padding-top' : header.outerHeight()});
}

/**********************************************************
	swiper
**********************************************************/
var cmtSwiperFn01 = function(target, options) {
	var targetEl = $(target);
	var opt = {
		autoplay : 3000,
		autoplayDisableOnInteraction : false,
		loop : true,
		pagination : target + '.swiper-pagination',
		paginationClickable: true,
		paginationBulletRender : function (index, className) {
			return '<span class=" ' +className+  ' "><em>' + (index + 1) + '</em></span>';
		},
		onInit : function(swiper) {
			var itemTotal = $('.swiper-pagination-bullet', targetEl).length;
			if(itemTotal > 1) {
				var bulletW = 100 / itemTotal;
				$('.swiper-pagination-bullet', targetEl).css({'width' : bulletW + '%'});
			}else{
				$('.swiper-pagination', targetEl).hide();
			}
		}
	}
	var options = options || {};

	$.extend(opt, options);
	var swiperLib = new Swiper(targetEl, opt);
}

var cmtSwiperFn02 = function(target) {
	var targetEl = $(target);

	var swiperLib = new Swiper(targetEl, {
		freeMode : true,
		slidesPerView : 'auto'
	});

	return {
		slideTo : function(idx) {
			swiperLib.slideTo(idx, 1)
		}
	}
}

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