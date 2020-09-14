/* 팝업띄우는 이벤트 */
// culture
$(document).on('click', '.archive-list-wrap a', function(e) {e.preventDefault();
	var _this = $(this);
	var _targetKey = _this.data('layer-key');
	achiveLayerOpenFn('archive-layer-wrap', _targetKey);
});

// history
$(document).on('click', '[class^="history-aritcle-box"] .history-visual button', function() {
	var _this = $(this);
	var _targetKey = _this.data('layer-key');
	achiveLayerOpenFn('archive-layer-wrap', _targetKey);
});
$(document).on('click', '.history-banner-box', function(e) {e.preventDefault();
	var _this = $(this);
	var _targetKey = _this.data('layer-key');
	achiveLayerOpenFn('archive-layer-wrap', _targetKey);
});

// playground
$(document).on('click', '.playground-images a', function(e) {e.preventDefault();
	var _this = $(this);
	var _targetKey = _this.data('layer-key');
	achiveLayerOpenFn('archive-layer-wrap', _targetKey, {
		'transitionend' : function(i, data) {
			console.log('index = ', i);
			console.log(data['playground-desc'][i]);
			$('.archive-layer-desc').text(data['playground-desc'][i]);
		}
	});
});

/* 패션 콜라보 - 팝업닫기 이벤트 */
$(document).on('click', '.archive-layer-mask', function() {
	achiveLayerCloseFn();
});

/*이미지 체크*/
var archiveImgLoadedFn = function(t) {
	var _target = $(t);
	var _targetBox = _target.parent();
	var width = _target.outerWidth();
	var height = _target.outerHeight();
	var sizeRatio = height / width;

	if(sizeRatio > 1) {
		_targetBox.addClass('verti');
	}else{
		_targetBox.addClass('horiz');
	}
}

/* 팝업생성 함수 */
var achiveLayerOpenFn = function(t, k, callbak) {
	var target;
	var className = t;
	var data = archiveLayerInfo[k];
	var winH = $(window).height();
	var winST = $(window).scrollTop();
	var html = '';
	var callbakFn = callbak || {}

	html += '<div class="archive-layer-mask"></div>';
	html += '<div class=" ' + className + ' ">';
	html += '<div class="layer-header">' + data['title'] + '</div>';
	html += '<div class="layer-content">';
	html += '<div class="archive-slide-wrap02">';
	html += '<button type="button" class="swipePrev"><span>이전</span></button>';
	html += '<div class="swipeCmpt">';
	for(var i = 0; i < data['image'].length; i++){
		html += '<div class="swipeItem"><span class="img"><img src="../../../webapp/WEB-INF/static/brandmall/images/hazzys/archive/' +  data['image'][i] + '" alt=""  onload="archiveImgLoadedFn(this);" /></span></div>';
	}
	html += '</div>';
	html += '<button type="button" class="swipeNext"><span>다음</span></button>';
	html += '</div>';
	if(data['desc'] || data['playground-desc']) {
		html += '<div class="archive-layer-desc">';
		html +=  data['desc'] || data['playground-desc'][0];
		html += '</div>';
	}
	html += '</div>';
	html += '</div>';

	$('body').append(html);
	
	target = $('.'+className);
	$('.swipeCmpt', target).slick({
		initialSlide : 0,
		swipe : false,
		prevArrow : $('.swipePrev', target),
		nextArrow : $('.swipeNext', target)
	});
	
	$('.swipeCmpt', target).on({
		'afterChange' : function(event, slick) {
			if(callbakFn.transitionend) {callbakFn.transitionend(slick.currentSlide, data);}
		}
	});

	var posY = (winH - target.outerHeight()) / 2 < 0 ? winST : (winH - target.outerHeight()) / 2 + winST;
	target.css({'top' : posY});
}

/* 팝업삭제 함수 */
var achiveLayerCloseFn = function(target) {
	$('.archive-layer-mask').remove();
	$('.archive-layer-wrap').remove();
}

