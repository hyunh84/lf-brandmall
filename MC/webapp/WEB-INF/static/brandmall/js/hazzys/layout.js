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
	html += '<div class="inner">';
	html += '<div class="logInfoBox">';
	html += '<span class="logoTxt"><em>HAZZYS</em></span>';
	html += '<div class="logCopy">';
	html += '<em>홍길동</em>님 반갑습니다.<br/>오늘도 즐거운 쇼핑하세요.</div>';
	html += '<div class="btnLog">';
	html += '<a href="#" class="btnLogin"><span>LOGIN</span></a>';
	html += '<a href="#" class="btnJoin"><span>JOIN</span></a>';
	html += '</div>';
	html += '</div>';
	html += '<div class="gnbWrap">';
	html += '<div class="gnbMenu">';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#">Men</a>';
	html += '<div class="depth02">';
	html += '<ul>';
	html += '<li><a href="#">전체</a></li>';
	html += '<li><a href="#">티셔츠</a></li>';
	html += '<li><a href="#">점퍼</a></li>';
	html += '<li><a href="#">코트</a></li>';
	html += '<li><a href="#">셔츠</a></li>';
	html += '<li><a href="#">팬츠</a></li>';
	html += '<li><a href="#">수트/정장</a></li>';
	html += '<li><a href="#">자켓/베스트</a></li>';
	html += '<li><a href="#">언더/라운지웨어</a></li>';
	html += '<li><a href="#">가디건</a></li>';
	html += '<li><a href="#">니트/스웨터</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">Ladies</a>';
	html += '<div class="depth02">';
	html += '<ul>';
	html += '<li><a href="#">전체</a></li>';
	html += '<li><a href="#">가디건</a></li>';
	html += '<li><a href="#">베스트</a></li>';
	html += '<li><a href="#">자켓</a></li>';
	html += '<li><a href="#">니트/스웨터</a></li>';
	html += '<li><a href="#">점퍼</a></li>';
	html += '<li><a href="#">코트</a></li>';
	html += '<li><a href="#">티셔츠</a></li>';
	html += '<li><a href="#">셔츠</a></li>';
	html += '<li><a href="#">팬츠</a></li>';
	html += '<li><a href="#">원피스</a></li>';
	html += '<li><a href="#">스커트</a></li>';
	html += '<li><a href="#">언더/라운지웨어</a></li>';
	html += '<li><a href="#">여성비치웨어</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">Acc</a>';
	html += '<div class="depth02">';
	html += '<ul>';
	html += '<li><a href="#">전체</a></li>';
	html += '<li><a href="#">여성가방</a></li>';
	html += '<li><a href="#">여성지갑</a></li>';
	html += '<li><a href="#">스카프/머플러</a></li>';
	html += '<li><a href="#">남성가방</a></li>';
	html += '<li><a href="#">남성지갑</a></li>';
	html += '<li><a href="#">벨트</a></li>';
	html += '<li><a href="#">양말</a></li>';
	html += '<li><a href="#">여행가방</a></li>';
	html += '<li><a href="#">장갑</a></li>';
	html += '<li><a href="#">키링/키홀더</a></li>';
	html += '<li><a href="#">모자</a></li>';
	html += '<li><a href="#">기타ACC</a></li>';
	html += '<li><a href="#">백팩</a></li>';
	html += '<li><a href="#">여성 슈즈</a></li>';
	html += '<li><a href="#">남성 슈즈</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">Golf</a>';
	html += '<div class="depth02">';
	html += '<ul>';
	html += '<li><a href="#">전체</a></li>';
	html += '<li><a href="#">남성 아우터</a></li>';
	html += '<li><a href="#">남성 상의</a></li>';
	html += '<li><a href="#">남성 하의</a></li>';
	html += '<li><a href="#">여성 아우터</a></li>';
	html += '<li><a href="#">여성 상의</a></li>';
	html += '<li><a href="#">여성 하의</a></li>';
	html += '<li><a href="#">골프용품</a></li>';
	html += '<li><a href="#">골프가방</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">Beauty</a>';
	html += '<div class="depth02">';
	html += '<ul>';
	html += '<li><a href="#">전체</a></li>';
	html += '<li><a href="#">스킨케어</a></li>';
	html += '<li><a href="#">헤어/바디케어</a></li>';
	html += '<li><a href="#">남성케어</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="assistMenu">';
	html += '<ul>';
	html += '<li><a href="#" class="noFold">HAZZYS TV</a></li>';
	html += '<li><a href="#">Collection</a>';
	html += '<div class="depth02">';
	html += '<ul>';
	html += '<li><a href="#">Men</a></li>';
	html += '<li><a href="#">Ladies</a></li>';
	html += '<li><a href="#">ACC</a></li>';
	html += '<li><a href="#">Golf</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">Archive</a>';
	html += '<div class="depth02">';
	html += '<ul>';
	html += '<li><a href="">HERITAGE</a></li>';
	html += '<li><a href="">HISTORY</a></li>';
	html += '<li><a href="">CULTURE</a></li>';
	html += '<li><a href="">2020+</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="closeGnb"><em>메뉴닫기</em></button>';
	html += '</div>';

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