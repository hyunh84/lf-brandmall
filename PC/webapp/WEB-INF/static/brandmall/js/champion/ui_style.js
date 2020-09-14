/**********************************************************
	ul gloal var
**********************************************************/
var winW = $(window).width();//윈도우 width

$(window).resize(function() {
	winW = $(window).width();
});

/**********************************************************
	document ready
**********************************************************/
$(document).ready(function() {

	if($('.gnb').length) {
		gnbFnc();
	}

	if($('.topNotiWrap').length) {
		topNotiSlideFnc();
	}

	if($('.magazineMain').length) {
		mainMagazineFnc();
	}
	
	if($('.recomPrdWrap02').length) {
		responsiveRecomSlide();
	}

});

/* 디자인 체크박스 */
$(document).on('click', '.chkItem input[type=checkbox]', function() {
	var _this = $(this);
	var _isCheck = _this.prop('checked');

	console.log('_isCheck = ', _isCheck);
	if(_isCheck) {
		_this.parent().addClass('checked');
	}else{
		_this.parent().removeClass('checked');
	}
});

/* 디자인 셀렉트박스 */
$(document).on('click', '[class^="selectWrap"] > button', function(e) {
	e.stopPropagation();
	var _btnSort = $(this);
	var _selectWrap = _btnSort.parent();
	var _optList = $('.optList', _selectWrap);
	
	if(_btnSort.next().is(':hidden')) {
		_btnSort.next().show();
	}else{
		_btnSort.next().hide();
	}
	
	$('a', _optList).one('click', function() {
		var _optItem = $(this);
		var _val = _optItem.text();
		
		if(!_optItem.parent().hasClass('selected')) {
			$('li', _optList).removeClass('selected');
			_optItem.parent().addClass('selected');
			_btnSort.text(_val);
		}
		_btnSort.next().hide();
	});
	
	$(document).one('click', function() {
		_btnSort.next().hide();
	});
});

/* 상단으로가기 */
$(document).on('click', '.btnGoTop', function() {
	console.log('go top');
	$('html, body').animate({scrollTop : 0}, 500);
});

/**********************************************************
	GNB
**********************************************************/
var gnbFnc = function() {
	var gnbWrap = $('.gnb');
	var subGnb = $('.subGnb', gnbWrap);
	var subItem = $(' > ul > li', subGnb);
	var subGnbH = subGnb.outerHeight() - 140;
	
	subItem.css({'height' : subGnbH});
	
	gnbWrap.mouseenter(function() {
		subGnb.slideDown();
	}).mouseleave(function() {
		subGnb.hide();
	});
	
}

