var headerFn = function(target, subDepth) {
	var html = '';

	html += '<h1 class="logo"><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/logo.png" alt="MAESTRO" /></a></h1>';
	html += '<div class="util">';
	html += '<span class="log">';
	html += '<a href="#">LOGIN</a>';
	html += '<a href="#">JOIN</a>';
	html += '</span>';
	html += '<div class="userInfo">';
	html += '<a href="#" class="btn_cart"><em>장바구니</em>0</a>';
	html += '</div>';
	html += '</div>';
	html += '<nav class="maestroGnbWrap">';
	html += '<ul>';
	html += '<li>';
	html += '<a href="#"><span>ABOUT</span></a>';
	html += '<div class="subDepth02">';
	html += '<div class="subDepthIn">';
	html += '<ul>';
	html += '<li><a href="#"><span>ABOUT MAESTRO</span></a></li>';
	html += '<li><a href="#"><span>WHAT\'S NEW</span></a></li>';
	html += '</ul>';
	html += '<div class="gnbBanner">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/temp/temp_gnb_banner01.jpg" alt="" /></a>';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/temp/temp_gnb_banner02.jpg" alt="" /></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>CAMPAIGN</span></a>';
	html += '<div class="subDepth02">';
	html += '<div class="subDepthIn">';
	html += '<ul>';
	html += '<li><a href="#"><span>2020 SS</span></a></li>';
	html += '<li><a href="#"><span>2019 FW</span></a></li>';
	html += '<li><a href="#"><span>2019 SS</span></a></li>';
	html += '<li><a href="#"><span>2018 FW</span></a></li>';
	html += '<li><a href="#"><span>2018 SS</span></a></li>';
	html += '</ul>';
	html += '<div class="gnbBanner">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/temp/temp_gnb_banner03.jpg" alt="" /></a>';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/temp/temp_gnb_banner04.jpg" alt="" /></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>PRODUCT</span></a>';
	html += '<div class="subDepth02">';
	html += '<div class="subDepthIn">';
	html += '<ul>';
	html += '<li><a href="#"><span>OUTER</span></a></li>';
	html += '<li><a href="#"><span>TOP</span></a></li>';
	html += '<li><a href="#"><span>BOTTOM</span></a></li>';
	html += '<li><a href="#"><span>SUIT</span></a></li>';
	html += '<li><a href="#"><span>ACC</span></a></li>';
	html += '</ul>';
	html += '<div class="gnbBanner">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/temp/temp_gnb_banner05.jpg" alt="" /></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<a href="#"><span>STORE</span></a>';
	html += '<div class="subDepth02">';
	html += '<div class="subDepthIn">';
	html += '<ul>';
	html += '<li><a href="#"><span>매장 찾기</span></a></li>';
	html += '</ul>';
	html += '<div class="gnbBanner">';
	html += '<a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/temp/temp_gnb_banner06.jpg" alt="" /></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '</nav>';


	$(target).html(html);
	if(subDepth === '1') {
		$('img', target).each(function() {
			console.log('aaa');
			$(this).attr('src', $(this).attr('src').replace('../../webapp', '../../webapp'));
		});
	}
}

var footerFn = function(target, subDepth) {
	var html = '';
	html += '<button type="button" class="btn_top">TOP으로 이동</button>';
	html += '<div class="footer_inner">';
	html += '<ul class="terms">';
	html += '<li><a href="#">이용약관</a></li>';
	html += '<li><a href="#"><strong>개인정보처리방침</strong></a></li>';
	html += '<li><a href="#">청소년보호정책</a></li>';
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
	html += '<div class="family">';
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
	html += '<div class="footer_certify">';
	html += '<ul>';
	html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/common/footer_copy_01.png" alt="사단법인한국온라인쇼핑협회"></a></li>';
	html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/common/footer_copy_02.png" alt="국세청 현금영수증 서비스"></a></li>';
	html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/common/footer_copy_03.png" alt="제품안전인증검색 불법제품신고센터"></a></li>';
	html += '<li><a href="#"><img src="../../webapp/WEB-INF/static/brandmall/images/maestro/common/footer_copy_04.png" alt="우리은행 채무지급보증안내"></a></li>';
	html += '<li><a href="#" class="txt_link">서비스 가입사실 확인</a></li>';
	html += '</ul>';
	html += '</div>';

	$(target).html(html);
	if(subDepth === '1') {
		$('img', target).each(function() {
			console.log('aaa');
			$(this).attr('src', $(this).attr('src').replace('../../webapp', '../../webapp'));
		});
	}
}