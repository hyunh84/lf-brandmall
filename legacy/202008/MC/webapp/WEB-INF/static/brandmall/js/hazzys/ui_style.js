var globalGnb;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

	globalGnb = new gnbFnc();

});
$(document).on('click', '#footer .sel_box > button', function() {
	var _this = $(this);
	if(_this.hasClass('on')) {
		_this.removeClass('on');
	}else{
		_this.addClass('on');
	}
});

/**********************************************************
	COMMON
**********************************************************/
/* S :gnb */
var gnbFnc = function() {
	var header = $('#header');
	var btnGnb = $('.btnGnb', header);
	var gnbWrap = $('.hazzysGnbWrap', header);
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

/* S :footer select */
$(document).on('click', '.site-footer__menu-list', function() {
	!$(this).hasClass('on') ? $(this).addClass('on') : $(this).removeClass('on');
  });
/* E :footer select */

/* S :header scroll event */
var headerScrollFn = function(el) {
	var el = el;
	var offseT = el.offset().top;
	var banrH = $('#header .top_banner').length > 0 ? $('#header .top_banner').outerHeight() : 0;
	$(window).scroll(function() {
		var winST = $(window).scrollTop();
		if(winST > offseT - 53 -banrH) {
			$('#header').removeClass('v02');
		}else{
			$('#header').addClass('v02');
		}
	});
}
/* E :footer select */

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
			_cateList.show();
			$.each(cateListFn, function(i, swiperFn) {
				// console.log(i, '  =  ', val);
				var activeIndex = $('.subCateViewWrap .cmtSlideWrap').eq(i).find('.active').index();
				swiperFn.update();
				swiperFn.slideTo(activeIndex);
			})
		}else{
			_cateList.hide();
		}
	});
}

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
var mainVisual = function(target) {
	var targetEl = $(target);
	var visualMenu = $('.visualMenu .cmtSlideWrap', targetEl);
	var visual = $('.visual .cmtSlideWrap', targetEl);

	var menuLib = new Swiper(visualMenu, {
		centeredSlides: true,
		slidesPerView : 'auto',
		onSlideChangeStart : function(swiper) {
			// console.log(swiper);
			visualLib.slideTo(swiper.activeIndex);
		}
	});
	var visualLib = new Swiper(visual, {
		effect: 'fade',
		followFinger : false,
		onSlideChangeStart : function(swiper) {
			// console.log(swiper);
			menuLib.slideTo(swiper.activeIndex)
		}
	});
}

var mainSnsFn = function(target) {
	var targetEl = $(target);
	var swiperEl = $('.cmtSlideWrap', targetEl);
	var swiperLib = new Swiper(swiperEl, {
		centeredSlides: true,
		slidesPerView : 'auto',
		loop : true,
		pagination : '.swiper-pagination',
		paginationClickable: true,
		paginationBulletRender : function (index, className) {
			return '<button type="button" class=" ' +className+  ' "><em>' + (index + 1) + '</em></button>';
		},
		onInit : function(swiper) {

		}
	});
}

var fullVisualSlide = function(target, options) {
	var targetEl = $(target);
	var swiperEl = $('.cmtSlideWrap', targetEl);
	var opt = {
		autoplay : 3000,
		autoplayDisableOnInteraction : false,
		loop : true,
		pagination : '.swiper-pagination',
		paginationClickable: true,
		paginationBulletRender : function (index, className) {
			return '<button type="button" class=" ' +className+  ' "><em>' + (index + 1) + '</em></button>';
		}
	}

	var options = options || {};
	$.extend(opt, options);

	var swiperLib = new Swiper(swiperEl, opt);
}

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