/**********************************************************
	검색
**********************************************************/
var topSearchFnc = function(options) {
	var options = options || {};
	var btnSearch = $('.btnSearch');
	var topSearchWrap = $('.topSearchWrap');
	var recomPrdList = $('.recomPrdList');
	var recomPrdInner = $('> ul', recomPrdList);
	var recomW;
	var nowPos = 0;
	var gap;
	
	var calcRecomFn = function() {
		recomW = recomPrdList.outerWidth();
		gap = (1150 - recomW);

		if(recomW >= 1150) {
			$('.swipePrev, .swipeNext', recomPrdList).hide();
		}else{
			$('.swipePrev, .swipeNext', recomPrdList).show();
		}
	}
	
	var aniSlideFn = function(m, g, s) {
		recomPrdInner.css({
			'transform' : 'translate(' + m + 'px,0)',
			'transition-duration' : s || '.6s'
		});

		$('.swipePrev', recomPrdList).removeClass('disabled');
		$('.swipeNext', recomPrdList).removeClass('disabled');
		if(m === 0) {
			$('.swipePrev', recomPrdList).addClass('disabled');
		}else if(Math.abs(m) === g) {
			$('.swipeNext', recomPrdList).addClass('disabled');
		}
	}
	
	var movFn = function(dir) {
		if(dir === '-') {//prev
			nowPos = nowPos + 232 > 0 ? 0 : nowPos + 232;
			aniSlideFn(nowPos, gap);
		}else if(dir === '+'){//next
			nowPos = nowPos - 232 < -gap ? -gap : nowPos - 232;
			aniSlideFn(nowPos, gap);
		}
	}
	
	var resizeBoxFn = function() {
		recomW = recomPrdList.outerWidth();
		gap = (1150 - recomW);
		var chGap = Math.abs(nowPos) - gap;
		var resizePos = chGap <= 0 ? nowPos : nowPos + chGap;

		nowPos = resizePos;
		aniSlideFn(resizePos, gap, '.1s');
	}
	
	var resetPos = function() {
		nowPos = 0;
		aniSlideFn(nowPos, gap, '.1s');
	}

	recomPrdList.prepend('<button class="swipePrev disabled"><span>이전</span></button>').append('<button class="swipeNext"><span>다음</span></button>');

	/* 검색영역 오픈 */
	topSearchWrap.click(function(e) {e.stopPropagation();});//돔 클릭함수 팝업내부 요소 클릭시 해제
	btnSearch.click(function(e) {e.stopPropagation();e.preventDefault();
		if(options.openSearchCall){options.openSearchCall();}
		if(topSearchWrap.is(':hidden')) {
			topSearchWrap.show();
//			calcRecomFn();
			$('.searchIptBox input',topSearchWrap).focus();
			
			$(document).one('click', function() {//돔 클릭시 팝업 닫기
				topSearchWrap.hide();
				resetPos();
			});
		}else{
			topSearchWrap.hide();
			resetPos();
		}
	});

	/* 추천상품 슬라이 버튼 */
	$('.swipePrev', recomPrdList).click(function() {
		if($(this).hasClass('disabled')) return;
		movFn('-');
	});

	$('.swipeNext', recomPrdList).click(function() {
		if($(this).hasClass('disabled')) return;
		movFn('+');
	});

	$(window).resize(function() {
		//윈도우 리사이즈시 검색 팝업내 추천상품 좌우슬라이버튼 노출여부
		if(topSearchWrap.is(':visible')) {
			calcRecomFn();
			resizeBoxFn();
		}
	});
	
	/* 검색어 입력박스 삭제 버튼 */
	$('.searchIptBox input[type=text]', topSearchWrap).keydown(function() {
		var _this = $(this);
		var _val = _this.val();
		var _delEle = $('.searchIptBox .del', topSearchWrap);
		if(_val !== '') {
			_delEle.show();
		}else if(_val === '') {
			_delEle.hide();
		}
	});
	
	$('.searchIptBox .del', topSearchWrap).click(function() {
		$('.searchIptBox input[type=text]', topSearchWrap).val('');
		$(this).hide();
	});
	
	return {
		recomPrdReset : function() {
			calcRecomFn();
			resizeBoxFn();
		}
	}
}

/**********************************************************
	상단 슬라이드 공지사항
**********************************************************/
var topNotiSlideFnc = function() {
	var wrapper = $('.topNotiWrap');
	var notiList = $('.notiList', wrapper);
	var slideWrap = $('.swipeCmpt', notiList);
	var btnPrev = $('.swipePrev', wrapper);
	var btnNext = $('.swipeNext', wrapper);

	slideWrap.on({
		'init' : function (event, slick) { 
			console.log('init');
			
			$('.topNotiInner', wrapper).append('<div class="paging"><span class="nowNum">' + (slick.currentSlide + 1) + '</span> / ' + slick.slideCount + '</div>');
		},
		'afterChange' : function(event, slick) {
			// console.log('beforeChange');
			var paging = $('.paging .nowNum', wrapper);
			paging.text(slick.currentSlide + 1);
		}
	});

	slideWrap.slick({
		initialSlide : 0,
		autoplay : true,
		autoplaySpeed : 3000,
		prevArrow : btnPrev,
		nextArrow : btnNext
	});

}

/**********************************************************
	Main
**********************************************************/
/* 메인 - 랭킹 슬라이드 */
var mainRankingFnc = function(target) {
	var wrapper = $(target);
	var slideWrap = $('.ctmSlideWrap', wrapper);
	var btnPrev = $('.swipePrev', wrapper);
	var btnNext = $('.swipeNext', wrapper);

	var slideLib = new cstmSlideFn(slideWrap, {
		'movSlideNum' : 2,
		'gapCtrl' : 10,
		'btnPrev' : btnPrev,
		'btnNext' : btnNext
	});
	
	return {
		'update' : function() {
			slideLib.update();
		}
	}
}

