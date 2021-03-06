var headerFn = function(target) {
	var html = '';
	html += '<div class="top_banner">';
	html += '<button type="button" class="swiper-prev"><em>이전</em></button>';
	html += '<div class="cmtSlideWrap">';
	html += '<ul class="swiper-wrapper">';
	html += '<li class="swiper-slide"><span>콜한 공식 English 온라인 스토어1111</span></li>';
	html += '<li class="swiper-slide"><span>콜한 공식 온라인 스토어2222</span></li>';
	html += '<li class="swiper-slide"><span>콜한 공식 온라인 스토어3333</span></li>';
	html += '</ul>';
	html += '</div>';
	html += '<button type="button" class="swiper-next"><em>다음</em></button>';
	html += '</div>';
	html += '<div class="header_inner">';
	html += '<h1 class="logo"><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/colehaan/logo.png" alt="COLE HAAN" /></a></h1>';
	html += '<div class="hUtil">';
	html += '<div class="hSearchBox">';
	html += '<input type="text" title="검색어를 입력하세요" />';
	html += '</div>';
	html += '<a href="#" class="cart"><em>장바구니</em></a>';
	html += '<button type="button" class="btnOpenGnb"><em>메뉴</em></button>';
	html += '</div>';
	html += '</div>';

	$(target).html(html);
}

var createGnbFn = function(target) {
	var html = '';

	html += '<div class="inner">';
	html += '<strong>메인 메뉴</strong>';
	html += '<div class="gnb">';
	html += '<div class="gnbList">';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#">남성</a>';
	html += '<div class="subDepth02">';
	html += '<strong>남성</strong>';
	html += '<div class="depthInner">';
	html += '<div class="cateList">';
	html += '<ul>';
	html += '<li><a href="#">신상품</a></li>';
	html += '<li><a href="#">베스트셀러</a></li>';
	html += '<li><a href="#">남성세일</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="subList">';
	html += '<ul>';
	html += '<li><a href="#">정장구두</a></li>';
	html += '<li><a href="#">레이스업</a></li>';
	html += '<li><a href="#">로퍼</a></li>';
	html += '<li><a href="#">옥스포드</a></li>';
	html += '<li><a href="#">스니커즈</a></li>';
	html += '<li><a href="#">운동화</a></li>';
	html += '<li><a href="#">슬립온</a></li>';
	html += '<li><a href="#">샌들</a></li>';
	html += '<li><a href="#">슬리퍼</a></li>';
	html += '<li><a href="#">부츠</a></li>';
	html += '<li><a href="#">남성 전체보기</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="gnbPrev"><em>이전</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">여성</a>';
	html += '<div class="subDepth02">';
	html += '<strong>여성</strong>';
	html += '<div class="depthInner">';
	html += '<div class="cateList">';
	html += '<ul>';
	html += '<li><a href="#">신상품</a></li>';
	html += '<li><a href="#">베스트셀러</a></li>';
	html += '<li><a href="#">여성세일</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="subList">';
	html += '<ul>';
	html += '<li><a href="#">정장구두</a></li>';
	html += '<li><a href="#">레이스업</a></li>';
	html += '<li><a href="#">로퍼</a></li>';
	html += '<li><a href="#">옥스포드</a></li>';
	html += '<li><a href="#">스니커즈</a></li>';
	html += '<li><a href="#">운동화</a></li>';
	html += '<li><a href="#">슬립온</a></li>';
	html += '<li><a href="#">샌들</a></li>';
	html += '<li><a href="#">슬리퍼</a></li>';
	html += '<li><a href="#">부츠</a></li>';
	html += '<li><a href="#">여성 전체보기</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="gnbPrev"><em>이전</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">컬렉션</a>';
	html += '<div class="subDepth02">';
	html += '<strong>컬렉션</strong>';
	html += '<div class="depthInner">';
	html += '<div class="subList">';
	html += '<ul>';
	html += '<li><a href="#">Grandprø Rally</a></li>';
	html += '<li><a href="#">Øriginalgrand Ultra</a></li>';
	html += '<li><a href="#">Zerøgrand Runner</a></li>';
	html += '<li><a href="#">Grandprø Tennis</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="gnbPrev"><em>이전</em></button>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="gnbUtil">';
	html += '<ul>';
	html += '<li><a href="#">회원가입</a></li>';
	html += '<li><a href="#">로그인</a></li>';
	html += '<li><a href="#">매장</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '<button type="button" class="closeGnb"><em>닫기</em></button>';

	$(target).html(html);
}

var footerFn = function(target) {
	var html = '';
	
	html += '<a class="btn-back" id="backBtn" onclick="window.history.go(-1)">이전으로 이동</a>';
	html += '<div class="footer-contact">';
	html += '<div class="contact-box">';
	html += '<h3>Contact us</h3>';
	html += '<dl class="info_call">';
	html += '<dt>1544-5114 <span>(유료)</span></dt>';
	html += '<dd>상담시간 : 오전 9시 ~ 오후 6시 (토, 일, 공휴일 휴무)<br>점심시간 : 정오 12시 ~ 오후 1시 (상담가능)</dd>';
	html += '</dl>';
	html += '<a target="_blank" href="#">';
	html += '<dl class="info_insta">';
	html += '<dt>Stay Connected</dt>';
	html += '<dd>@colehaan.kr</dd>';
	html += '</dl>';
	html += '</a>';
	html += '</div>';
	html += '<div class="contact-box">';
	html += '<a href="#" class="contact-btn">About Us</a>';
	html += '<ul>';
	html += '<li><a href="#">Cole Haan</a></li>';
	html += '<li><a href="#">LF MALL</a></li>';
	html += '</ul>';
	html += '<a href="#" class="contact-btn">Customer Care</a>';
	html += '<ul>';
	html += '<li><a href="#">주문/배송</a></li>';
	html += '<li><a href="#">반품/교환/취소</a></li>';
	html += '<li><a href="#">쇼핑FAQ</a></li>';
	html += '</ul>';
	html += '</div>';
	html += '</div>';
	html += '<div class="copyright">';
	html += '<div class="info">';
	html += '<span>서울 강남구 언주로 870</span><span>(주)LF</span><span>대표이사 오규식, Footwear사업부장 이보현</span>';
	html += '<br>';
	html += '<span>대표전화:1544-5114</span><span>사업자등록번호:211-87-87724</span>';
	html += '<br>';
	html += '<span>통신판매업신고:제2010-서울강남-00066호</span>';
	html += '</div>';
	html += '<div class="link">';
	html += '<a href="#">사업자 정보확인</a><br></div>';
	html += '</div>';
	html += '<div class="footer-util">';
	html += '<ul class="util-menu">';
	html += '<li><a href="#">이용약관</a></li>';
	html += '<li><a href="#"><strong>개인정보 처리방침</strong></a></li>';
	html += '<li><a href="#">청소년보호정책</a></li>';
	html += '<li><a href="#">공지사항</a></li>';
	html += '</ul>';
	html += '<span class="copy">© 2019 Cole Haan</span>';
	html += '<button type="button" class="btn-top">Make your way to the top</button>';
	html += '</div>';


	$(target).html(html);
}