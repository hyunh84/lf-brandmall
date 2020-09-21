var globalGnb;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {
	gnbFnc();
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

/**********************************************************
	swiper
**********************************************************/
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
	var cateLink = $('a', target);
	var totalW = 0;

	cateLink.each(function() {
		var _this = $(this);
		var w = Math.ceil(_this.outerWidth()) + 4;
		_this.parent().css({'width' : w});
		totalW += w;
	});

	var swiperLib = new Swiper(targetEl, {
		freeMode : true,
		slidesPerView : 'auto',
		onInit : function(swiper) {
			var isLockSwipe = targetEl.outerWidth() >= totalW ? true : false;
			if(isLockSwipe) {swiper.lockSwipes();}
			swiper.update();
		}
	});

	return {
		slideTo : function(idx) {
			swiperLib.slideTo(idx, 1)
		},
		update : function(bool) {
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