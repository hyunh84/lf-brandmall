/**********************************************************
	global vari
**********************************************************/
var rctWordFn;//검색영역 내부 최근검색어 슬라이드

/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {
	gnbFnc();

	if($('.topSearchWrap02').length) {//검색결과 페이지 화면
		$('#container').css({'padding-top' : '81px'});
	}
	
	rctWordFn = rctWordLib();
});

/**********************************************************
	COMMON
**********************************************************/
/* S :gnb */
var gnbFnc = function() {
	var gnbWrapper = $('.hazzysGnbWrap');
	var innerBox = $('> .inner', gnbWrapper);
	var btnClose = $('.closeGnb', gnbWrapper);
	var items01 = $('.gnbMenu > ul > li > a', gnbWrapper);
	var mainElLi = $('.gnbMenu > ul > li', gnbWrapper);
	var assistItems01 = $('.assistMenu > ul > li > a', gnbWrapper);
	var assistElLi = $('.assistMenu > ul > li', gnbWrapper);

	$(document).on('click', '#header .btnGnb', function() {
		gnbWrapper.css({
			'left' : '0',
			'background-color': 'rgba(255, 255, 255, 0.9)'
		});
	});

	btnClose.on('click', function() {
		gnbWrapper.css({
			'left' : '-100%',
			'background-color': 'rgba(255, 255, 255, 0)'
		});
	});

	gnbWrapper.on('click', function() {
		gnbWrapper.css({
			'left' : '-100%',
			'background-color': 'rgba(255, 255, 255, 0)'
		});
	});

	innerBox.click(function(e) {e.stopPropagation();});

	items01.click(function(e) {
		var _this = $(this);
		var _next = _this.next();
		var _parent = _this.parent();

		if(!_next.length) {
			return;
		}

		e.preventDefault();
		if(!_parent.hasClass('active')) {
			mainElLi.removeClass('active').find('.depth02').slideUp(700);
			assistElLi.removeClass('active').find('.depth02').slideUp(700);
			_parent.addClass('active')
			_next.slideDown(700);
		}else{
			_parent.removeClass('active')
			_next.slideUp(700);
		}
	});
	assistItems01.click(function(e) {
		var _this = $(this);
		var _next = _this.next();
		var _parent = _this.parent();

		if(!_next.length) {
			return;
		}

		e.preventDefault();
		if(!_parent.hasClass('active')) {
			mainElLi.removeClass('active').find('.depth02').slideUp(700);
			assistElLi.removeClass('active').find('.depth02').slideUp(700);
			_parent.addClass('active');
			_next.slideDown(700);
		}else{
			_parent.removeClass('active')
			_next.slideUp(700);
		}
	});


}
/* E :gnb */

/* 서브카테고리 */
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
			$.each(cateListFn, function(i, fnc) {
				// console.log(i, '  =  ', val);
				var activeIndex = $('.subCateViewWrap .cmtSlideWrap').eq(i).find('.active').index();
				fnc.update();
				fnc.slideTo(activeIndex);
			})
			$()
		}else{
			_cateList.hide();
		}
	});
	$(window).scroll(function() {
		var topCateSlide = $('.subCateViewWrap .cateListBox');
		if(topCateSlide.is(':visible')) $('.subCateViewWrap .cateListBox').hide();
	});
}

//최근검색어
var rctWordLib = function() {
	var topSearchWrap = $('[class^="topSearchWrap"]');
	var rctWordBox = $('.rctWordBox', topSearchWrap);
	var swiperFn;

	swiperFn = new categorySwiperFn($('.rctInner', rctWordBox), {spaceBetween:4});

	return {
		update : function() {
			swiperFn.update();
			swiperFn.optSwiper.unlockSwipes();
		},
		appendItem : function(html) {
			swiperFn.optSwiper.appendSlide(html);
			swiperFn.update();
			swiperFn.optSwiper.unlockSwipes();
		},
		removeItem : function(el) {
			var target = $(el);
			var slideEl = target.parent();
			var rctInner = slideEl.parents('.rctInner');

			swiperFn.optSwiper.removeSlide(slideEl.index());
			swiperFn.update();
			if($('.swiper-slide', rctInner).length < 1) rctInner.hide();
		}
	}
}

// search - open
$(document).on('click', '#header .icoSearch', function(e) {e.preventDefault();
	var _this = $(this);
	var topSearchWrap = $('[class^="topSearchWrap"]');
	topSearchWrap.show();
	rctWordFn.update();
	$('.iptSearch', topSearchWrap).focus();
});
$(document).on('focusin', '.topSearchWrap02 input[type="text"]', function(e) {e.preventDefault();
	var _this = $(this);
	var topSearchWrap = _this.parents('.topSearchWrap02');
	var schContent = $('.schContent', topSearchWrap);

	if(schContent.is(':hidden')) {
		topSearchWrap.css({'height' : '100%'});
		schContent.show();
		rctWordFn.update();
	}
});

