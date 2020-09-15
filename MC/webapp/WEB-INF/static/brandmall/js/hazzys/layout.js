var headerFn = function(target, lang, depth) {
	var html = '';
	html += '<h1 class="logo"><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/logo.svg" alt="HAZZYS" /></a></h1>';
	html += '<button type="button" class="btnGnb"><span><em>메뉴열기</em></span></button>';
	html += '<div class="headUtil">';
	html += '<a href="#" class="icoSearch"><em>검색</em></a>';
	html += '<a href="#" class="icoCart"><em>장바구니</em></a>';
	html += '</div>';

	$(target).html(html);
	if(depth === '2') {
		$('img', target).each(function() {
			$(this).attr('src', $(this).attr('src').replace('../../webapp', '../../../webapp'));
		});
	}
}

var createGnbFn = function(target) {
	var html = '';

	$(target).html(html);
}

var easyUtilFn = function(target) {
	var html = '';
	html += '<div class="easySect">';
	html += '<strong>NEWS LETTER</strong>';
	html += '<label class="easyEmail">';
	html += '<span class="placeholder"><span>이메일을 입력하세요</span></span>';
	html += '<input type="email" />';
	html += '</label>';
	html += '</div>';
	html += '<div class="easySect">';
	html += '<strong>FOLLOW HAZZYS</strong>';
	html += '<div class="easySns">';
	html += '<ul>';
	html += '<li><a href="#" class="insta"><span>Men</span></a></li>';
	html += '<li><a href="#" class="insta"><span>Golf</span></a></li>';
	html += '<li><a href="#" class="insta"><span>Ladies</span></a></li>';
	html += '<li><a href="#" class="insta"><span>Beauty</span></a></li>';
	html += '<li><a href="#" class="insta"><span>Acc</span></a></li>';
	html += '<li><a href="#" class="ytube"><span>HAZZYS OFFICIAL</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<div class="easySect">';
	html += '<p class="txtCopy">';
	html += '헤지스가 처음이신가요.<br />';
	html += '회원가입하고 더 많은 혜택을 받아보세요.';
	html += '</p>';
	html += '<a href="#" class="easySignUp">회원가입</a>';
	html += '</div>';

	$(target).html(html);
}

var footerFn = function(target, lang) {
	var html = '';
	html += '<div class="menu">';
	html += '<a href="#">로그인</a>';
	html += '<a href="#">PC버전</a>';
	html += '<a href="#">STORE</a>';
	html += '<a href="#">공지사항</a>';
	html += '</div>';
	html += '<div class="copyright">';
	html += '<div class="info">';
	html += '<div class="inner">';
	html += '<span>서울 강남구 언주로 870</span>';
	html += '<span>(주)LF</span>';
	html += '<span>대표이사 오규식</span>';
	html += '<br>';
	html += '<span>연락처:1544-5114 (유료)</span>';
	html += '<span>사업자등록번호: 211-87-87724</span>';
	html += '<br>';
	html += '<span>통신판매업신고:제2010-서울강남-00066호</span>';
	html += '</div>';
	html += '</div>';
	html += '<div class="link">';
	html += '<div class="inner">';
	html += '<a href="#">소비자피해보상 보험확인</a>';
	html += '<a href="#">이용약관</a>';
	html += '<br> ';
	html += '<a href="#">사업자 정보확인</a>';
	html += '<a href="#"><strong>개인정보 처리방침</strong></a>';
	html += '</div>';
	html += '</div>';
	html += '<div class="fLangBox">';
	html += '<button><span>KOREAN</span></button>';
	html += '<div class="langOpt">';
	html += '<ul>';
	html += '<li class="select"><a href="#">KOREAN</a></li>';
	html += '<li><a href="#">ENGLISH</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<span class="txt">COPYRIGHT © 1990-2018 TNGT ALL RIGHTS RESERVED.</span>';
	html += '</div>';


	if(lang == 'en') {

	}

	$(target).html(html);
}