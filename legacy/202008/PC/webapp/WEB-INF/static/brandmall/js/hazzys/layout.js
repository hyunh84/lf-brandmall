var headerFn = function(target, lang) {
	var html = '<h1 class="logo"><a href="#"><em>HAZZYS</em></a></h1>';
	html += '<div class="gnb">';
	html += '<ul>';
	if(lang == 'en') {
		html += '<li>';
		html += '<a href="#">BRAND</a>';
		html += '<div class="gnb_depth style02">';
		html += '<div class="gnb_inner">';
		html += '<strong>BRAND</strong>';
		html += '<div class="gnb_sub">';
		html += '<ul>';
		html += '<li><a href="#"><span>ABOUT HAZZYS</span></a></li>';
		html += '<li><a href="#"><span>HISTORY</span></a></li>';
		html += '<li><a href="#"><span>ARTIST EDITION</span></a></li>';
		html += '</ul>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '</li>';
	}else{
		html += '<li>';
		html += '<a href="#">ARCHIVE</a>';
		html += '<div class="gnb_depth style02">';
		html += '<div class="gnb_inner">';
		html += '<strong>ARCHIVE</strong>';
		html += '<div class="gnb_sub">';
		html += '<ul>';
		html += '<li><a href="#"><span>HERITAGE</span></a></li>';
		html += '<li><a href="#"><span>HISTORY</span></a></li>';
		html += '<li><a href="#"><span>CULTURE</span></a></li>';
		html += '<li><a href="#"><span>2020+</span></a></li>';
		html += '</ul>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '</li>';
	}

	html += '<li>';
	html += '<a href="#">MEN</a>';
	html += '<div class="gnb_depth">';
	html += '<div class="gnb_inner">';
	html += '<strong>MEN</strong>';
	html += '<div class="gnb_sub">';
	html += '<a href="#" class="subMain"><span>MEN</span>\'S<br>HOME</a>';
	html += '<ul>';
	html += '<li><a href="#"><span>전체</span></a></li>';
	html += '<li><a href="#"><span>티셔츠</span></a></li>';
	html += '<li><a href="#"><span>점퍼</span></a></li>';
	html += '<li><a href="#"><span>코트</span></a></li>';
	html += '<li><a href="#"><span>셔츠</span></a></li>';
	html += '<li><a href="#"><span>팬츠</span></a></li>';
	html += '<li><a href="#"><span>수트/정장</span></a></li>';
	html += '<li><a href="#"><span>자켓/베스트</span></a></li>';
	html += '<li><a href="#"><span>언더/라운지웨어</span></a></li>';
	html += '<li><a href="#"><span>가디건</span></a></li>';
	html += '<li><a href="#"><span>니트/스웨터</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="prod_list">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/temp/temp_gnb01.jpg" alt=""></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">WOMEN</a>';
	html += '<div class="gnb_depth">';
	html += '<div class="gnb_inner">';
	html += '<strong>WOMEN</strong>';
	html += '<div class="gnb_sub">';
	html += '<a href="#" class="subMain"><span>WOMEN</span>\'S<br>HOME</a>';
	html += '<ul>';
	html += '<li><a href="#"><span>전체</span></a></li>';
	html += '<li><a href="#"><span>가디건</span></a></li>';
	html += '<li><a href="#"><span>베스트</span></a></li>';
	html += '<li><a href="#"><span>자켓</span></a></li>';
	html += '<li><a href="#"><span>니트/스웨터</span></a></li>';
	html += '<li><a href="#"><span>점퍼</span></a></li>';
	html += '<li><a href="#"><span>코트</span></a></li>';
	html += '<li><a href="#"><span>티셔츠</span></a></li>';
	html += '<li><a href="#"><span>셔츠</span></a></li>';
	html += '<li><a href="#"><span>팬츠</span></a></li>';
	html += '<li><a href="#"><span>원피스</span></a></li>';
	html += '<li><a href="#"><span>스커트</span></a></li>';
	html += '<li><a href="#"><span>언더/라운지웨어</span></a></li>';
	html += '<li><a href="#"><span>여성비치웨어</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="prod_list">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/temp/temp_gnb01.jpg" alt=""></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">ACC</a>';
	html += '<div class="gnb_depth">';
	html += '<div class="gnb_inner">';
	html += '<strong>ACC</strong>';
	html += '<div class="gnb_sub">';
	html += '<a href="#" class="subMain"><span>ACC</span>\'S<br>HOME</a>';
	html += '<ul>';
	html += '<li><a href="#"><span>전체</span></a></li>';
	html += '<li><a href="#"><span>여성가방</span></a></li>';
	html += '<li><a href="#"><span>여성지갑</span></a></li>';
	html += '<li><a href="#"><span>스카프/머플러</span></a></li>';
	html += '<li><a href="#"><span>남성가방</span></a></li>';
	html += '<li><a href="#"><span>남성지갑</span></a></li>';
	html += '<li><a href="#"><span>벨트</span></a></li>';
	html += '<li><a href="#"><span>양말</span></a></li>';
	html += '<li><a href="#"><span>장갑</span></a></li>';
	html += '<li><a href="#"><span>키링/키홀더</span></a></li>';
	html += '<li><a href="#"><span>모자</span></a></li>';
	html += '<li><a href="#"><span>기타ACC</span></a></li>';
	html += '<li><a href="#"><span>백팩</span></a></li>';
	html += '<li><a href="#"><span>여성 슈즈</span></a></li>';
	html += '<li><a href="#"><span>남성 슈즈</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="prod_list">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/temp/temp_gnb01.jpg" alt=""></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">GOLF</a>';
	html += '<div class="gnb_depth">';
	html += '<div class="gnb_inner">';
	html += '<strong>GOLF</strong>';
	html += '<div class="gnb_sub">';
	html += '<a href="#" class="subMain"><span>GOLF</span>\'S<br>HOME</a>';
	html += '<ul>';
	html += '<li><a href="#"><span>전체</span></a></li>';
	html += '<li><a href="#"><span>남성 아우터</span></a></li>';
	html += '<li><a href="#"><span>남성 상의</span></a></li>';
	html += '<li><a href="#"><span>남성 하의</span></a></li>';
	html += '<li><a href="#"><span>여성 아우터</span></a></li>';
	html += '<li><a href="#"><span>여성 상의</span></a></li>';
	html += '<li><a href="#"><span>여성 하의</span></a></li>';
	html += '<li><a href="#"><span>골프용품</span></a></li>';
	html += '<li><a href="#"><span>골프가방</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="prod_list">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/temp/temp_gnb01.jpg" alt=""></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">BEAUTY</a>';
	html += '<div class="gnb_depth">';
	html += '<div class="gnb_inner">';
	html += '<strong>BEAUTY</strong>';
	html += '<div class="gnb_sub">';
	html += '<a href="#" class="subMain"><span>BEAUTY</span>\'S<br>HOME</a>';
	html += '<ul>';
	html += '<li><a href="#"><span>전체</span></a></li>';
	html += '<li><a href="#"><span>스킨케어</span></a></li>';
	html += '<li><a href="#"><span>헤어/바디케어</span></a></li>';
	html += '<li><a href="#"><span>남성케어</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="prod_list">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/temp/temp_gnb01.jpg" alt=""></a>';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/temp/temp_gnb02.jpg" alt=""></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">STORIES</a>';
	html += '<div class="gnb_depth">';
	html += '<div class="gnb_inner">';
	html += '<strong>STORIES</strong>';
	html += '<div class="gnb_sub">';
	html += '<a href="#" class="subMain"><span>STORIES</span>\'S<br>HOME</a>';
	html += '<ul>';
	html += '<li><a href="#"><span>CAMPAIGN</span></a></li>';
	html += '<li><a href="#"><span>HAZZYS ICONIC ITEM</span></a></li>';
	html += '<li><a href="#"><span>SPECIAL EDITION</span></a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	if(lang != 'en') {
		html += '<div class="util">';
		html += '<span class="log">';
		html += '<a href="#">LOGIN</a>';
		html += '<a href="#">JOIN</a>';
		html += '</span>';
		html += '<ul>';
		html += '<!-- <li><a href="#" class="btn_search"><span>검색</span></a></li> -->';
		html += '<!-- <li><a href="#" class="btn_mypage"><span>마이페이지</span></a></li> -->';
		html += '<li><a href="#" class="btn_cart"><span>장바구니</span><em>0</em></a></li>';
		html += '</ul>';
		html += '</div>';
	}

	$(target).html(html);
}

