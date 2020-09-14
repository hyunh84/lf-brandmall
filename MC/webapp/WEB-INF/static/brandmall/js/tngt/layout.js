var headerFn = function(target, title) {
	var html = '';

	if(title) {
		html += '<h1 class="logo blind"><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/tngt/logo.png" alt="TNGT"></a></h1>';
		html += '<h2 class="pageTitle">' + title + '</h2>';
	}else{
		html += '<h1 class="logo"><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/tngt/logo.png" alt="TNGT"></a></h1>';
	}
	html += '<a href="#" class="btnGoBak"><span>뒤로가기</span></a>';
	html += '<button type="button" class="btnTopSrch"><span>검색 열기</span></button>';


	$(target).html(html);
}

var createSearch = function(target) {
	var html = '<div class="inner">';
	html += '<input type="text" placeholder="검색어를 입력하세요">';
	html += '<button type="button"><span>검색</span></button>';
	html += '</div>';
	$(target).html(html);
}

var createQuickNavFn = function(target) {
	var html = '<ul>';
	html += '<li class="cate"><a href="#">카테고리</a></li>';
	html += '<li class="recent"><a href="#">최근본</a></li>';
	html += '<li class="home on"><a href="#">홈</a></li>';
	html += '<li class="basket"><a href="#">쇼핑백</a></li>';
	html += '<li class="my"><a href="#">마이</a></li>';
	html += '</ul>';
	$(target).html(html);
}

var createGnbFn = function(target) {
	var html = '<div class="tngtGnb">';
	html += '<div class="gnbInner">';
	html += '<div class="gnbList">';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#">ABOUT</a>';
	html += '<ul class="depth2">';
	html += '<li>';
	html += '<a href="#">ABOUT TNGT</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">ABOUT SIGNAL</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">NEWS</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">CATALOGUE</a>';
	html += '</li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">SHOP</a>';
	html += '<ul class="depth2">';
	html += '<li>';
	html += '<a href="#">BEST</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">ALL</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">OUTER</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">TOP</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">BOTTOM</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">ACC</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">SUIT</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">REVIEW</a>';
	html += '</li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">OUTLET</a>';
	html += '<ul class="depth2">';
	html += '<li>';
	html += '<a href="#">BEST</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">ALL</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="/m2/outlet/outer/all">OUTER</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">TOP</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">BOTTOM</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">ACC</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">SUIT</a>';
	html += '</li>';
	html += '</ul>';
	html += '</li>';
	html += '<li class="">';
	html += '<a href="#">MAGAZINE</a>';
	html += '<ul class="depth2">';
	html += '<li>';
	html += '<a href="#">TNGT LOOK</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">TNGT LAB</a>';
	html += '</li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">EVENT</a>';
	html += '<ul class="depth2">';
	html += '<li>';
	html += '<a href="#">PROMOTION</a>';
	html += '</li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">STORE</a>';
	html += '<ul class="depth2">';
	html += '<li>';
	html += '<a href="#">매장찾기</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">매장개설안내</a>';
	html += '</li>';
	html += '</ul>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="gnbUtil">';
	html += '<div class="login">';
	html += '<a href="#">LOGIN</a>';
	html += '<a href="#">JOIN</a>';
	html += '</div>';
	html += '<div class="sns">';
	html += '<a href="#" class="face"><span>페이스북</span></a>';
	html += '<a href="#" class="insta"><span>인스타그램</span></a>';
	html += '<a href="#" class="blog"><span>블로그</span></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	$(target).html(html);
}

var footerFn = function(target) {
	var html = '<div class="menu">';
	html += '<ul>';
	html += '<li><a href="#">로그인</a></li>';
	html += '<!-- <li><a href="#">로그아웃</a></li> -->';
	html += '<li><a href="#">공지사항</a></li>';
	html += '<li><a href="#">PC버전</a>	</li>';
	html += '<li><a href="#">LFMALL</a></li>';
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