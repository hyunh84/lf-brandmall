$(document).ready(function() {
	slide.init();
});

var slide = {
	banner: function() {
	if ($(".visual-banner__wrap").length) {
		$(".hazzys-container .visual-banner__wrap").slick({
		autoplay: true,
		nextArrow: ".visual-banner__control--next",
		prevArrow: ".visual-banner__control--prev"
		});
	}
	if ($(".campaign-beauty__list-wrap").length) {
		$(".campaign-beauty__list-wrap").slick({
		dots: false,
		nextArrow: ".campaign-banner__slide-next",
		prevArrow: ".campaign-banner__slide-prev",
		asNavFor: ".campaign-beauty__list-wrap"
		});
	}
	if ($(".enjoy-slide-model").length) {
		function a () {
		var t = $(".enjoy-slide-model"),
			n = $(".brand-campaign-18fw .product-slide-1"),
			r = void 0;
		$(".brand-campaign-18fw .model-slide-1").slick({
			arrows: !1,
			dots: !0,
			customPaging: function (e, t) {
			var n = e.$slides.eq(t).find(".enjoy__image").attr("src");
			return '<a class="slick-dots-thum" data-index="' + e.$slides.eq(t).find(".enjoy__image").attr("data-index") + '"><img class="enjoy__image" src="' + n + '" alt=""></a>'
			}
		}), n.slick({
			dots: !1,
			infinite: !1,
			nextArrow: ".campaign-banner__slide-next-1",
			prevArrow: ".campaign-banner__slide-prev-1",
			slidesToShow: 4
		}), t.on("click", ".slick-dots-thum", function (t) {
			var a = $(this).attr("data-index");
			clearTimeout(r), r = setTimeout(function () {
			n.slick("slickGoTo", a, !0)
			}, 100)
		})
		};
		a();
		function b () {
		var t = $(".enjoy-slide-model"),
			n = $(".brand-campaign-18fw .product-slide-2"),
			r = void 0;
		$(".brand-campaign-18fw .model-slide-2").slick({
			arrows: !1,
			dots: !0,
			customPaging: function (e, t) {
			var n = e.$slides.eq(t).find(".enjoy__image").attr("src");
			return '<a class="slick-dots-thum" data-index="' + e.$slides.eq(t).find(".enjoy__image").attr("data-index") + '"><img class="enjoy__image" src="' + n + '" alt=""></a>'
			}
		}), n.slick({
			dots: !1,
			infinite: !1,
			nextArrow: ".campaign-banner__slide-next-2",
			prevArrow: ".campaign-banner__slide-prev-2",
			slidesToShow: 4
		}), t.on("click", ".slick-dots-thum", function (t) {
			var a = $(this).attr("data-index");
			clearTimeout(r), r = setTimeout(function () {
			n.slick("slickGoTo", a, !0)
			}, 100)
		})
		}
		b();
		function c () {
		var t = $(".enjoy-slide-model"),
			n = $(".brand-campaign-18fw .product-slide-3"),
			r = void 0;
		$(".brand-campaign-18fw .model-slide-3").slick({
			arrows: !1,
			dots: !0,
			customPaging: function (e, t) {
			var n = e.$slides.eq(t).find(".enjoy__image").attr("src");
			return '<a class="slick-dots-thum" data-index="' + e.$slides.eq(t).find(".enjoy__image").attr("data-index") + '"><img class="enjoy__image" src="' + n + '" alt=""></a>'
			}
		}), n.slick({
			dots: !1,
			infinite: !1,
			nextArrow: ".campaign-banner__slide-next-3",
			prevArrow: ".campaign-banner__slide-prev-3",
			slidesToShow: 4
		}), t.on("click", ".slick-dots-thum", function (t) {
			var a = $(this).attr("data-index");
			clearTimeout(r), r = setTimeout(function () {
			n.slick("slickGoTo", a, !0)
			}, 100)
		})
		}
		c();
	}
	if($(".campaign-golf__list-wrap").length) {
		$(".campaign-golf__list-wrap").slick({
		dots: false,
		nextArrow: ".campaign-banner__slide-next",
		prevArrow: ".campaign-banner__slide-prev",
		asNavFor: ".campaign-golf__list-wrap"
		});
	}
	if($(".campaign-men__list-wrap").length){
		$(".campaign-men__list-wrap").slick({
		dots: false,
		nextArrow: ".campaign-banner__slide-next",
		prevArrow: ".campaign-banner__slide-prev",
		asNavFor: ".campaign-men__list-wrap"
		});
	}
	if($(".campaign-london__list-wrap").length) {
		$(".campaign-london__slide-1 .campaign-london__list-wrap").slick({
		dots: false,
		nextArrow: ".campaign-banner__slide-next-1",
		prevArrow: ".campaign-banner__slide-prev-1"
		});
		$(".slide-london-2").slick({
		dots: false,
		nextArrow: ".campaign-banner__slide-next-2",
		prevArrow: ".campaign-banner__slide-prev-2",
		asNavFor: ".slide-london-2"
		});
	}
	if($(".artist-banner__wrap").length) {
		$(".artist-banner__wrap").slick({
		dots: false,
		nextArrow: ".artist-banner__slide-next",
		prevArrow: ".artist-banner__slide-prev",
		});
	}
	if($(".hazzys-iconic__product_commmon .product-slide__wrap").length) {
		$(".hazzys-iconic__product_commmon .product-slide__wrap").slick({
		dots: !1,
		infinite: !1,
		slidesToShow: 4
		});
	}
	},
	init: function() {
		this.banner();
	}
};