/*하단 스크롤 이미지 함수*/
var archiveSlideLib = function(target, options) {
	var options = options || {};
	var movDis = 150;
	var isTransiting = false;
	var moveBanner = $(target);
	var moveContainer = $('.slide-wrapper', moveBanner);
	var moveItem = $('.slide-item', moveContainer);
	var diffWidth = 0;
	var moveStartX = 0;
	var moveEndX;
	var scrollWrap;
	var scrollItem;
	var diffPer;
	var scrollBlock = options.scrollBlock || false;

	moveBanner.append('<div class="scroll-bar-wrap"><span></span></div>');
	moveContainer.css("width", moveItem.eq(0).outerWidth() * moveItem.length);
	moveEndX = (moveItem.eq(0).outerWidth() * moveItem.length) - moveBanner.outerWidth();
	scrollWrap = $('.scroll-bar-wrap', moveBanner);
	scrollItem = $('span', scrollWrap);
	diffPer = scrollWrap.outerWidth() / (moveItem.eq(0).outerWidth() * moveItem.length);
	scrollItem.css({'width' : (moveBanner.outerWidth() * diffPer)});
	
	if(options && options.slidePerView > 0) {
		movDis = moveItem.outerWidth() * options.slidePerView;
	}

	var transitionFn = function(diff) {
		moveContainer.css({
			'transition-property' : 'left',
			'transition-duration' : '0.6s',
			'transition-timing-function' : options.slidePerView ? 'ease' : 'linear',
			'left' : -1*diff
		});
		scrollItem.css({
			'transition-property' : 'left',
			'transition-duration' : '0.6s',
			'transition-timing-function' : options.slidePerView ? 'ease' : 'linear',
			'left' : diff*diffPer
		});

		if(options.slidePerView) {
			if(diff <= 0 || diff >= moveEndX) {
				isTransiting = false;
			}
		}
	}

	moveContainer.on('transitionend', function() {
		if(options.slidePerView) isTransiting = false;
	});

	if(!scrollBlock) {
		moveBanner.on('mousewheel DOMMouseScroll', function(e) {
			e.preventDefault();
			if(isTransiting) return;
			if(options.slidePerView) isTransiting = true;
			var originEvent = e.originalEvent;
			var wheelDelta;
			
			if(originEvent.wheelDelta) {
				wheelDelta = originEvent.wheelDelta / 120;
			}else{
				wheelDelta = originEvent.detail / -3;
			}
			
//			if((moveEndX <= diffWidth && wheelDelta < 0 ) || (diffWidth <= 0 && wheelDelta > 0)) return;
			if(wheelDelta < 0) {//next
				diffWidth = diffWidth + movDis > moveEndX ? moveEndX : diffWidth + movDis;
			}else if(wheelDelta > 0){//prev
				diffWidth = diffWidth - movDis < 0 ? 0 : diffWidth - movDis;
			}
			
			transitionFn(diffWidth);
		});
	}
	
	$(window).resize(function() {
		if(options && options.slidePerView > 0) {
			movDis = moveItem.eq(0).outerWidth() * options.slidePerView;
		}
		moveContainer.css("width", moveItem.eq(0).outerWidth() * moveItem.length);
		moveEndX = (moveItem.eq(0).outerWidth() * moveItem.length) - moveBanner.outerWidth();
		diffPer = scrollWrap.outerWidth() / (moveItem.eq(0).outerWidth() * moveItem.length);
		scrollItem.css({'width' : (moveBanner.outerWidth() * diffPer)});
		transitionFn(diffWidth);
	});

	return {
		'goPrev' : function() {
			diffWidth = diffWidth - movDis < 0 ? 0 : diffWidth - movDis;

			transitionFn(diffWidth);
		},
		'goNext' : function() {
			diffWidth = diffWidth + movDis > moveEndX ? moveEndX : diffWidth + movDis;

			transitionFn(diffWidth);
		}
	}
}

















