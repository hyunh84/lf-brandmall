var createHeaderCate = function(target) {
	var html = '<div class="headCateInner">';
	html += '<ul class="swiper-wrapper">';
	html += '<li class="swiper-slide"><a href="#">스웨트</a></li>';
	html += '<li class="swiper-slide"><a href="#">랭킹</a></li>';
	html += '<li class="swiper-slide"><a href="#">HOODED SWEATSHIR</a></li>';
	html += '<li class="swiper-slide"><a href="#">REVERSE WEAVE</a></li>';
	html += '<li class="swiper-slide"><a href="#">1HOODED SWEATSHIR</a></li>';
	html += '<li class="swiper-slide"><a href="#">2REVERSE WEAVE</a></li>';
	html += '<li class="swiper-slide"><a href="#">3HOODED SWEATSHIR</a></li>';
	html += '<li class="swiper-slide"><a href="#">4REVERSE WEAVE</a></li>';
	html += '</ul>';
	html += '</div>';
	
	console.log('createHeaderCate - layout.js');
	$(target).html(html);
}

var createGnb = function(target) {
	var html = '<div class="gnbTop">';
	html += '<img src="../../webapp/WEB-INF/static/brandmall/images/champion/logo_gnb.png"alt="CHAMPION" />';
	html += '</div>';
	html += '<div class="gnbCont">';
	html += '<div class="innerBox">';
	html += '<ul class="gnbList">';
	html += '<li>';
	html += '<a href="#"><span>BRAND</span></a>';
	html += '<ul>';
	html += '<li><a href="#">brand01</a></li>';
	html += '<li><a href="#">brand02</a></li>';
	html += '<li><a href="#">brand03</a></li>';
	html += '<li><a href="#">brand04</a></li>';
	html += '<li><a href="#">brand05</a></li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>RANKING</span></a>';
	html += '<ul>';
	html += '<li><a href="#">ranking01</a></li>';
	html += '<li><a href="#">ranking02</a></li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>TOPS</span></a>';
	html += '<ul>';
	html += '<li><a href="#">tops01</a></li>';
	html += '<li><a href="#">tops02</a></li>';
	html += '<li><a href="#">tops03</a></li>';
	html += '<li><a href="#">tops04</a></li>';
	html += '<li><a href="#">topstopstopstopstopstops</a></li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>BOTTOMS</span></a>';
	html += '<ul>';
	html += '<li><a href="#">BOTTOMS01</a></li>';
	html += '<li><a href="#">BOTTOMS02</a></li>';
	html += '<li><a href="#">BOTTOMS03</a></li>';
	html += '<li><a href="#">BOTTOMSBOTTOMS04</a></li>';
	html += '<li><a href="#">BOTTOMS05</a></li>';
	html += '<li><a href="#">BOTTOMSBOTTOMS06</a></li>';
	html += '<li><a href="#">BOTTOMS07</a></li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>ACC</span></a>';
	html += '<ul>';
	html += '<li><a href="#">ACC01</a></li>';
	html += '<li><a href="#">ACC01</a></li>';
	html += '<li><a href="#">ACC02</a></li>';
	html += '<li><a href="#">ACC03</a></li>';
	html += '<li><a href="#">ACC04</a></li>';
	html += '<li><a href="#">ACC05</a></li>';
	html += '<li><a href="#">ACC06</a></li>';
	html += '<li><a href="#">ACC07</a></li>';
	html += '<li><a href="#">ACC08</a></li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>KIDS</span></a>';
	html += '<ul>';
	html += '<li><a href="#">KIDS01</a></li>';
	html += '<li><a href="#">KIDS02</a></li>';
	html += '<li><a href="#">KIDS03</a></li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#" class="linkLine"><span>LINE</span></a>';
	html += '<ul>';
	html += '<li><a href="#">LINE01</a></li>';
	html += '</ul>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#" class="noSubDepth"><span>REVERSE WEAVE®</span></a>';
	html += '</li>';
	html += '</ul>';
	html += '<div class="gnbUtil">';
	html += '<div class="utilMemb">';
	html += '<a href="#">로그인</a>';
	html += '<a href="#">회원가입</a>';
	html += '</div>';
	html += '<div class="utilSns">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/champion/ico_gnb_insta.png" alt="인스타그램" /></a>';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/champion/ico_gnb_facebook.png" alt="페이스북" /></a>';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/champion/ico_gnb_youtube.png" alt="유투브" /></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="gnbChampClose"><span>닫기</span></button>';
	
	console.log('createGnb - layout.js');
	$(target).html(html);
}

var createSearch = function(target) {
	var html = '<label class="searchIptBox">';
	html += '<input type="text" />';
	html += '<button type="button" class="del"><span>삭제</span></button>';
	html += '<button type="button" class="confirm"><span>검색</span></button>';
	html += '</label>';
	html += '<div class="innerBox">';
	html += '<div class="recomWordBox">';
	html += '<strong>추천 검색어</strong>';
	html += '<ul>';
	html += '<li><a href="#"><em>1</em>키즈 백팩</a></li>';
	html += '<li><a href="#"><em>2</em>조거 팬츠</a></li>';
	html += '<li><a href="#"><em>3</em>모자</a></li>';
	html += '<li><a href="#"><em>4</em>리버스 위브</a></li>';
	html += '<li><a href="#"><em>5</em>후드티셔츠</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="recomWordBox02">';
	html += '<strong>최근 검색어</strong>';
	html += '<ul>';
	html += '<li><a href="#">조거 팬츠</a></li>';
	html += '<li><a href="#">챔피온 화이트로고 모자</a></li>';
	html += '<li><a href="#">짚업 후드 여성 모노그램</a></li>';
	html += '<li><a href="#">카키 조거팬츠 리버스 위브 남성 스프링시즌 세일 화이트 자수 / 카키 조거팬츠 리버스 위브 남성 스프링시즌 세일 화이트 자수</a></li>';
	html += '<li><a href="#">키즈 양말</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="btnSearchClose"></button>';
	console.log('createSearch - layout.js');
	$(target).html(html);
}

