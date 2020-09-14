var headerFn = function(target, title) {
	var html = '<h1 class="logo"><a href="#"><em>HAZZYS</em></a></h1>';
	html += '<button type="button" class="btnGnb">';
	html += '<span><em>메뉴열기</em></span>';
	html += '</button>';
	html += '<div class="headUtil">';
	html += '<a href="#" class="icoStore"><em>STORE</em></a>';
	html += '<a href="#" class="icoCart"><em>장바구니</em></a>';
	html += '</div>';

	$(target).html(html);
}

var createGnbFn = function(target) {
	var html = '<div class="mainGnb">';
	html += '<div class="gnbList">';
	html += '<ul>';
	html += '<li><a href="#">ARCHIVE</a>';
	html += '<div class="subGnb">';
	html += '<strong>ARCHIVE</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#">HERITAGE</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">HISTORY</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">CULTURE</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">2020+</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">MEN</a>';
	html += '<div class="subGnb">';
	html += '<strong>MEN</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>MEN</span>\'S HOME</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">전체</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">티셔츠</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">점퍼</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">코트</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">셔츠</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">팬츠</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">수트/정장</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">자켓/베스트</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">언더/라운지웨어</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">가디건</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">니트/스웨터</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">WOMEN</a>';
	html += '<div class="subGnb">';
	html += '<strong>WOMEN</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>WOMEN</span>\'S HOME</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">전체</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">가디건</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">베스트</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">자켓</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">니트/스웨터</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">점퍼</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">코트</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">티셔츠</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">셔츠</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">팬츠</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">원피스</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">스커트</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">언더/라운지웨어</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성비치웨어</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">ACC</a>';
	html += '<div class="subGnb">';
	html += '<strong>ACC</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>ACC</span>\'S HOME</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">전체</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성가방</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성지갑</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">스카프/머플러</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">남성가방</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">남성지갑</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">벨트</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">양말</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">장갑</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">키링/키홀더</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">모자</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">기타ACC</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">백팩</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성 슈즈</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">남성 슈즈</a>';
	html += '</li>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</ul>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">GOLF</a>';
	html += '<div class="subGnb">';
	html += '<strong>GOLF</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>GOLF</span>\'S HOME</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">전체</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">남성 아우터</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">남성 상의</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">남성 하의</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성 아우터</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성 상의</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성 하의</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">골프용품</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">골프가방</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">BEAUTY</a>';
	html += '<div class="subGnb">';
	html += '<strong>BEAUTY</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>BEAUTY</span>\'S HOME</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">전체</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">스킨케어</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">헤어/바디케어</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">남성케어</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">STORIES</a>';
	html += '<div class="subGnb">';
	html += '<strong>STORIES</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>STORIES</span>\'S HOME</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">CAMPAIGN</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">HAZZYS ICONIC ITEM</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">SPECIAL EDITION</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '<div class="gnbUtil">';
	html += '<a href="">LOGIN</a>';
	html += '<a href="">JOIN</a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';


	$(target).html(html);
}

var footerFn = function(target, lang) {
	if(lang == 'en') {
		var html = '<ul class="site-footer__menu">';
		html += '<li class="site-footer__menu-list">';
		html += '<a href="#none" class="site-footer__menu-link">LANGUAGE</a>';
		html += '<div class="site-footer__lang">';
		html += '<ul>';
		html += '<li class="site-footer__menu-list"><a href="/m2/en/index" class="site-footer__menu-link">ENGLISH</a></li>';
		html += '<li class="site-footer__menu-list"><a href="/m2/ko/index" class="site-footer__menu-link">KOREAN</a></li>';
		html += '</ul>';
		html += '</div>';
		html += '</li>';
		html += '</ul>';
		html += '<div class="site-footer__copy">';
		html += '<span class="site-footer__copy-text">@ 2019 HAZZYS ALL RIGHTS RESERVED.</span>';
		html += '</div>';
	}else{
		var html = '<div class="menu">';
		html += '<ul>';
		html += '<li><a href="#">로그인</a></li>';
		html += '<!-- <li><a href="javascript:logout();sendTagAjax(\'_A089_E005\', \'0\', \'0\');">로그아웃</a></li> -->';
		html += '<li><a href="#">PC버전</a></li>';
		html += '<li><a href="#">STORE</a></li>';
		html += '<li><a href="#">공지사항</a></li>';
		html += '</ul>';
		html += '</div>';
		html += '<div class="copyright">';
		html += '<div class="sel_box">';
		html += '<button type="button" class="">LANGUAGE</button>';
		html += '<ul>';
		html += '<li><a href="#">KOREAN</a></li>';
		html += '<li><a href="#">ENGLISH</a></li>';
		html += '</ul>';
		html += '</div>';
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
	}
	$(target).html(html);
}