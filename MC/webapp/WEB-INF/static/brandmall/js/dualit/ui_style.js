/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

	gnbFnc();

});

$(window).on('load', function() {
	if($('#header .top_banner').length && $('#header .top_banner').is(':visible')) {
		mainTopBanner('#header .top_banner');
	}
});

/**********************************************************
	COMMON
**********************************************************/
/* S :gnb */
var gnbFnc = function() {
	var header = $('#header');
	var btnGnb = $('.btnGnb', header);
	var gnbWrap = $('.dualitGnbWrap', header);
	var item01 = $('.gnbList > ul > li > a', gnbWrap);
	var subGnb = $('.gnbList > ul > li .subGnb');
	var btnGnbPrev = $('.btnGnbPrev', gnbWrap);
	var btnGnbClose = $('.btnGnbClose', gnbWrap);

	btnGnb.click(function() {
		var _this = $(this);
		var txt = $('em', _this);
		if(header.hasClass('gnbOpen')) {
			header.removeClass('gnbOpen');
			gnbWrap.hide();
			txt.text('메뉴열기');
			gnbWrap.removeClass('subOpen');
			subGnb.css({'left' : '-100%'});
		}else{
			header.addClass('gnbOpen');
			gnbWrap.show();
			txt.text('메뉴닫기');
			if($('.subCateViewWrap .btnOpenCate').next().is(':visible')) $('.subCateViewWrap .btnOpenCate').removeClass('active').next().hide();
		}
	});

	item01.click(function(e) {
		var _this = $(this);
		var subMenu = _this.next();

		if(subMenu.length) {
			e.preventDefault();
			gnbWrap.addClass('subOpen');
			subMenu.css({'left' : '0'});
		}
	});

	btnGnbPrev.click(function() {
		var _this = $(this);
		var subMenu = _this.parents('.subGnb');
		gnbWrap.removeClass('subOpen');
		subMenu.css({'left' : '-100%'});
	});

	btnGnbClose.click(function() {
		btnGnb.trigger('click');
	});
}
/* E :gnb */

/* S :subCategorySlide */
var subCategorySlide = function() {
	var cateListFn = [];
	$('.subCateViewWrap .cmtSlideWrap').each(function(i) {
		var _this = $(this);
		cateListFn[i] = new categorySwiperFn(_this);
	});
	$('.subCateViewWrap .btnOpenCate').click(function() {
		var _this = $(this);
		var _cateList = _this.next();
		if(_cateList.is(':hidden')) {
			_this.addClass('active');
			_cateList.show();
			$.each(cateListFn, function(i, swiperFn) {
				var activeIndex = $('.subCateViewWrap .cmtSlideWrap').eq(i).find('.active').index();
				swiperFn.update();
				swiperFn.slideTo(activeIndex);
			})
		}else{
			_this.removeClass('active');
			_cateList.hide();
		}
	});

	$(window).scroll(function() {
		if($('.subCateViewWrap .btnOpenCate').next().is(':visible')) $('.subCateViewWrap .btnOpenCate').removeClass('active').next().hide();
	});
}
/* E :subCategorySlide */

/* S :공지사항 폴딩기능 */
$(document).on('click', '.noti_list02 > ul > li > a', function(e) {e.preventDefault();
	var _this = $(this);
	var _thisNotiContents = _this.next();
	var _wrapper = _this.parents('.noti_list02');

	if(_thisNotiContents.is(':hidden')) {
		_wrapper.find('li').removeClass('active').find('.notiDetailBox').slideUp('600');
		_this.parent().addClass('active');
		_thisNotiContents.slideDown('600', function() {
			var offsetT = _this.offset().top - 60;
			$('html, body').animate({scrollTop : offsetT}, 300);
		});
	}else{
		_this.parent().removeClass('active');
		_thisNotiContents.slideUp('600');
	}
});
/* E :공지사항 폴딩기능 */

/**********************************************************
	main top banner 상단 띠배너
**********************************************************/
var mainTopBanner = function(target) {
	var target = $(target);
	var header = target.parents('#header');

	$('#container').css({'padding-top' : header.outerHeight()});
}

$(document).on('click', '#header .top_banner button', function() {
	$('#header .top_banner').hide();
	$('#container').css('padding-top', '60px');
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
		autoplayDisableOnInteraction : false,
		loop : true,
		pagination : target+' .swiper-pagination',
		paginationClickable: true,
		paginationBulletRender : function (index, className) {
			return '<span class=" ' +className+  ' "><em>' + (index + 1) + '</em></span>';
		},
		onInit : function(swiper) {
			var itemTotal = slideItem.length;
			if(itemTotal < 2) {
				swiper.stopAutoplay();
				swiper.lockSwipes();
				$('.swiper-pagination', targetEl).hide();
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