/* 메인 - 매거진 슬라이드 */
var mainMagazineFnc = function() {
	var wrapper = $('.magazineMain');
	var mazList = $('.mazList', wrapper);
	var slideWrap = $('.swipeCmpt', mazList);
	var btnPrev = $('.swipePrev', wrapper);
	var btnNext = $('.swipeNext', wrapper);

	slideWrap.on({
		'init' : function (event, slick) { 
			// console.log('init');
			// $('.mazList', wrapper).append('<div class="paging"><span class="nowNum">' + (slick.currentSlide + 1) + '</span>/' + slick.slideCount + '</div>');
		},
		'afterChange' : function(event, slick) {
			// console.log('beforeChange');
			// var paging = $('.paging', wrapper);
			// $('.mazList', wrapper).append('<div class="paging"><span class="nowNum">' + (slick.currentSlide + 1) + '</span>/' + slick.slideCount + '</div>');
		}
	});

	slideWrap.slick({
		initialSlide : 0,
		infinite : false,
		swipe : false,
		dots: true,
		prevArrow : btnPrev,
		nextArrow : btnNext
	});
}

/* 메인 띠 배너 이미지 높이 체크 */
var mainCalcH = function(target) {
	console.log('main banner height calc fnc');
	var target = $(target);
	var tH = target.outerHeight();
	var anchor = target.parents('.banItem');
	anchor.css({'height' : tH});
}

/* 메인 레이어팝업 배너 슬라이드 */
var mainPopSlide = function() {
	var mainLayerCont = $('.layerWrap .mainLayerCont')
	var popSlideBox = $('.popSlideBox', mainLayerCont);
	var btnPrev = $('.btnPrev', mainLayerCont);
	var btnNext = $('.btnNext', mainLayerCont);
	var btnPlay = $('.btnPlay', mainLayerCont);
	var btnStop = $('.btnStop', mainLayerCont);
	
	popSlideBox.on({
		'init' : function (event, slick) { 
			// console.log('init');
			if(slick.slideCount < 2) {
				$('.ctrlBox', mainLayerCont).hide();
				return;
			}
			$('.ctrlBox', mainLayerCont).append('<div class="paging"><span class="nowNum">' + (slick.currentSlide + 1) + '</span> / ' + slick.slideCount + '</div>');
		},
		'afterChange' : function(event, slick) {
			// console.log('beforeChange');
			var paging = $('.ctrlBox .paging .nowNum', mainLayerCont);
			paging.text(slick.currentSlide + 1);
		}
	});

	
	popSlideBox.slick({
		initialSlide : 0,
		draggable : false,
		autoplay : true,
		autoplaySpeed : 3000,
		prevArrow : btnPrev,
		nextArrow : btnNext
	});
	
	btnPlay.on('click', function() {
		$(this).hide();
		btnStop.show();
		popSlideBox.slick('slickPlay');
	});
	btnStop.on('click', function() {
		$(this).hide();
		btnPlay.show();
		popSlideBox.slick('slickPause');
	});
}

/**********************************************************
	검색 - 추천상품
**********************************************************/
var nodataRecomPrdFn = function() {
	var recomWrap = $('.recomPrdWrap');
	var slideWrap = $('.ctmSlideWrap',recomWrap);
	var btnPrev = $('.swipePrev', slideWrap);
	var btnNext = $('.swipeNext', slideWrap);
	
	var slideLib = new cstmSlideFn(slideWrap, {
		'movSlideNum' : 4,
		'gapCtrl' : 10,
		'btnPrev' : btnPrev,
		'btnNext' : btnNext
	});
}

/**********************************************************
	반응형 레이아웃 - 추천상품
**********************************************************/
var responsiveRecomSlide = function() {
	var recomWrap = $('.recomPrdWrap02');
	var slideWrap = $('.ctmSlideWrap',recomWrap);
	var btnPrev = $('.swipePrev', slideWrap);
	var btnNext = $('.swipeNext', slideWrap);
	
	var slideLib = new cstmSlideFn(slideWrap, {
		'slideWidth' : '20%',
		'movSlideNum' : 5,
		'responsive' : [
			{
				'breakpoint' : 1400,
				'settings' : {
					'slideWidth' : '25%',
					'movSlideNum' : 4
				}
			}
		],
		'gapCtrl' : 10,
		'btnPrev' : btnPrev,
		'btnNext' : btnNext
	});
}

