$(document).ready( function() {

	$('.btn_openli').click(function() {		
		if ($(this).attr('style') == 'transform: rotateZ(0deg);') {
			$('.btn_openli').css('transform','rotateZ(180deg)');
			$('.menu').css('height','222px')
		} else {
			$('.btn_openli').css('transform','rotateZ(0deg)');
			$('.menu').css('height','60px')
		};
	});

	$(function(){
		var FirstScroll = 0;
		var prevScrollTop = $(window).scrollTop(),
		tp = $(window).scrollTop();
		$(window).scroll(function(e){
			tp = $(this).scrollTop();
			if ( tp > prevScrollTop && tp > 550 ){
				$('.menu').css('top','-60px');
				$('.btn_openli').css('transform','rotateZ(0deg)');
				$('.menu').css('height','60px');
			} else if( tp < prevScrollTop) {
				$('.menu').css('top','0px');
				$('.btn_openli').css('transform','rotateZ(0deg)');
				$('.menu').css('height','60px');
			};
			prevScrollTop = tp;
		});
	});

	$('.goto_TTHC').mouseover(function(){$(this).text('똑똑흑채');})
	$('.goto_TTHC').mouseleave(function(){$(this).text('TTHC');})

	$('.goto_CTRG').mouseover(function(){$(this).text('카트리지');})
	$('.goto_CTRG').mouseleave(function(){$(this).text('CTRG');})

	$('.goto_DDFX').mouseover(function(){$(this).text('단단픽서');})
	$('.goto_DDFX').mouseleave(function(){$(this).text('DDFX');})

	$('.goto_shop').mouseover(function(){$(this).text('구매하기');})
	$('.goto_shop').mouseleave(function(){$(this).text('SHOP');})

	$(window).scroll(function() {
		if ($(window).scrollTop() > 88800 && $(window).scrollTop() < 89900) {
			$('.vid_ready').get(0).play();
		} else {
			$('.vid_ready').get(0).pause();
		};
		if ($(window).scrollTop() > 89900 && $(window).scrollTop() < 91200) {
			$('.vid_use').get(0).play();
		} else {
			$('.vid_use').get(0).pause();
		};
		if ($(window).scrollTop() > 91300 && $(window).scrollTop() < 92200) {
			$('.vid_change').get(0).play();
		} else {
			$('.vid_change').get(0).pause();
		};
	});

	$(window).scroll(function() {
		var now =  $(window).scrollTop()
		var total = ($(document).height() - $(window).height())
	  console.log('현재 스크롤 : ' + now);
	});


	skrollr.init({
		easing: 'cubic',
		mobileCheck: function(){
			if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
			// mobile device
		}}
	});

	$('.img_carousel').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

	$('.img_gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

});

$(document).ready( function() {
	if ($(window).scrollTop() < 10) {
		$('html').animate( { scrollTop : 550 }, 1200);
	};
});