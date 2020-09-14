/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

	gnbFn();

	if($('.main_area .monthRecomBox').length) {
		$('.main_area .monthRecomBox .thumCol button').click(function() {
			var _this = $(this);
			var imgUrl = $('img', _this).attr('src');
			var html = '';
			html += '<article class="layerThumbWrap" style="display:block;">';
			html += '<div class="imgCase">';
			html += '<img src="' + imgUrl + '" alt="">';
			html += '</div>';
			html += '<button class="closeThumb"><em>닫기</em></button>';
			html += '</article>';

			layerScrollT = $(window).scrollTop();

			$('#wrap').addClass('pop');
			$('body').before('<div class="layerMask"></div>');
			$('body').append(html);

			$('.layerThumbWrap .closeThumb, .layerMask').click(function() {
				$('#wrap').removeClass('pop');
				$('.layerMask').remove();
				$('.layerThumbWrap').remove();
				$('html, body').animate({scrollTop : layerScrollT}, 1);
			});
		});
	}

});

/**********************************************************
	COMMON
**********************************************************/
var gnbFn = function() {
	var gnbWrapper = $('.maestroGnbWrap');
	var depthItem01 = $('.gnbList > ul > li > a', gnbWrapper);
	var gnbDepth02 = $('.subDepth02');
	var gnbOpen = $('#header .btnOpenGnb');
	var gnbClose = $('.closeGnb', gnbWrapper);
	// openGnb

	gnbOpen.click(function() {
		if($('#header').hasClass('openGnb')) {
			gnbWrapper.css({
				'left' : '-100%'
			})
			$('#header').removeClass('openGnb');
			depthItem01.parent().removeClass('active');
			gnbDepth02.slideUp();
		}else{
			gnbWrapper.css({
				'left' : 0
			})
			$('#header').addClass('openGnb');
		}
	});

	depthItem01.click(function(e) {e.preventDefault();
		var _this = $(this);

		if(_this.next().is(':hidden')) {
			depthItem01.parent().removeClass('active');
			_this.parent().addClass('active');
			gnbDepth02.slideUp();
			_this.next().slideDown();
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
	$('.maestroGnbWrap').css({'top' : header.outerHeight()});
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
		speed : 600,
		autoplayDisableOnInteraction : false,
		loop : true,
		pagination : target+' .swiper-pagination',
		paginationClickable: true,
		paginationBulletRender : function (index, className) {
			return '<span class=" ' +className+  ' "><em>' + (index + 1) + '</em></span>';
		},
		onInit : function(swiper) {
			var itemTotal = slideItem.length;
			if(itemTotal < 2 && !swiper.loop || itemTotal < 3 && swiper.loop) {
				console.log('total 1');
				swiper.stopAutoplay();
				swiper.lockSwipes();
				if($('.swiper-prev', targetEl).length)$('.swiper-prev', targetEl).hide();
				if($('.swiper-next', targetEl).length)$('.swiper-next', targetEl).hide();
				if($('.swiper-pagination', targetEl).length)$('.swiper-pagination', targetEl).hide();
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