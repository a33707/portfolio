$(document).ready( function() {

// $('#btn_for_vid_ready').click(function() {
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
  // console.log('총 세로 길이 : ' + total);
});


skrollr.init({
	easing: 'cubic',
	mobileCheck: function(){
		if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		// mobile device
	}}
});


$(document).ready(function() {
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

// 반응형
var desMobile = function (){
	var width_size = $(window).width();

	if (width_size <= 640) {

	} else {

	};

}

});