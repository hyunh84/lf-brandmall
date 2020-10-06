/**********************************************************
	ul gloal var
**********************************************************/
var winW = $(window).width();//윈도우 width
var winST = $(window).scrollTop();//윈도우 스크롤 TOP값

$(window).resize(function() {
	winW = $(window).width();
});

/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

	gnbChampFnc();
	
	if($('.topNotiWrap').length) {
		topNotiSlideFnc();
	}

	if($('.promoSlideMain').length) {
		promoSlideFnc();
	}

	if($('.rankMain').length) {
		mainRankNavFnc();
	}
	if($('.magazineMain').length) {
		mainMagazineFnc();
	}
	if($('.instaMain').length) {
		mainInstaFnc();
	}
	if($('.cateViewWrap').length) {
		categoryNavFnc();
		deatilFilterFnc();
	}

	if($('.btnSearch').length) {
		topSearchFnc();
	}


});

//상단으로 가기
$(document).on('click', '.btnGoTop', function() {
	$('html, body').animate({scrollTop : 0}, 1);
})

//design select - open
$(document).on('click', '.selectWrap > button', function(e) {e.stopPropagation();
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

/**********************************************************
	GNB
**********************************************************/
var gnbChampFnc = function() {
	var gnbWrap = $('.champGnb');
	var gnbList = $('.gnbList', gnbWrap)

	$(' > li > a', gnbList).click(function(e) {
		var _this = $(this);
		if(_this.hasClass('noSubDepth')) {return;}

		e.preventDefault();
		var nextDepth = _this.next();

		if(nextDepth.is(':hidden')) {
			$('li', gnbList).removeClass('active');
			_this.parent().addClass('active');
			nextDepth.slideDown();
		}else if(nextDepth.is(':visible')){
			_this.parent().removeClass('active');
			nextDepth.slideUp();
		}
	});
	
	$('.gnbChampOpen').click(function(e) {e.stopPropagation();
		gnbWrap.before('<div class="gnbChampMask"></div>');
		gnbWrap.css({
			'transform':'translate(0, 0)',
			'transition':'transform .6s ease'
		});
		
		
	});
	
	$('.gnbChampClose').click(function(e) {e.stopPropagation();
		$('.gnbChampMask').unbind('click');
		$('.gnbChampMask').remove();
		gnbWrap.css({
			'transform':'translate(-100%, 0)',
			'transition':'transform .6s ease'
		});
	});
}

$(document).on('click', '.gnbChampMask', function() {//딤 마스크 영역 클릭시 메뉴 닫기
	$('.gnbChampClose').trigger('click');
});

/**********************************************************
	상단 검색
**********************************************************/
var topSearchFnc = function() {
	var btnSearch = $('#header .btnSearch');
	var searchWrap = $('.topSearchWrap');
	var btnClose = $('.btnSearchClose', searchWrap);
	
	btnSearch.click(function() {
		console.log('검색영역 오픈');
		searchWrap.show();
	});
	btnClose.click(function() {
		console.log('검색영역 오픈');
		searchWrap.hide();
	});
} 

/**********************************************************
	상단 슬라이드 공지사항
**********************************************************/
var topNotiSlideFnc = function() {
	var wrapper = $('.topNotiWrap');
	var slideWrap = $('.notiList', wrapper);
	
	var calcItemW = function() {
		var slideItem = $('.swiper-slide', slideWrap);
		var slideW = slideWrap.width();
		$('a', slideItem).css({'width' : winW - 80});
	}

	var slideLib = new Swiper(slideWrap, {
		loop : true,
		autoplay : 5000,
		pagination : '.topNotiWrap .paging',
		paginationType : 'custom',
		onTransitionStart : function(swiper) {
			swiper.stopAutoplay()
		},
		onTransitionEnd : function(swiper) {
			swiper.startAutoplay();
		},
		paginationCustomRender : function(swiper, current, total) {
			return '<span>' +current + '</span> / ' + total;
		}
	});

	calcItemW();
	slideLib.update(true);

	$(window).resize(function() {
		calcItemW();
		slideLib.update(true);
	});
}

/**********************************************************
	header category list navi
**********************************************************/
var headCateNaviFnc = function() {
	var wrapper = $('#header .headCateNav');
	var navWrap = $('.headCateInner', wrapper);

	var calcItemW = function() {
		var slideItem = $('.swiper-slide', navWrap);
		var _totalW = 0;
		$('a', slideItem).each(function(i) {
			var _this = $(this);
			var _thisW = _this.outerWidth();
			var _parent = _this.parent();
			_parent.css({'width' : _thisW + 20});
			_totalW += (_thisW + 20);
		});
		$(' > ul', navWrap).css({'width' : _totalW});
	}

	var slideLib = new Swiper(navWrap, {
		freeMode: true,
		slidesPerView : 'auto'
	});

	setTimeout(function() {
		calcItemW();
		slideLib.update(true);
	}, 100)

}

/**********************************************************
	main 
**********************************************************/
/* ranking - navi */
var mainRankNavFnc = function() {
	var wrapper = $('.rankMain .rankNav');
	var navWrap = $('.rankNavList', wrapper);
//	var slideLib;
	var _totalW = 0;
	var isChangeW = false;
	
	var calcItemW = function() {
		var slideItem = $('.swiper-slide', wrapper);
	
		$('button', slideItem).each(function(i) {
			var _this = $(this);
			var _thisW = _this.outerWidth();
			var _parent = _this.parent();
			_parent.css({'width' : _thisW + 24});
			_totalW += (_thisW + 24);
		});
		$(' > ul', navWrap).css({'width' : _totalW});
	}

	var slideLib = new Swiper(navWrap, {
		freeMode: true,
		slidesPerView : 'auto'
	});

//	var init = function() {
//		winW = $(window).width();
//		var wrapW = winW - 40;
//
//		if(_totalW > wrapW) {
//			if(!isChangeW) {
//				isChangeW = true;
//				slideLib = new Swiper(navWrap, {
//					freeMode: true,
//					slidesPerView : 'auto'
//				});
//			}else{
//				slideLib.update(true);
//			}
//		}else{
//			if(isChangeW) {
//				isChangeW = false;
//				console.log('destroy');
//				slideLib.slideTo(0, 0);
//				slideLib.destroy();
//				// slideLib = undefined;
//				// slideLib.update(true);
//			}
//		}
//	}

	setTimeout(function() {
		calcItemW();
		slideLib.update(true);
	}, 100);
}

/* ranking - slide */
var mainRankingFnc = function(target) {
	var wrapper = $(target);
	var slideWrap = $('.swiperCmpt', wrapper);
	var slideItem = $('.swiper-slide', slideWrap);
	var slideCount = slideItem.length;

	if(slideCount == 0) {return;}//스와이프 아이템이 없을경우 아래 내용 실행하지 않음

	slideWrap.append('<div class="scrollbarWrap" style="display:none;"></div>');

	var calcItemW = function() {
		var slideWrapW = slideWrap.outerWidth();
		var totalW = 113 * (slideCount - 1);
		totalW += 109;
		slideItem.parent().css({'width' : totalW});
		if(totalW >= slideWrapW) {
			$('.scrollbarWrap', slideWrap).show();
		}else{
			$('.scrollbarWrap', slideWrap).hide();
			slideLib.destroy();
		}
	}

	var slideLib = new Swiper(slideWrap, {
		slidesPerView : 'auto',
		freeMode : true,
		scrollbarHide : false,
		scrollbar : '.scrollbarWrap'
	});

	setTimeout(function() {
		calcItemW();
		slideLib.update(true);
	}, 100);
	
	return {
		update : function() {
			calcItemW();
			slideLib.update(true);
		}
	}
}

/* Magazine - slide */
var mainMagazineFnc = function() {
	var wrapper = $('.magazineMain');
	var slideWrap = $('.swiperCmpt', wrapper);

	$('.swiper-wrapper', slideWrap).after('<div class="swiper-indecate"></div>');
	var slideLib = new Swiper(slideWrap, {
		onInit : function(swiper) {
			if(swiper.slides.length <= 1) {
				$('.swiper-prev', wrapper).hide();
				$('.swiper-next', wrapper).hide();
				$('.magazineMain .swiper-indecate').hide();
				swiper.detachEvents();
			}
		},
		pagination : '.magazineMain .swiper-indecate',
		paginationType : 'bullets'
	});

	$('.swiper-prev', wrapper).click(function() {
		slideLib.slidePrev();
	});
	$('.swiper-next', wrapper).click(function() {
		slideLib.slideNext();
	});
}

/* Promotion - slide */
var promoSlideFnc = function() {
	var wrapper = $('.promoSlideMain');
	var slideWrap = $('.swiperCmpt', wrapper);

	var slideLib = new Swiper(slideWrap, {
		loop:true,
		onInit : function(swiper) {
			// var realIndex = $('.swiper-slide', slideWrap).eq(swiper.activeIndex).data('swiper-slide-index');
			// console.log(realIndex);
			if(swiper.slides.length <= 1) {
				$('.swiper-prev', wrapper).hide();
				$('.swiper-next', wrapper).hide();
				swiper.detachEvents();
			}
			slideWrap.css({'height' : $('.swiper-slide', slideWrap).eq(swiper.activeIndex).outerHeight()});
		},
		onTransitionStart : function(swiper) {
			var realIndex = $('.swiper-slide', slideWrap).eq(swiper.activeIndex).data('swiper-slide-index');
			console.log(realIndex);
			slideWrap.css({'height' : $('.swiper-slide', slideWrap).eq(swiper.activeIndex).outerHeight()});
		}
	});

	$('.swiper-prev', wrapper).click(function() {
		slideLib.slidePrev();
	});
	$('.swiper-next', wrapper).click(function() {
		slideLib.slideNext();
	});
}

/* insta SNS - slide */
var mainInstaFnc = function() {
	var wrapper = $('.instaMain');
	var slideWrap = $('.swiperCmpt', wrapper);
	var slideItem = $('.swiper-slide', slideWrap);
	var slideCount = slideItem.length;

	if(slideCount == 0) {return;}//스와이프 아이템이 없을경우 아래 내용 실행하지 않음

	slideWrap.append('<div class="scrollbarWrap" style="display:none;"></div>');

	var calcItemW = function() {
		var slideWrapW = slideWrap.outerWidth();
		var totalW = 170 * (slideCount - 1);
		totalW += 165;
		slideItem.parent().css({'width' : totalW});
		if(totalW >= slideWrapW) {
			$('.scrollbarWrap', slideWrap).show();
		}else{
			$('.scrollbarWrap', slideWrap).hide();
			slideLib.destroy();
		}
	}

	var slideLib = new Swiper(slideWrap, {
		slidesPerView : 'auto',
		freeMode : true,
		scrollbarHide : false,
		scrollbar : '.scrollbarWrap'
	});

	setTimeout(function() {
		calcItemW();
		slideLib.update(true);
	}, 100);
}

/* 메인 레이어팝업 배너 슬라이드 */
var mainPopSlide = function() {
	var mainLayerCont = $('.layerWrap .mainLayerCont')
	var swiperWrap = $('.popSlideBox', mainLayerCont);
	var swiperItemLength = $('.swiper-slide', swiperWrap).length;
	var btnPrev = $('.btnPrev', mainLayerCont);
	var btnNext = $('.btnNext', mainLayerCont);
	var btnPlay = $('.btnPlay', mainLayerCont);
	var btnStop = $('.btnStop', mainLayerCont);
	var optLoop = true;
	var isTouchSwipe = true; 
	
	if(swiperItemLength < 2) {
		$('.ctrlBox', mainLayerCont).hide();
		optLoop = false;
		isTouchSwipe = false;
	}
	
	var slideLib = new Swiper(swiperWrap, {
		loop : optLoop,
		followFinger : isTouchSwipe,
		autoplay : 5000,
		pagination : '.mainLayerCont .paging',
		paginationType : 'custom',
		onTransitionStart : function(swiper) {
			swiper.stopAutoplay()
		},
		onTransitionEnd : function(swiper) {
			swiper.startAutoplay();
		},
		paginationCustomRender : function(swiper, current, total) {
			return '<span>' +current + '</span> / ' + total;
		}
	});
	
	btnPrev.on('click', function() {
		slideLib.slidePrev();
	});
	btnNext.on('click', function() {
		slideLib.slideNext();
	});
	
	btnPlay.on('click', function() {
		$(this).hide();
		btnStop.show();
		slideLib.startAutoplay();
	});
	btnStop.on('click', function() {
		$(this).hide();
		btnPlay.show();
		slideLib.stopAutoplay();
	});
}

/**********************************************************
	category filter area 
**********************************************************/
/* 리스트 상단 카테고리 2뎁스 선택영역 */
var categoryNavFnc = function() {
	var cateWrapper = $('.cateViewWrap');
	var btnCate = $('.btnCateNav', cateWrapper);
	var btnGnb = $('button', btnCate);
	var cateNavLayer = $('.cateNavLayer', cateWrapper)
	var gnbWrap = $('.champGnb');
	
	btnCate.click(function(e) {
		if(cateWrapper.hasClass('activeCateNav')) return;
		e.stopPropagation();
		cateWrapper.css({'height' : cateWrapper.outerHeight()}).addClass('activeCateNav').prepend('<div class="cateNavMask"></div>');
		cateNavLayer.slideDown();
		
		$(document).one('click', function() {
			cateWrapper.css({'height' : 'auto'}).removeClass('activeCateNav');
			$('.cateNavMask', cateWrapper).remove();
			cateNavLayer.hide();
		});
	});
	
	btnGnb.click(function(e) {e.stopPropagation();
		var menuTxt = $(this).text();
		if(cateWrapper.hasClass('activeCateNav')) {//카테고리 2뎁스 영역이 열려 있을경우 실행
			/*console.log('2depth open');*/
			cateWrapper.css({'height' : 'auto'}).removeClass('activeCateNav');
			$('.cateNavMask', cateWrapper).remove();
			cateNavLayer.hide();
		}

		$('.gnbList > li', gnbWrap).removeClass('active');
		$('.gnbList > li > a', gnbWrap).each(function(i) {
			console.log(i);
			var _this = $(this);
			var _thisTxt = _this.text();
			

			if(_thisTxt === menuTxt) {
				_this.parent().addClass('active');
			}
		});
		gnbWrap.before('<div class="gnbChampMask"></div>');
		gnbWrap.css({
			'transform':'translate(0, 0)',
			'transition':'transform .6s ease'
		});
	});
	
}

/* 리스트 상단 카테고리 상세 필터 선택영역 상단 고정 */
var cateTopFixedFn = function() {
	var headerH;
	var slctItemOffsetT;
	var cateWrapper = $('.cateViewWrap');
	var slctItemView = $('.slctItemView', cateWrapper);
	
	setTimeout(function() {
		headerH = $('header').outerHeight();
		slctItemOffsetT = slctItemView.offset().top;
	}, 100);
	

	$(window).scroll(function() {
		winST = $(window).scrollTop();
		
		if(slctItemOffsetT - headerH <= winST) {
			slctItemView.addClass('fixed');
		}else{
			slctItemView.removeClass('fixed');
		}
	});
	
	return {
		reCalcST : function() {
			slctItemOffsetT = slctItemView.offset().top;
		}
	}
}

/* 리스트 상단 카테고리 상세 필터 선택아이템 */
var filterSelectedItemFnc = function() {
	var wrapper = $('.slctItemViewWrap');
	var navWrap = $('.innerBox', wrapper);

	var calcItemW = function() {
		var slideItem = $('.swiper-slide', navWrap);
		var _totalW = 0;
		$('em', slideItem).each(function(i) {
			var _this = $(this);
			var _thisW = _this.outerWidth();
			var _parent = _this.parent();
			_parent.css({'width' : _thisW});
			_totalW += _thisW;
		});
		$(' > ul', navWrap).css({'width' : _totalW});
		
		if(wrapper.outerWidth() >= _totalW) {
			slideLib.detachEvents();
		}else{
			slideLib.attachEvents();
		}
	}

	var slideLib = new Swiper(navWrap, {
		freeMode: true,
		slidesPerView : 'auto'
	});
	
	$(document).on('click', '.slctItemViewWrap button', function() {
		console.log('del item');
	});

	setTimeout(function() {
		calcItemW();
		slideLib.update(true);
	}, 100)
	
	return {
		reClacWrap : function() {
			$(' > ul', navWrap).css({'width' : 'auto'}).find('li').css({'width' : 'auto'});
			calcItemW();
			slideLib.update(true);
		}
	}
}

var deatilFilterFnc = function() {
	var wrapper = $('.deatilFilterWrap');
	var btnClose = $('.detailFilterClose', wrapper);
	var btnFilter = $('.cateViewWrap .btnFilter');
	
	btnFilter.click(function() {
		wrapper.before('<div class="filterChampMask"></div>');
		$('.filterChampMask').one('click', function() {
			btnClose.trigger('click');
		});
		wrapper.css({
			'transform':'translate(0, 0)',
			'transition':'transform .6s ease'
		});
	});

	btnClose.click(function() {
		$('.filterChampMask').remove().unbind('click');
		wrapper.css({
			'transform':'translate(-100%, 0)',
			'transition':'transform .6s ease'
		});
	});
	
}

/**********************************************************
	SUB PAGE category navi
**********************************************************/
var pageCateNavFn = function(target) {
	var wrapper = $(target);
	var _totalW = 0;
	
	var calcItemW = function() {
		var slideItem = $('.swiper-slide', wrapper);
	
		$('a', slideItem).each(function(i) {
			var _this = $(this);
			var _thisW = _this.outerWidth();
			var _parent = _this.parent();
			_parent.css({'width' : _thisW + 24});
			_totalW += (_thisW + 24);
		});
		$(' > ul', wrapper).css({'width' : _totalW});
	}
	
	var slideLib = new Swiper(wrapper, {
		freeMode: true,
		slidesPerView : 'auto',
		onInit : function(swiper) {
			console.log('init');
		}
	});
	
	setTimeout(function() {
		calcItemW();
		slideLib.update(true);
		
		if(_totalW <= wrapper.outerWidth()) {
			slideLib.lockSwipes();
		}
	}, 100);
}

/**********************************************************
	LINE promotion slide list
**********************************************************/
var pmtSlideFnc = function(target, options) {
	var options = options || {};
	var wrapper = $(target);
	var slideWrap = $('.swiperCmpt', wrapper);
	var slideItem = $('.swiper-slide', slideWrap);
	var slideCount = slideItem.length;
	var itemSlidesPerView = options.slidesPerView || 'auto';
	var itemSpaceBetween = options.spaceBetween || 0;
	var itemFreeMode = options.freeMode || 'true';

	if(slideCount == 0) {return;}//스와이프 아이템이 없을경우 아래 내용 실행하지 않음

	slideWrap.append('<div class="scrollbarWrap" style="display:none;"></div>');

	var calcItemW = function() {
		var slideWrapW = slideWrap.outerWidth();
		var totalW = 113 * (slideCount - 1);
		totalW += 109;
		slideItem.parent().css({'width' : totalW});
		if(totalW >= slideWrapW) {
			$('.scrollbarWrap', slideWrap).show();
		}else{
			$('.scrollbarWrap', slideWrap).hide();
			slideLib.destroy();
		}
	}

	var slideLib = new Swiper(slideWrap, {
		slidesPerView : itemSlidesPerView,
		spaceBetween : itemSpaceBetween || 0,
		freeMode : true,
		scrollbarHide : false,
		scrollbar : '.scrollbarWrap'
	});

	if(itemSlidesPerView === 'auto') {
		setTimeout(function() {
			calcItemW();
			slideLib.update(true);
		}, 100);
	}
	
}

/**********************************************************
	page tab text v-align
**********************************************************/
var pageTabWrapFn = function(target) {
	console.log('pageTabWrapFn');
	var wrapper = $(target);
	var item = $('li',wrapper);
	var textItem = $('> a', item);
	var checkH = 0;
	textItem.each(function() {
		var _this = $(this);
		checkH = Math.max(_this.outerHeight(), checkH);
	});
	console.log('checkH = ', Math.abs(checkH));
	item.css({
		'height' : Math.abs(checkH)
	});
}

/**********************************************************
	layer popup function
**********************************************************/
var layerOpenFn = function(target) {
	var target = $(target);
	var winW = $(window).width();
	var winH = $(window).height();
	var tW = target.outerWidth();
	var tH = target.outerHeight();
	var posX = (winW - tW) / 2 >= 0 ? (winW - tW) / 2 : 0;
	var posY = (winH - tH) / 2 >= 0 ? (winH - tH) / 2 : 0;
	
	
	target.before('<div class="layerMask"></div>');
	target.show();
	/*target.css({
		'top' : posY,
		'left' : posX
	}).show();*/
}

var layerCloseFn = function(target) {
	var target = $(target);
	target.prev().remove();
	target.hide();
}

