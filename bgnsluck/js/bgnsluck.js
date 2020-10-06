$(document).ready( function() {

  $(window).scroll(function() {
    var value = $(this).scrollTop();  //스크롤 수치를 취득
    console.log(value);
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