var headerFn = function(target) {
	var html = '';
	html += '<h1 class="logo"><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/logo.png" alt="COLE HAAN" /></a></h1>';
	html += '<button type="button" class="btnOpenGnb"><span><em>메뉴</em></span></button>';
	html += '<div class="hUtil">';
	html += '<a href="#" class="store"><em>STORE</em></a>';
	html += '<a href="#" class="cart"><em>장바구니</em></a>';
	html += '</div>';

	$(target).html(html);
}

var createGnbFn = function(target) {
	var html = '';
	html += '<div class="inner">';
	html += '<div class="gnbList">';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>ABOUT</span></a>';
	html += '<div class="subDepth02">';
	html += '<ul>';
	html += '<li><a href="#"><span>ABOUT MAESTRO</span></a></li>';
	html += '<li><a href="#"><span>WHAT\'S NEW</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>CAMPAIGN</span></a>';
	html += '<div class="subDepth02">';
	html += '<ul>';
	html += '<li><a href="#"><span>2020 SS</span></a></li>';
	html += '<li><a href="#"><span>2019 FW</span></a></li>';
	html += '<li><a href="#"><span>2019 SS</span></a></li>';
	html += '<li><a href="#"><span>2018 FW</span></a></li>';
	html += '<li><a href="#"><span>2018 SS</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>PRODUCT</span></a>';
	html += '<div class="subDepth02">';
	html += '<ul>';
	html += '<li><a href="#"><span>OUTER</span></a></li>';
	html += '<li><a href="#"><span>TOP</span></a></li>';
	html += '<li><a href="#"><span>BOTTOM</span></a></li>';
	html += '<li><a href="#"><span>SUIT</span></a></li>';
	html += '<li><a href="#"><span>ACC</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>STORE</span></a>';
	html += '<div class="subDepth02">';
	html += '<ul>';
	html += '<li><a href="#"><span>매장 찾기</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '<div class="gnbUtil">';
	html += '<div class="utilRow">';
	html += '<a href="#">LOGIN</a>';
	html += '<a href="#">JOIN</a>';
	html += '</div>';
	html += '<div class="utilRow">';
	html += '<a href="#" class="fbook"><em>페이스북</em></a>';
	html += '<a href="#" class="insta"><em>인스타그램</em></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	$(target).html(html);
}

var footerFn = function(target) {
	var html = '';
	html += '<div class="menu">';
	html += '<ul>';
	html += '<li><a href="#">로그인</a></li>';
	html += '<li><a href="#">PC버전</a>	</li>';
	html += '<li><a href="#">공지사항</a></li>';
	html += '</ul>';
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
	html += '<a href="#">소비자피해보상 보험확인</a>';
	html += '<a href="#">사업자 정보확인</a><br>';
	html += '<a href="#">이용약관</a>';
	html += '<a href="#"><strong>개인정보 처리방침</strong></a>';
	html += '</div>';
	html += '<span class="txt">COPYRIGHT © 1990-2018 TNGT ALL RIGHTS RESERVED.</span>';
	html += '</div>';


	$(target).html(html);
}