/**********************************************************
	custom slide function
**********************************************************/
var cstmSlideFn = function(target, options) {
	var options = options || {};
	var wrapper = $(target);
	var slideWrap = $('.slideWrapper', wrapper);
	var slideItem = $('.slideItem', wrapper);
	var slideCount = slideItem.length;
	var movDist = 0;
	var scrollWrap, scrollItem, wrapperW , slideWrapW , slideItemW, gapDist;
	var gapCtrl = options.gapCtrl || 0;
	var movSlideNum = options.movSlideNum || 1;
	var actionIndex = 0;
	var isTransition = false;
	var responsive;
	var slideWidth;

	if(options.responsive) {
		responsive = {};
		for(var i =0; i < options.responsive.length; i++) {
			responsive[options.responsive[i]['breakpoint']] = options.responsive[i]['settings'];
		}
	}

	var init = function() {
		$(options.btnPrev).addClass('disabled')
		wrapper.append('<div class="scrollWrap"><span class="scrollItem"></span></div>');
		checkResponFn();
		calcLayoutFn();
		calcScrollFn();
	}
	
	var checkResponFn = function() {
		var checkWidth = options.slideWidth;
		if(!options.responsive) return;
		var keys = Object.keys(responsive);
		var checkpoint;

		keys.sort(function(a, b) {return b - a;});

		for(var i =0; i < keys.length; i++) {
			var breakpoint = parseInt(keys[i]);
			if(winW < breakpoint){
				checkpoint = breakpoint;
			}
		}

		if(checkpoint) {
			checkWidth = responsive[checkpoint]['slideWidth'];
			movSlideNum = responsive[checkpoint]['movSlideNum'];
			slideWidth = checkWidth.indexOf('%') < 0 ? checkWidth : (wrapper.outerWidth() + gapCtrl) * (parseInt(checkWidth) / 100);
		}else{
			slideWidth = options.slideWidth.indexOf('%') < 0 ? options.slideWidth : (wrapper.outerWidth() + gapCtrl) * (parseInt(options.slideWidth) / 100);
			movSlideNum = options.movSlideNum;
		}
	}

	var calcLayoutFn = function() {
		wrapperW = wrapper.outerWidth();
		slideItemW = slideWidth || slideItem.outerWidth();
		slideWrapW = slideItemW*slideCount - gapCtrl;
		gapDist = slideWrapW - wrapperW;

		slideWrap.css({'width' : slideWrapW + gapCtrl});

		if(0 < gapDist && movSlideNum < slideCount) {
			if($(options.btnPrev).is(':hidden')) {
				$('.scrollWrap', wrapper).css({
					'opacity' : '1'
				});
				if(options.btnPrev) {
					$(options.btnPrev).show().removeClass('disabled').addClass('disabled');
				}
				if(options.btnNext) {
					$(options.btnNext).show().removeClass('disabled');
				}
			}
			
			if(movSlideNum) {
				actionIndex = Math.ceil((slideWrapW + gapCtrl) / (slideItemW * movSlideNum)) <= actionIndex ? actionIndex - 1 : actionIndex;
				movDist = (slideItemW * movSlideNum) * actionIndex > gapDist ? -gapDist : -(slideItemW * movSlideNum) * actionIndex;
				transitionFn(movDist, 0);
			}else{
				if(Math.abs(movDist) >= gapDist) {
					transitionFn(-gapDist, 0);
					movDist = -gapDist;
				}
			}
		}else{
			if(!$(options.btnPrev).is(':hidden')) {
				$('.scrollWrap', wrapper).css({
					'opacity' : '0'
				});
				if(options.btnPrev) {
					$(options.btnPrev).hide();
				}
				if(options.btnNext) {
					$(options.btnNext).hide();
				}
			}
			transitionFn(0, 0);
			movDist = 0;
		}

		if(slideWidth) slideItem.css({'width' : slideItemW});
	}

	var calcScrollFn = function() {
		scrollWrap = $('.scrollWrap', wrapper);
		scrollItem = $('.scrollItem', scrollWrap);
		var itemW = (wrapperW / slideWrapW)*100;
		scrollItem.css({'width' : itemW+'%'});
		movScroll(movDist, 0);
	}

	var transitionFn = function(mov, speed) {
		slideWrap.css({
			'transition-property' : 'transform',
			'transition-duration' : speed || '.6s',
			'transition-timing-function' : 'ease',
			'transform' : 'translate(' + mov + 'px, 0)'
		});
	}

	var move = function(dist) {
		isTransition = true;
		movDist += dist;
		if(gapDist <= Math.abs(movDist)) {
			movDist = -gapDist;
		}else if(movDist > 0) {
			movDist = 0;
		}

		transitionFn(movDist);
		movScroll(movDist);
	}

	var movScroll = function(mov, speed) {
		var calcPer = (Math.abs(mov) / scrollWrap.outerWidth()) * 100;

		scrollItem.css({
			'transition-property' : 'transform',
			'transition-duration' : speed || '.6s',
			'transition-timing-function' : 'ease',
			'transform' : 'translate(' + calcPer + '%, 0)'
		});
	}

	var prev = function() {
		var movDist = slideItemW*movSlideNum > gapDist ? gapDist : slideItemW*movSlideNum;
		move(movDist);
	}
	
	var next = function() {
		var movDist = slideItemW*movSlideNum > gapDist ? gapDist : slideItemW*movSlideNum;
		move(-movDist);
	}

	init();

	slideWrap.bind('transitionend', function() {
		if(options.transitionEnd) options.transitionEnd(gapDist, movDist);

		if(options.btnPrev) {
			if(Math.abs(movDist) == 0) {
				$(options.btnPrev).addClass('disabled')
			}else{
				$(options.btnPrev).removeClass('disabled');
			}
		}
		if(options.btnNext) {
			if(Math.abs(movDist) >= gapDist) {
				$(options.btnNext).addClass('disabled')
			}else{
				$(options.btnNext).removeClass('disabled');
			}
		}
		isTransition = false;
		
	})

	if(options.btnPrev) {
		$(options.btnPrev).click(function() {
			if($(this).hasClass('disabled') || isTransition) return;
			actionIndex -= 1;
			prev();
		});
	}
	if(options.btnNext) {
		$(options.btnNext).click(function() {
			if($(this).hasClass('disabled') || isTransition) return;
			actionIndex += 1;
			next();
		});
	}

	$(window).resize(function() {
		setTimeout(function() {
			checkResponFn();
			calcLayoutFn();
			calcScrollFn();
		}, 100);
	});

	return {
		'slidePrev' : function() {
			prev();
		},
		'slideNext' : function() {
			next();
		},
		'update' : function() {
			checkResponFn();
			calcLayoutFn();
			calcScrollFn();
		}
		
	}
}

/**********************************************************
	page tab text v-align
**********************************************************/
var pageTabWrapFn = function(target) {
	var wrapper = $(target);
	var item = $('li',wrapper);
	var textItem = $('> a', item);
	
	var setHFn = function() {
		var checkH = 0;
		textItem.each(function() {
			var _this = $(this);
			checkH = Math.max(_this.outerHeight(), checkH);
		});
		
		item.css({
			'height' : Math.abs(checkH)
		});
	}
	
	setHFn();
	$(window).resize(function() {
		setHFn();
	});
}

/**********************************************************
	layer popup function
**********************************************************/
var layerOpenFn = function(target) {
	var target = $(target);
	var winW = $(window).width();
	var winH = $(window).height();
	var winST = $(window).scrollTop();
	var tW = target.outerWidth();
	var tH = target.outerHeight();
	var posX = (winW - tW) / 2 >= 0 ? (winW - tW) / 2 : 0;
	var posY = (winH - tH) / 2 > 0 ? ((winH - tH) / 2) + winST : winST;
	
	
	target.before('<div class="layerMask"></div>');
	target.css({
		'top' : posY,
		'left' : posX
	}).show();
}

var layerCloseFn = function(target) {
	var target = $(target);
	target.prev().remove();
	target.hide();
}
