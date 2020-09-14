var globalGnb;
/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {


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