var createCateView = function(target) {
	var html = '<div class="innerBox">';
	html += '<div class="cateNav">';
	html += '<div class="innerBox">';
	html += '<span class="btnCateNav" role="button" tabindex="0">';
	html += '<button type="button">TOPS</button>';
	html += 'HOODIES&amp;SWEATSHIRTSSWHOODIESHOODIESHOODIESEATSHIRTSSWEATSHIRTSSWEATSHIRTSSWEATSHIRTSSWEATSHIRTS';
	html += '</span>';
	html += '</div>';
	html += '</div>';
	html += '<div class="cateNavLayer">';
	html += '<ul>';
	html += '<li><a href="#">HOODIES &amp; SWEATSHIRTS</a></li>';
	html += '<li><a href="#">JACKETS &amp; OUTERWEAR</a></li>';
	html += '<li><a href="#">LONG SLEEVE</a></li>';
	html += '<li><a href="#">ONEPIECE</a></li>';
	html += '<li><a href="#">OTHERS</a></li>';
	html += '<li><a href="#">SHORT SLEEVE</a></li>';
	html += '<li><a href="#">TANKS &amp; SLEEVELESS</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="cateList">';
	html += '<ul>';
	html += '<li><a href="#">ALL</a></li>';
	html += '<li class="active"><a href="#">HOODED SWEATSHIRT</a></li>';
	html += '<li><a href="#">FULL ZIP T-SHIRT</a></li>';
	html += '<li><a href="#">ZIP T-SHIRT</a></li>';
	html += '<li><a href="#">T-SHIRT</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="cateFilterWrap">';
	html += '<div class="filterCtrl">';
	html += '<div class="leftCtrl"><button type="button" class="btnFilter">상세필터</button></div>';
	html += '<div class="rightCtrl">';
	html += '<span class="selectWrap">';
	html += '<button type="button" class="btnSort">신상품순</button>';
	html += '<div class="optList">';
	html += '<ul>';
	html += '<li class="selected"><a href="#">신상품순</a></li>';
	html += '<li><a href="#">인기순</a></li>';
	html += '<li><a href="#">높은 가격순</a></li>';
	html += '<li><a href="#">낮은 가격순</a></li>';
	html += '<li><a href="#">할인율 높은순</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</span>';
	html += '</div>';
	html += '</div>';
	html += '<div class="slctItemViewWrap">';
	html += '<div class="slctItemView">';
	html += '<div class="innerBox">';
	html += '<ul class="swiper-wrapper">';
	html += '<li class="swiper-slide">';
	html += '<em>#1REVERSE WEAVE®<button type="button"><span>삭제</span></button></em>';
	html += '</li>';
	html += '<li class="swiper-slide">';
	html += '<em>#2REVERSE WEAVE®<button type="button"><span>삭제</span></button></em>';
	html += '</li>';
	html += '<li class="swiper-slide">';
	html += '<em>#3REVERSE WEAVE®<button type="button"><span>삭제</span></button></em>';
	html += '</li>';
	html += '<li class="swiper-slide">';
	html += '<em>#4REVERSE WEAVE®<button type="button"><span>삭제</span></button></em>';
	html += '</li>';
	html += '<li class="swiper-slide">';
	html += '<em>#5REVERSE WEAVE®<button type="button"><span>삭제</span></button></em>';
	html += '</li>';
	html += '<li class="swiper-slide">';
	html += '<em>#6REVERSE WEAVE®<button type="button"><span>삭제</span></button></em>';
	html += '</li>';
	html += '<li class="swiper-slide">';
	html += '<em>#7REVERSE WEAVE®<button type="button"><span>삭제</span></button></em>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	
	console.log('createCateView - layout.js');
	$(target).html(html);
}

var createDetailFilter = function(target) {
	var html = '<strong class="filterTop">상세필터</strong>';
	html += '<div class="optFilterBox">';
	html += '<ul>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" checked />';
	html += '<span>UNISEX</span>';
	html += '</label>';
	html += '</li>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" />';
	html += '<span>MEN</span>';
	html += '</label>';
	html += '</li>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" />';
	html += '<span>WOMEN</span>';
	html += '</label>';
	html += '</li>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" />';
	html += '<span>REVERSE WEAVE®</span>';
	html += '</label>';
	html += '</li>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" checked />';
	html += '<span>UNISEX</span>';
	html += '</label>';
	html += '</li>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" />';
	html += '<span>MEN</span>';
	html += '</label>';
	html += '</li>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" />';
	html += '<span>WOMEN</span>';
	html += '</label>';
	html += '</li>';
	html += '<li>';
	html += '<label class="chkItem">';
	html += '<input type="checkbox" />';
	html += '<span>REVERSE WEAVE®</span>';
	html += '</label>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="resetBox">';
	html += '<button type="button" class="resetFilter">모든 필터 초기화</button>';
	html += '</div>';
	html += '<div class="filterConfirm">';
	html += '<button type="button">필터적용</button>';
	html += '</div>';
	html += '<button type="button" class="detailFilterClose"><span>닫기</span></button>';
	
	console.log('createDetailFilter - layout.js');
	$(target).html(html);

}

var createFooter = function(target) {
	var html = '<div class="menu">';
	html += '<ul>';
	html += '<li><a href="#;">로그인</a></li>';
	html += '<li><a href="#">PC버전</a></li>';
	html += '<li><a href="#">STORE</a></li>';
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

	console.log('createFooter - layout.js');
	$(target).html(html);
}