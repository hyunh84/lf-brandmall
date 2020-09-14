var headerFn = function(target) {
	var html = '';

	html += '<h1 class="logo"><a href="#"><em>DUALIT</em></a></h1>';
	html += '<button type="button" class="btnGnb">';
	html += '<span><em>메뉴열기</em></span>';
	html += '</button>';
	html += '<a href="#" class="btnCart"><span>쇼핑백</span><em>0</em></a>';

	$(target).html(html);
}

var createGnbFn = function(target) {
	var html = '';

	html += '<nav class="dualitGnbWrap">';
	html += '<div class="mainGnb">';
	html += '<div class="gnbList">';
	html += '<ul>';
	html += '<li><a href="#">브랜드</a>';
	html += '<div class="subGnb">';
	html += '<strong>브랜드</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#">';
	html += '<span>듀얼릿에 대해</span>';
	html += '</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">';
	html += '<span>연혁</span>';
	html += '</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">';
	html += '<span>철학</span>';
	html += '</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">';
	html += '<span>수상내역</span>';
	html += '</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#">';
	html += '<span>뉴스</span>';
	html += '</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">팁/가이드</a>';
	html += '<div class="subGnb">';
	html += '<strong>팁/가이드</strong>';
	html += '<ul>';
	html += '<li>';
	html += '<a href="">';
	html += '<span>전체</span>';
	html += '</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="">';
	html += '<span>제품구매 가이드</span>';
	html += '</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="">';
	html += '<span>제품사용 주의사항</span>';
	html += '</a>';
	html += '</li>';
	html += '<li>';
	html += '<a href="">';
	html += '<span>레시피</span>';
	html += '</a>';
	html += '</li>';
	html += '</ul>';
	html += '<button type="button" class="btnGnbPrev"><em>이전</em></button>';
	html += '<button type="button" class="btnGnbClose"><em>닫기</em></button>';
	html += '</div>';
	html += '</li>';
	html += '<li><a href="#">토스터/전기포트</a></li>';
	html += '<li><a href="#">커피머신</a></li>';
	html += '<li><a href="#">커피/티</a></li>';
	html += '<li><a href="#">쿠킹가전</a></li>';
	html += '</ul>';
	html += '<div class="gnbUtil">';
	html += '<a href="">LOGIN</a>';
	html += '<a href="">JOIN</a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</nav>';

	$(target).html(html);
}

var footerFn = function(target) {
	var html = '';
	
	html += '<div class="menu">';
	html += '<ul>';
	html += '<li><a href="#">로그인</a></li>';
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