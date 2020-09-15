var globalGnb;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

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