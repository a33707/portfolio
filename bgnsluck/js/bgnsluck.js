$(document).ready( function() {

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