// search - close
$(document).on('click', '[class^="topSearchWrap"] .schGoBack', function(e) {e.preventDefault();
	var _this = $(this);
	var topSearchWrap = $('[class^="topSearchWrap"]');
	var schContent = $('.schContent', topSearchWrap);
	
	if(topSearchWrap.hasClass('topSearchWrap')) {//검색결과외 화면에서 기능
		topSearchWrap.hide();
	}else if(topSearchWrap.hasClass('topSearchWrap02')){//검색결고 화면에서 기능
		if(schContent.is(':visible')) {
			schContent.hide();
			topSearchWrap.css({'height' : 'auto'});
		}
	}
});

//design select - open
$(document).on('click', '.selectWrap > button', function(e) {
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
$(document).on('click', '.selectWrap .optList ul li a', function(e) {e.preventDefault();
	var _this = $(this);
	var _li = _this.parent();
	var _viewTxt = _this.parents('.selectWrap').find('> button');
	
	if(!_li.hasClass('selected')) {
		_viewTxt.text(_this.text()).next().find('li').removeClass('selected');
		_li.addClass('selected');
		
	}
});

//easy util news letter input focusin
$(document).on('focusin', '.easyEmail input[type="text"], .easyEmail input[type="email"]', function(e) {
	var _this = $(this);
	var val = _this.val();
	var itemWrap = _this.parent();
	var placeholder = $('.placeholder', itemWrap);

	placeholder.hide();

}); 
//easy util news letter input focusout
$(document).on('focusout', '.easyEmail input[type="text"], .easyEmail input[type="email"]', function(e) {
	var _this = $(this);
	var val = _this.val();
	var itemWrap = _this.parent();
	var placeholder = $('.placeholder', itemWrap);

	if(val === '') {
		placeholder.show();
	}else{
		placeholder.hide();
	}

}); 

//footer select - open
$(document).on('click', '.fLangBox > button', function(e) {
	var _this = $(this);
	var _optBox = _this.next();
	
	if(_optBox.is(':hidden')) {
		_optBox.show();
		$(document).one('click', function() {
			_optBox.hide();
		});
	}
}); 

/**********************************************************
	Campaign
**********************************************************/
var cmpgListFn = function(target) {
	var listEnd = false;
	var winH;
	var targetEl = $(target);
	var cmtSlideWrap = $('.cmtSlideWrap', targetEl);
	var swiperWrapper = $('.swiper-wrapper', cmtSlideWrap);
	var swiperSlide = $('.swiper-slide', swiperWrapper);
	var swiperItemNum = swiperSlide.length;
	var goToFirst = $('.goToFirst button', targetEl);
	// var cmpgInnerList = $('.cmpgInnerList', targetEl);
	var toastBox = $('.swiper-toast', targetEl);

	var setItemCalc = function() {
		winH = window.innerHeight;
		swiperSlide.each(function(i) {
			if(i < swiperItemNum - 1) {
				$(this).css({
					'height' : winH - 53
				})
			}
			if(listEnd) {
				swiperWrapper.css({
					'height' : 'auto'
				});
			}else{
				swiperWrapper.css({
					'height' : winH - 53
				});
			}
		});
	}

	var slideLib = new cmtSwiperFn01(targetEl, {
		loop : false,
		pagination : null,
		autoplay : null,
		onInit : function(swiper) {
			setItemCalc();
		},
		onSlideChangeEnd : function(swiper) {
			if(toastBox.is(':visible')) toastBox.fadeOut(700);
			if(swiper.isEnd && !listEnd) {
				listEnd = true;
				swiperWrapper.css({
					'height' : 'auto'
				});
				return;
			}else if(!swiper.isEnd && listEnd) {
				listEnd = false;
				swiperWrapper.css({
					'height' : winH - 53
				});
			}
		},
		onTransitionStart : function() {
			$('body, html').animate({scrollTop : 0}, 1);
		}
	});

	$(window).resize(function() {
		setItemCalc();
	});

	goToFirst.click(function() {
		slideLib.swiper.slideTo(0, 1);
	});

	return {
		swiper : slideLib
	}

}

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

	return {
		swiper : swiperLib
	}
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

var categorySwiperFn = function(target, options) {
	var targetEl = $(target);
	var cateLink = $('a', target);
	var totalW = 0;
	var options = options || {};
	var opt = {
		freeMode : true,
		slidesPerView : 'auto',
		onInit : function(swiper) {
			var isLockSwipe = targetEl.outerWidth() >= totalW ? true : false;
			if(isLockSwipe) {swiper.lockSwipes();}
			swiper.update();
		}
	}

	$.extend(opt, options);

	var itemCalc = function() {
		cateLink.parent().css({'width' : 'auto'});
		cateLink.each(function() {
			var _this = $(this);
			var w = Math.ceil(_this.outerWidth()) + 4;
			_this.parent().css({'width' : w});
			totalW += w;
		});
	}

	itemCalc();

	var swiperLib = new Swiper(targetEl, opt);

	return {
		optSwiper : swiperLib,
		slideTo : function(idx) {
			swiperLib.slideTo(idx, 1)
		},
		update : function(bool) {
			itemCalc();
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