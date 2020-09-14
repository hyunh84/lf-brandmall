$(document).ready(function() {
	hazzysSlide();
});

var hazzysSlide = function() {
	if ($(".hazzys-main__action-wrap").length){
		$(".hazzys-main__action-wrap").slick({
			draggable: false,
			centerMode: true,
			slidesToShow: true,
			arrows: false,
			dots: true,
		});
	}
	if ($(".campaign-acc-1").length){
		$(".campaign-acc-1").slick({
			arrows: !1,
			dots: !0
		});
	}
	if ($(".campaign-slide-10").length){
		$(".campaign-slide-10 .brand-campaign__slide-wrap").slick({
			dots: true,
			draggable: false,
			prevArrow: ".campaign-slide-10 .common-slide__slide-prev-10",
			nextArrow: ".campaign-slide-10 .common-slide__slide-next-10",
			asNavFor: ".campaign-slide-10 .brand-campaign__slide-wrap"
		});
	}
	if ($(".campaign-slide-5").length){
		$(".campaign-slide-5 .brand-campaign__slide-wrap").slick({
			draggable: !1,
			prevArrow: ".campaign-slide-5 .common-slide__slide-prev-5",
			nextArrow: ".campaign-slide-5 .common-slide__slide-next-5",
			asNavFor: ".campaign-slide-5 .brand-campaign__slide-wrap"
		});
	}
	if ($(".campaign-slide-6").length){
		$(".campaign-slide-6 .brand-campaign__slide-wrap").slick({
			draggable: !1,
			prevArrow: ".campaign-slide-6 .common-slide__slide-prev-6",
			nextArrow: ".campaign-slide-6 .common-slide__slide-next-6",
			asNavFor: ".campaign-slide-6 .brand-campaign__slide-wrap"
		});
	}
	if ($(".campaign-slide-1").length){
		$(".campaign-slide-1 .brand-campaign__slide-wrap").slick({
			draggable: !1,
			prevArrow: ".campaign-slide-1 .common-slide__slide-prev-1",
			nextArrow: ".campaign-slide-1 .common-slide__slide-next-1",
			asNavFor: ".campaign-slide-1 .brand-campaign__slide-wrap"
		});
	}
	if ($(".campaign-slide-2").length){
		$(".campaign-slide-2 .brand-campaign__slide-wrap").slick({
			draggable: !1,
			prevArrow: ".campaign-slide-2 .common-slide__slide-prev-2",
			nextArrow: ".campaign-slide-2 .common-slide__slide-next-2",
			asNavFor: ".campaign-slide-2 .brand-campaign__slide-wrap"
		});
	}
	if ($(".campaign-slide-3").length){
		$(".campaign-slide-3 .brand-campaign__slide-wrap").slick({
			draggable: !1,
			prevArrow: ".campaign-slide-3 .common-slide__slide-prev-3",
			nextArrow: ".campaign-slide-3 .common-slide__slide-next-3",
			asNavFor: ".campaign-slide-3 .brand-campaign__slide-wrap"
		});
	}
	if ($(".campaign-slide-4").length){
		$(".campaign-slide-4 .brand-campaign__slide-wrap").slick({
			draggable: !1,
			prevArrow: ".campaign-slide-4 .common-slide__slide-prev-4",
			nextArrow: ".campaign-slide-4 .common-slide__slide-next-4",
			asNavFor: ".campaign-slide-4 .brand-campaign__slide-wrap"
		});
		}
	if ($(".campaign-slide-7").length){
		$(".campaign-slide-7 .brand-campaign__slide-wrap").slick({
			draggable: false,
			prevArrow: ".campaign-slide-7 .common-slide__slide-prev-7",
			nextArrow: ".campaign-slide-7 .common-slide__slide-next-7"
		});
	}
	if ($(".enjoy-slide-model").length){
		function a() {
			t = $(".enjoy-slide-model"), n = $(".brand-campaign-18fw .product-slide-1"), a = void 0, $(".brand-campaign-18fw .model-slide-1").slick({
			arrows: !1,
			dots: !0,
			customPaging: function (e, t) {
				var n = e.$slides.eq(t).find(".enjoy__image").attr("src");
				return '<a class="slick-dots-thum" data-index="' + e.$slides.eq(t).find(".enjoy__image").attr("data-index") + '"><img class="enjoy__image" src="' + n + '" alt=""></a>'
			}
			}), n.slick({
			dots: !0,
			infinite: !1,
			nextArrow: ".campaign-banner__slide-next-1",
			prevArrow: ".campaign-banner__slide-prev-1"
			}), t.on("click", ".slick-dots-thum", function (t) {
			var i = $(this).attr("data-index");
			clearTimeout(a), a = setTimeout(function () {
				n.slick("slickGoTo", i, !0)
			}, 100)
			})
		};
		a();
		function b() {
			var t = $(".enjoy-slide-model"),
			n = $(".brand-campaign-18fw .product-slide-2"),
			a = void 0;
			$(".brand-campaign-18fw .model-slide-2").slick({
			arrows: !1,
			dots: !0,
			customPaging: function (e, t) {
				var n = e.$slides.eq(t).find(".enjoy__image").attr("src");
				return '<a class="slick-dots-thum" data-index="' + e.$slides.eq(t).find(".enjoy__image").attr("data-index") + '"><img class="enjoy__image" src="' + n + '" alt=""></a>'
			}
			}), n.slick({
			dots: !0,
			infinite: !1,
			nextArrow: ".campaign-banner__slide-next-2",
			prevArrow: ".campaign-banner__slide-prev-2"
			}), t.on("click", ".slick-dots-thum", function (t) {
			var i = $(this).attr("data-index");
			clearTimeout(a), a = setTimeout(function () {
				n.slick("slickGoTo", i, !0)
			}, 100)
			})
		};
		b();
		function c() {
			var t = $(".enjoy-slide-model"),
			n = $(".brand-campaign-18fw .product-slide-3"),
			a = void 0;
			$(".brand-campaign-18fw .model-slide-3").slick({
			arrows: !1,
			dots: !0,
			customPaging: function (e, t) {
				var n = e.$slides.eq(t).find(".enjoy__image").attr("src");
				return '<a class="slick-dots-thum" data-index="' + e.$slides.eq(t).find(".enjoy__image").attr("data-index") + '"><img class="enjoy__image" src="' + n + '" alt=""></a>'
			}
			}), n.slick({
			dots: !0,
			infinite: !1,
			nextArrow: ".campaign-banner__slide-next-3",
			prevArrow: ".campaign-banner__slide-prev-3"
			}), t.on("click", ".slick-dots-thum", function (t) {
			var i = $(this).attr("data-index");
			clearTimeout(a), a = setTimeout(function () {
				n.slick("slickGoTo", i, !0)
			}, 100)
			})
		};
		c();
	}
	if ($(".artist-slide-1").length){
		console.log('artist-slide-1');
		$(".artist-slide-1 .brand-artist__slide-wrap").slick({
			draggable: !1,
			prevArrow: ".artist-slide-1 .common-slide__slide-prev",
			nextArrow: ".artist-slide-1 .common-slide__slide-next"
		});
	}
	if ($(".artist-slide-2").length){
		$(".artist-slide-2 .product-slide__wrap").slick({
			draggable: !1,
			prevArrow: ".artist-slide-2 .common-slide__slide-prev",
			nextArrow: ".artist-slide-2 .common-slide__slide-next"
		});
	}
}
