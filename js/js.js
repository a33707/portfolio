$(document).ready(function(){ 
	$('.menu-btn').click(function(){
		$('.menu').addClass('show');
		// $('.logo').css('color','#fff');
		$('.menu-btn').css('display','none');
		$('.close').css('display','inline-block');
	});
	$('.close').click(function(){
		$('.menu').removeClass('show');
		// $('.logo').css('color','#000');
		$('.menu-btn').css('display','inline-block');
		$('.close').css('display','none');
	});

    $('.hello').css('height', $(window).height()); 
    $(window).resize(function() { 
        $('.hello').css('height', $(window).height()); 
    }); 
});