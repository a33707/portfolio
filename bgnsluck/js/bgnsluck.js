$(document).ready( function() {

  $(window).scroll(function() {
    var value = $(this).scrollTop();  //스크롤 수치를 취득
    console.log(value);
  });


skrollr.init({
	easing: 'cubic'
});




// 반응형
var desMobile = function (){
	var width_size = $(window).width();

	if (width_size <= 640) {

	} else {

	};

}

});