var footerFn = function(target, lang) {
	var html = '<button type="button" class="btn_top">TOP으로 이동</button>';
	html += '<div class="footer_inner">';

	if(lang == 'en') {
		html += '<a href="#" class="footer-logo">';
		html += '<img src="http://www.hazzys.com/static/renewal/images/hazzys/common/logo_hazzys_white.png?param=202006120821" alt="hazzys">';
		html += '</a>';
	}else{
		html += '<ul class="terms">';
		html += '<li><a href="#">이용약관</a></li>';
		html += '<li><a href="#"><strong>개인정보처리방침</strong></a></li>';
		html += '<li><a href="#">청소년보호정책</a></li>';
		html += '<li><a href="#">STORE</a></li>';
		html += '<li><a href="#">LFMALL</a></li>';
		html += '<li><a href="#">공지사항</a></li>';
		html += '</ul>';
		html += '<div class="copyright">';
		html += '<span class="bar_none">사업자 등록번호 : 211-87-87724</span><span>통신판매업신고 : 제 2010-서울강남-00066호</span><a href="#">사업자 정보확인</a>';
		html += '<br>';
		html += '<span class="bar_none">대표전화 : 1544-5114</span><span>(유료)팩스 : 031-360-0003</span>';
		html += '<br>';
		html += '<span class="bar_none">서울 강남구 언주로 870</span><span>(주)LF</span><span>대표이사 오규식</span>';
		html += '<br>';
		html += '<span class="bar_none">COPYRIGHT &copy; 1990-2018 TNGT ALL RESERVED</span>';
		html += '</div>';
	}

	html += '<div class="family">';
	html += '<div class="familySelect">';
	html += '<button type="button">LANGUAGE</button>';
	html += '<ul>';
	html += '<li><a href="#">KOREAN</a></li>';
	html += '<li><a href="#">ENGLISH</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="familySelect">';
	html += '<button type="button">FAMILY SITE</button>';
	html += '<ul>';
	html += '<li><a href="#">LF CORP</a></li>';
	html += '<li><a href="#">JILL STUART</a></li>';
	html += '<li><a href="#">LAFUMA</a></li>';
	html += '<li><a href="#">TNGT</a></li>';
	html += '<li><a href="#">DAKS</a></li>';
	html += '<li><a href="#">MAESTRO</a></li>';
	html += '<li><a href="#">BLUE LOUNGE MAESTRO</a></li>';
	html += '<li><a href="#">A.T.CORNER</a></li>';
	html += '<li><a href="#">LF MALL</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	if(lang == 'en') {
		html += '<div class="footer-copy">COPYRIGHT © 2019 HAZZYS ALL RIGHTS RESERVED.</div>';
	}else{
		html += '<div class="footer_certify">';
		html += '<ul>';
		html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/common/footer_copy_01.png" alt="사단법인한국온라인쇼핑협회"></a></li>';
		html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/common/footer_copy_02.png" alt="국세청 현금영수증 서비스"></a></li>';
		html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/common/footer_copy_03.png" alt="제품안전인증검색 불법제품신고센터"></a></li>';
		html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/hazzys/common/footer_copy_04.png" alt="우리은행 채무지급보증안내"></a></li>';
		html += '<li><a href="#" class="txt_link">서비스 가입사실 확인</a></li>';
		html += '</ul>';
		html += '</div>';
	}

	$(target).html(html);
}