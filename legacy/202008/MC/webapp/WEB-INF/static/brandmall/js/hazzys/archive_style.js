$(window).on('load', function() {
	if($('.archiveTabWrap').length) archiveSubTab('.archiveTabWrap');
});
// IMAGE GET SIZE FUNCTION
var archiveImgLoadedFn = function(target) {
	var target = $(target);
	var w = target.outerWidth();
	var h = target.outerHeight();
	var ratio = h / w;
	target.parent().css({'opacity' : '1'});
	if(ratio > 1) {
		target.parent().addClass('verti');
	}else{
		target.parent().addClass('horiz');
	}
}

// ARCHIVE TAB SCRIPT
var archiveSubTab = function(target) {
	var wrap = $(target);
	var swiperWrap = $('.swiper-wrapper', wrap);
	var swipeItem = $('.swiper-slide', swiperWrap);
	var swiperW = 0;
	var swiperLib;

	var calcWrapperSize = function() {
		for(var i = 0; i < swipeItem.length; i++) {
			var thisItemW = swipeItem.eq(i).outerWidth();
			swiperW += Math.ceil(thisItemW);
		}
		return swiperW+2;
	}

	swiperLib = new Swiper(wrap, {
		freeMode: true,
		slidesPerView : 'auto',
		onInit : function(swiper) {
			var wrapperSize = calcWrapperSize();
			var activeMenuIdx = $('.swiper-slide.active', swiperWrap).index();
			swiperWrap.css({'width' : wrapperSize});
			swiper.update();
			if($(swiper.container).outerWidth() >= wrapperSize) {
				swiper.detachEvents();
			}
			swiper.slideTo(activeMenuIdx, 1);
		}
	});
}

// SWIPERJS FUNCTION
var swiperLib = function(target, options) {
	var wrap = $(target);
	var swipeWrap = $('.swiper-wrapper', wrap);
	var swipeItem = $('.swiper-slide', swipeWrap);
	var opt = options || {}

	var libFnc = new Swiper(wrap, opt);
}

/* CREATE POPUP FUNCTION */
var achiveLayerOpenFn = function(t, k, callbak) {
	var target;
	var className = t;
	var data = archiveLayerInfo[k];
	var winH = $(window).height();
	var winST = $(window).scrollTop();
	var html = '';
	var callbakFn = callbak || {}
	
//	console.log('k = ', k);
//	console.log('data = ', data);

	html += '<div class="archive-layer-mask"></div>';
	html += '<div class=" ' + className + '">';
	html += '<div class="layer-header">' + data['title'] + '</div>';
	html += '<div class="layer-content">';
	html += '<div class="layer-swiper">';
	html += '<div class="customSwiper">';
	html += '<button type="button" class="swipePrev"><span>이전</span></button>';
	html += '<ul class="swiper-wrapper">';
	for(var i = 0; i < data['image'].length; i++){
		html += '<div class="swiper-slide"><span class="img"><img src="../../../webapp/WEB-INF/static/brandmall/images/hazzys/archive/' +  data['image'][i] + '" alt=""  onload="archiveImgLoadedFn(this);" /></span></div>';
	}
	html += '</ul>';
	html += '<button type="button" class="swipeNext"><span>다음</span></button>';
	html += '</div>';

	if(data['desc'] || data['playground-desc']) {
		html += '<div class="archive-layer-desc">';
		html +=  data['desc'] || data['playground-desc'][0];
		html += '</div>';
	}
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="btn-layer-close"><span></span></button>'
	html += '</div>';

	$('body').append(html);
	
	target = $('.'+className);

	var swiperLib = new Swiper($('.customSwiper', target), {
		loop : true,
		onInit : function(swiper) {
			$('.swiper-wrapper', target).css({
				'width' : swiper.virtualSize
			});
		},
		onTransitionEnd : function(swiper) {
			var realIdx = $('.swiper-wrapper .swiper-slide', target).eq(swiper.activeIndex).data('swiper-slide-index');

			if(callbakFn.transitionend) {callbakFn.transitionend(realIdx, data);}
		}
	});
	
	$('.btn-layer-close', target).one('click', function() {
		$('.archive-layer-mask').remove();
		target.remove();
	});

	target.css({'max-height' : $(window).height()});
}


